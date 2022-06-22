import { Injectable } from '@angular/core';
import loader from '@monaco-editor/loader';
import { Uri } from 'monaco-editor';
import { MonacoServices } from 'monaco-languageclient';
import { BehaviorSubject } from 'rxjs';
import { WORKSPACE } from '.';


@Injectable({
  providedIn: 'root'
})
export class MonacoLoaderService {
  isMonacoLoaded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {
    if (!(<any>window).monacoEditorAlreadyInitialized) {
      loader.config({ paths: { vs: 'assets/monaco-editor/min/vs' } });
      loader.init().then(() => {
        (<any>window).monacoEditorAlreadyInitialized = true;
        this.isMonacoLoaded$.next(true);
        MonacoServices.install({ rootPath: Uri.file(WORKSPACE).toString() });
      });
    } else {
      this.isMonacoLoaded$.next(true);
    }
  }
}
