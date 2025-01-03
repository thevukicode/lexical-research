import { createEmptyEditorState, EditorState } from './LexicalEditorState';
import { internalGetActiveEditor } from './LexicalUpdates';
import { createUID } from './LexicalUtils';

export type EditorThemeClasses = {};

export type CreateEditorArgs = {
  disableEvents?: boolean;
  editorState?: EditorState;
  namespace?: string;
  theme?: EditorThemeClasses;
  parentEditor?: LexicalEditor;
};

export function createEditor(editorConfig?: CreateEditorArgs): LexicalEditor {
  const config = editorConfig || {};
  const activeEditor = internalGetActiveEditor();
  const theme = config.theme || {};
  const parentEditor =
    editorConfig === undefined ? activeEditor : config.parentEditor || null;
  const disableEvents = config.disableEvents || false;
  const editorState = createEmptyEditorState();
  const namespace =
    config.namespace ||
    (parentEditor !== null ? parentEditor._config.namespace : createUID());
  const initialEditorState = config.editorState;

  const editor = new LexicalEditor();

  return editor;
}

export type EditorConfig = {
  disableEvents?: boolean;
  namespace: string;
  theme: EditorThemeClasses;
};

export class LexicalEditor {
  _config: EditorConfig;
}
