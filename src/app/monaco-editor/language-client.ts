import { takeUntil, map, tap, shareReplay } from 'rxjs/operators';
import { fromEvent, Observable, Subject, BehaviorSubject, Subscription, timer } from 'rxjs';
import { CloseAction, Disposable, ErrorAction, MessageTransports, MonacoLanguageClient, State, StateChangeEvent } from 'monaco-languageclient';
import ReconnectingWebSocket, { Options } from 'reconnecting-websocket';
import { toSocket, WebSocketMessageReader, WebSocketMessageWriter } from '@codingame/monaco-jsonrpc';
import { editor, Uri } from 'monaco-editor';
import { AUTOCOMPLETE_STATUS, WORKSPACE } from '.';
import { environment } from 'src/environments/environment';

const RETRY_COUNT = 2;
const IDLE_TIMEOUT = 2 * 60 * 1000;
export class LanguageClient {
    private websocket: ReconnectingWebSocket;
    private languageClient: MonacoLanguageClient;
    private lang_id: string;
    private set lspStatus(a: string) {
        this.$lspStatus.next(a);
    }
    private get lspStatus(): string {
        return this.$lspStatus.value;
    }
    private onDidChangeStateSubs: Disposable;
    private reader: WebSocketMessageReader;
    private writer: WebSocketMessageWriter;
    private contentChangeSubs: Disposable;


    $lspStatus = new BehaviorSubject<string>(null);
    _onMessage: Observable<any>;
    _onClose: Observable<CloseEvent>;
    _onOpen: Observable<any>;

    private _destroyAll = new Subject();
    private timer: Subscription;

    constructor(language: string, codeEditor: editor.IStandaloneCodeEditor) {
        this.lang_id = language;
        this.lspStatus = AUTOCOMPLETE_STATUS.PENDING.name;
        const url = this.createUrl(language);
        console.log(`creating websocket for ${this.lang_id}...`);
        this.websocket = this.createWebSocket(url);
        this._onMessage = fromEvent<MessageEvent>(this.websocket, 'message').pipe(takeUntil(this._destroyAll), map(({ data }) => JSON.parse(data)), shareReplay(1));
        this._onClose = fromEvent<CloseEvent>(this.websocket, 'close').pipe(takeUntil(this._destroyAll), shareReplay(1));
        this._onOpen = fromEvent<Event>(this.websocket, 'open').pipe(takeUntil(this._destroyAll), shareReplay(1));
        this._onClose.subscribe((e) => e?.reason !== 'FORCE' && this.updateLspStatus(null, true));
        this.startTimer();
        this.contentChangeSubs = codeEditor.onDidChangeModelContent(() => this.startTimer());
        this._onOpen.subscribe(async () => {
            // tslint:disable-next-line: max-line-length
            console.log(`${this.websocket.retryCount ? `retrying count:${this.websocket.retryCount}` : ''} socket connection successfull, starting language client for ${this.lang_id}...`);
            await this.cleanClient();
            const socket = toSocket(this.websocket as any);
            this.reader = new WebSocketMessageReader(socket);
            this.writer = new WebSocketMessageWriter(socket);
            this.languageClient = this.createLanguageClient({ reader: this.reader, writer: this.writer }, language);
            this.onDidChangeStateSubs = this.languageClient.onDidChangeState((s) => this.updateLspStatus(s));
            await this.languageClient.setTrace(0);
            this.languageClient.start();
        });
    }


    private startTimer(): void {
        this.timer?.unsubscribe();
        this.timer = timer(IDLE_TIMEOUT).subscribe(() => { console.log('No Activity!'); this.stopClient(); });
        if (this.lspStatus === AUTOCOMPLETE_STATUS.ERROR.name || this.lspStatus === AUTOCOMPLETE_STATUS.STOPPED.name) {
            this.lspStatus = AUTOCOMPLETE_STATUS.PENDING.name;
            this.websocket.reconnect();
        }
    }


    private updateLspStatus(state: StateChangeEvent, isSocketClosed?: boolean): void {
        if (this.websocket.retryCount === RETRY_COUNT && isSocketClosed) {
            this.lspStatus = AUTOCOMPLETE_STATUS.ERROR.name;
        } else if (state?.newState === State.Starting || isSocketClosed) {
            this.lspStatus = AUTOCOMPLETE_STATUS.PENDING.name;
        } else if (state.newState === State.Running) {
            this.lspStatus = AUTOCOMPLETE_STATUS.READY.name;
        }
    }


    async cleanClient(): Promise<void> {
        try {
            await this.languageClient?.stop();
        }
        catch (err) { }
        finally {
            this.onDidChangeStateSubs?.dispose();
            this.reader?.dispose();
            this.writer?.dispose();
        }
        return Promise.resolve();
    }


    async stopClient(clearListners?: boolean): Promise<void> {
        console.log(`closing language client for ${this.lang_id}...`);
        this.timer?.unsubscribe();
        if (clearListners) {
            this.$lspStatus.next(null);
            this.$lspStatus.complete();
            this.contentChangeSubs?.dispose();
            this._destroyAll.next();
            this._destroyAll.complete();
        } else {
            this.lspStatus = AUTOCOMPLETE_STATUS.STOPPED.name;
        }
        await this.cleanClient();
        console.log(`closing websocket for ${this.lang_id}...`);
        this.websocket?.close(1000, 'FORCE');
    } 

    private createUrl(languageExtension: string): string {
        const a = { "moduleId": 1, "sessionId": "8b79af30-1ea1-443b-ad9c-a7fc0581e22e", "deviceId": "45328266-afef-4492-b8e3-fb407b615ae8" }
        return environment.apiUrl + `?lang=${languageExtension}&sessionId=${a.sessionId}&deviceId=${a.deviceId}&moduleId=${a.moduleId}`;
    }

    private createWebSocket(socketUrl: string): ReconnectingWebSocket {
        const socketOptions: Options = {
            maxReconnectionDelay: 20000,
            minReconnectionDelay: 3000,
            reconnectionDelayGrowFactor: 1.3,
            minUptime: 5000,
            connectionTimeout: 4000,
            maxRetries: RETRY_COUNT,
            debug: false
        };
        return new ReconnectingWebSocket(socketUrl, [], socketOptions);
    }

    private createLanguageClient(transports: MessageTransports, language: string): MonacoLanguageClient {
        return new MonacoLanguageClient({
            name: `${language} Client`,
            clientOptions: {
                documentSelector: [language],
                workspaceFolder: { uri: Uri.file(WORKSPACE), name: WORKSPACE, index: 0 },
                errorHandler: {
                    error: () => ({ action: ErrorAction.Continue }),
                    closed: () => ({ action: CloseAction.DoNotRestart })
                }
            },
            connectionProvider: { get: () => Promise.resolve(transports) }
        });
    }

}
