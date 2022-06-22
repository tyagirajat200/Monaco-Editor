import { Component, EventEmitter, Input, OnInit, Output, OnDestroy, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { filter, take, takeUntil, delay } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { MonacoServices } from 'monaco-languageclient';
import { LanguageClient } from './language-client';
import { DEFAULT_INIT_EDITOR_OPTIONS, AUTOCOMPLETE_STATUS, WORKSPACE } from '.';
import { MatSelectChange } from '@angular/material/select';
import { editor_lang } from './language';
import loader from '@monaco-editor/loader';
import * as monaco from 'monaco-editor';

@Component({
  selector: 'cj-monaco-editor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.scss']
})

export class MonacoEditorComponent implements OnInit, OnDestroy {
  @ViewChild('editor', { static: true }) editorEle!: ElementRef;
  technologies = editor_lang;
  codeEditor!: monaco.editor.IStandaloneCodeEditor;
  options = DEFAULT_INIT_EDITOR_OPTIONS as any;
  @Input() loading!: boolean;
  @Input() loadingMsg!: string;
  @Input() enableCopyPaste = true;
  @Output() contentChange: EventEmitter<string> = new EventEmitter();
  @Output() onfirepadSync: EventEmitter<string> = new EventEmitter();
  @Output() languageChange: EventEmitter<number | string> = new EventEmitter();
  @Output() onfirepadCreated: EventEmitter<{ isHistoryEmpty: boolean, callback: Function }> = new EventEmitter();
  @Output() init: EventEmitter<monaco.editor.IStandaloneCodeEditor> = new EventEmitter();

  _language: any;
  @Input() set language(x: any) {
    this._language = x;
    this.resetPads();
    if (x) {
      loader.config({ paths: { vs: 'assets/monaco-editor/min/vs' } });

      loader.init().then(() => this.initMonaco(x));
      // this.languageChangeSubs = this.monacoLoader.isMonacoLoaded$.pipe(filter(isLoaded => isLoaded), take(1), delay(500)).subscribe(() => this.initMonaco(x));
    }
  }


  get language(): any {
    return this._language;
  }


  selectedTabsize!: number;
  selectedTheme!: string;
  selectedFontSize!: number;

  changeContentSubs!: monaco.IDisposable;
  changeCursorSubs!: monaco.IDisposable;
  languageChangeSubs!: Subscription;
  lspClient!: LanguageClient;
  model!: monaco.editor.ITextModel;

  lspStatus!: string;
  position!: monaco.Position;


  get AUTOCOMPLETE_STATUS(): any {
    return AUTOCOMPLETE_STATUS;
  }


  private _unsubcribeAll!: Subject<any>;

  constructor(
    private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.language = this.technologies[0];
  }

  initMonaco(technology: any): void {
    let attributes = technology ? technology.attributes : null;
    attributes = typeof attributes === 'string' ? JSON.parse(attributes) : attributes
    const lang_id = attributes.monaco;
    const fileExtension = attributes.extension;
    this.model = monaco.editor.createModel(attributes.stub, lang_id, monaco.Uri.file(`${WORKSPACE}/${lang_id === 'java' ? 'Main' : 'tmp'}.${fileExtension}`));
    this.codeEditor = monaco.editor.create(this.editorEle.nativeElement, { ...this.options, model: this.model, theme: 'vs-dark' });
    monaco.languages.register({ id: lang_id, extensions: [fileExtension] });
    MonacoServices.install({ rootPath: monaco.Uri.file(WORKSPACE).toString() });
    this.changeContentSubs = this.codeEditor.onDidChangeModelContent(() => this.contentChange.emit(this.getValue()));
    this.changeCursorSubs = this.codeEditor.onDidChangeCursorPosition((e) => { this.position = e.position; this.cd.markForCheck(); });
    this.onResized();
    this.setTheme(this.selectedTheme);
    this.setFontSize(this.selectedFontSize);
    this.setTabSize(this.selectedTabsize);
    this.init.emit(this.codeEditor);
    this.lspClient = new LanguageClient(lang_id);
    this.lspClient.$lspStatus.subscribe((x: any) => { this.lspStatus = x; this.cd.markForCheck(); });
  }



  setValue(value: string): void {
    if (this.codeEditor) {
      this.codeEditor.setValue(value);
    }
  }

  getValue(): string {
    return this.codeEditor?.getValue() || '';
  }

  setTheme(theme: string): void {
    if (theme && this.codeEditor) {
      this.selectedTheme = theme;
      monaco.editor.setTheme(theme);
    }
  }

  setFontSize(fontSize: number): void {
    if (this.codeEditor && fontSize) {
      this.selectedFontSize = fontSize;
      this.setOption({ fontSize });
    }
  }

  setTabSize(tabSize: number): void {
    if (this.codeEditor && tabSize) {
      this.selectedTabsize = tabSize;
      this.setOption({ tabSize });
    }
  }

  setOption(option: monaco.editor.IEditorOptions & monaco.editor.IGlobalEditorOptions): void {
    if (this.codeEditor) {
      this.codeEditor.updateOptions(option);
    }
  }


  resetPads(): void {
    this.lspClient?.stop();
    // this.monacoServices?.dispose();
    this.lspClient = null!;
    this.codeEditor?.setModel(null);
    this.codeEditor?.dispose();
    const model = this.model;
    setTimeout(() => model?.dispose())
    this.languageChangeSubs?.unsubscribe();
    this.changeContentSubs?.dispose();
    this.changeCursorSubs?.dispose();
    this.codeEditor = null!;
    this.model = null!;
    this.lspStatus = null!;
    this.cd.markForCheck();
  }


  onResized(): void {
    this.codeEditor?.layout();
  }

  onLanguageChangeS(event: MatSelectChange): void {
    this.language = event.value;
  }

  ngOnDestroy(): void {
    this.resetPads();
  }

}
