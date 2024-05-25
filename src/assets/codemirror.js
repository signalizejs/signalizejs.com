import '@assets/css/codemirror.css';
import { EditorView, highlightActiveLine, rectangularSelection } from '@codemirror/view'
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark';
import { closeBrackets } from '@codemirror/autocomplete'
import { history } from '@codemirror/commands'
import { bracketMatching, indentOnInput } from '@codemirror/language'
import { highlightSelectionMatches } from '@codemirror/search'
import { EditorState } from '@codemirror/state';

const languages = {
	html: html,
	js: javascript,
	css: css
}

export const initEditor = (options) => {
	const { element, lang, code, readonly = false } = options;
	element.innerHTML = '';
	new EditorView({
		state: EditorState.create({
			doc: code().trim(),
			extensions: [
				//highlightActiveLineGutter(),
				//highlightSpecialChars(),
				//foldGutter(),
				//drawSelection(),
				//dropCursor(),
				//autocompletion(),
				//crosshairCursor(),
				//syntaxHighlighting(defaultHighlightStyle, { fallback: true }),,
				oneDark,
				languages[lang](),
				readonly
					? [
						EditorState.readOnly.of(true)
					] :
					[
						EditorView.updateListener.of((viewUpdate) => {
							if (viewUpdate.docChanged && EditorView.editable) {
								code(viewUpdate.state.doc.toString())
							}
						}),
						history(),
						indentOnInput(),
						bracketMatching(),
						closeBrackets(),
						rectangularSelection(),
						highlightActiveLine(),
						highlightSelectionMatches(),
					]
			]
		}),
		parent: element
	});
}
