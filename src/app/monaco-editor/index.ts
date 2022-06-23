import { editor } from "monaco-editor";

export const DEFAULT_INIT_EDITOR_OPTIONS: editor.IEditorOptions & editor.IGlobalEditorOptions = {
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
        text: 'Autocomplete Loading...'
    },
    READY: {
        name: 'READY',
        text: 'Autocomplete Ready'
    },
    ERROR: {
        name: 'ERROR',
        text: 'Autocomplete Failed'
    },
    STOPPED: {
        name: 'STOPPED',
        text: 'Autocomplete Stopped'
    }
};


// export const WORKSPACE = '/workspace/language-server/project';
export const WORKSPACE = '/workspace/Language-Servers-Testing/project';
// export const WORKSPACE = '/var/app/current/project';
