import { MonacoEditorConstructionOptions } from '@materia-ui/ngx-monaco-editor';


export const DEFAULT_INIT_EDITOR_OPTIONS: MonacoEditorConstructionOptions & monaco.editor.ITextModelUpdateOptions = {
    language: 'text',
    wordWrap: 'on',
    minimap: { enabled: false },
    roundedSelection: true,
    tabCompletion: 'on',
    scrollBeyondLastLine: false,
    overviewRulerBorder: false,
    scrollbar: {
        useShadows: false,
        verticalScrollbarSize: 12,
        horizontalScrollbarSize: 12,
    },
    fixedOverflowWidgets: true,
    contextmenu: false,
    showFoldingControls: 'always',
    fontFamily: `'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace`,
    codeLens: false
};



export const AUTOCOMPLETE_STATUS = {
    PENDING: {
        name: 'PENDING',
        text: 'Autocomplete Loading...',
        status: 'pending'
    },
    READY: {
        name: 'READY',
        text: 'Autocomplete Ready',
        status: 'ready'
    },
    ERROR: {
        name: 'ERROR',
        text: 'Autocomplete Failed',
        status: 'error'
    }
};


// export const WORKSPACE = '/workspace/language-server/project';
 export const WORKSPACE = '/workspace/Language-Servers-Testing/project';
// export const WORKSPACE = '/var/app/current/project';
