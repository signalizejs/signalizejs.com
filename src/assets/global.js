import Signalize from './signalizejs/src/Signalize.js';
import evaluator from './signalizejs/src/plugins/evaluator.js';
import domTraverser from './signalizejs/src/plugins/traverse-dom.js';
import directives from './signalizejs/src/plugins/directives.js';
import fetch from './signalizejs/src/plugins/fetch.js';
import snippets from './signalizejs/src/plugins/snippets.js';
import spa from './signalizejs/src/plugins/spa.js';

export const signalize = new Signalize({
	componentPrefix: '',
	plugins: [
		evaluator(),
		domTraverser(),
		directives(),
		fetch(),
		snippets(),
		spa()
	]
});

const { on, component, signal, bind} = signalize;

component('header-navigation', {
	construct: () => ({
		navigationOpened: signal(false)
	})
})

component('spa-loader', {
	setup({ $refs, $el }) {
		let defaultIndicatorWidth = 5;
		let indicator = $refs.indicator;
		let indicatorWidth = signal(defaultIndicatorWidth);
		indicatorWidth.watch(({newValue}) => ({
			settable: newValue < 100
		}), { execution: 'beforeSet' });
		let interval;

		bind(indicator, { style: [indicatorWidth, () => `width: ${indicatorWidth}%`] })

		on('spa:navigation:start', () => {
			window.clearInterval(interval);
			interval = setInterval(() => {
				$el.hidden = false;
				indicatorWidth(indicatorWidth() + 0.1);
			}, 10)
		})

		on('spa:navigation:end', () => {
			$el.hidden = true
			window.clearInterval(interval)
			indicatorWidth(defaultIndicatorWidth);
		})
	}
});
