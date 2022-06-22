import { takeUntil, map, tap, shareReplay } from 'rxjs/operators';
import { fromEvent, Observable, Subject, BehaviorSubject } from 'rxjs';
import { CloseAction, Disposable, ErrorAction, MessageTransports, MonacoLanguageClient } from 'monaco-languageclient';
import ReconnectingWebSocket, { Options } from 'reconnecting-websocket';
import { AUTOCOMPLETE_STATUS, WORKSPACE } from '.';
import { toSocket, WebSocketMessageReader, WebSocketMessageWriter } from '@codingame/monaco-jsonrpc';

export class LanguageClient {
    private websocket: ReconnectingWebSocket;
    private languageClient!: MonacoLanguageClient;
    private lang_id: string;
    private set lspStatus(a: string) {
        this.$lspStatus.next(a);
    }
    private get lspStatus(): string {
        return this.$lspStatus.value;
    }
    private disposables: Disposable[] = [];


    $lspStatus = new BehaviorSubject<any>(null);
    _onMessage: Observable<any>;
    _onClose: Observable<any>;
    _onOpen: Observable<any>;



    private _destroyAll = new Subject();
    private reader!: WebSocketMessageReader;
    private writer!: WebSocketMessageWriter;

    constructor(language: string) {
        this.lang_id = language;
        const url = this.createUrl(language);
        this.websocket = this.createWebSocket(url);
        this._onMessage = fromEvent<MessageEvent>(this.websocket as any, 'message').pipe(takeUntil(this._destroyAll), map(({ data }) => JSON.parse(data)), shareReplay(1));
        this._onClose = fromEvent<MessageEvent>(this.websocket as any, 'close').pipe(takeUntil(this._destroyAll), shareReplay(1));
        this._onOpen = fromEvent<MessageEvent>(this.websocket as any, 'open').pipe(takeUntil(this._destroyAll), shareReplay(1));
        this._onClose.subscribe(x => console.log(x, 'close'));
        this.checkLspStatus();
        this._onOpen.subscribe(async () => {
            console.log('Socket Open');
            await this.cleanClient();
            this.lspStatus = AUTOCOMPLETE_STATUS.PENDING.name;
            const socket = toSocket(this.websocket as any);
            this.reader = new WebSocketMessageReader(socket);
            this.writer = new WebSocketMessageWriter(socket);
            const languageClient = this.createLanguageClient({ reader: this.reader, writer: this.writer }, language);
            this.disposables.push(languageClient.onDidChangeState((s) => { console.log(s); }));
            languageClient.setTrace(0);
            languageClient.start();
            const a = this.reader.onClose(() => {
                this.cleanClient();
                console.log('LSP TimeOut');
            });
            this.languageClient = languageClient;
            this.disposables.push(a);
        });
    }


    private checkLspStatus(): void {
        this._onMessage.subscribe((data) => {
            if (this.lang_id === 'csharp' && this.lspStatus !== AUTOCOMPLETE_STATUS.READY.name && data?.params?.diagnostics && data?.params?.uri.includes('obj/Debug/netcoreapp3.0/project.AssemblyInfo.cs')) {
                this.lspStatus = AUTOCOMPLETE_STATUS.READY.name;
            }
            if (this.lang_id !== 'csharp' && this.lspStatus !== AUTOCOMPLETE_STATUS.READY.name) {
                this.lspStatus = AUTOCOMPLETE_STATUS.READY.name;
            }
        });
    }


    async cleanClient(): Promise<void> {
        try {
            const languageClient = this.languageClient;
            if (languageClient?.needsStop()) {
                await languageClient?.stop();
            }
        } finally {
            this.disposables.forEach(x => x.dispose());
            this.reader?.dispose();
            this.writer?.dispose();
            this.disposables = [];
        }
    }


    async stop(): Promise<void> {
        this._destroyAll.next();
        this._destroyAll.complete();
        this.$lspStatus.next(null);
        this.$lspStatus.complete();
        console.log('Force Closing LSP');
        await this.cleanClient();
        this.websocket?.close();
        console.log('Force Closed Websocket');
    }

    private createUrl(languageExtension: string): string {
        const url = 'wss://8080-tyagirajat2-languageser-n9dr7dgzmiz.ws-us47.gitpod.io/'
        const a = { "moduleId": 1, "sessionId": "8b79af30-1ea1-443b-ad9c-a7fc0581e22e", "deviceId": "45328266-afef-4492-b8e3-fb407b615ae8" }
        return url + `?lang=${languageExtension}&sessionId=${a.sessionId}&deviceId=${a.deviceId}&moduleId=${a.moduleId}`;
    }

    private createWebSocket(socketUrl: string): ReconnectingWebSocket {
        const socketOptions: Options = {
            maxReconnectionDelay: 10000,
            minReconnectionDelay: 3000,
            reconnectionDelayGrowFactor: 1.3,
            minUptime: 5000,
            connectionTimeout: 4000,
            maxRetries: 2,
            debug: false
        };
        return new ReconnectingWebSocket(socketUrl, [], socketOptions);
    }

    private createLanguageClient(transports: MessageTransports, language: string): MonacoLanguageClient {
        return new MonacoLanguageClient({
            name: `${language} Client`,
            clientOptions: {
                documentSelector: [language],
                workspaceFolder: { uri: monaco.Uri.file(WORKSPACE), name: WORKSPACE, index: 0 },
                errorHandler: {
                    error: () => ({ action: ErrorAction.Continue }),
                    closed: () => ({ action: CloseAction.DoNotRestart })
                }
            },
            connectionProvider: { get: () => Promise.resolve(transports) }
        });
    }

}