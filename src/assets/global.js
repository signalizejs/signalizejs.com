import Signalize from 'signalizejs';
import componentModule from 'signalizejs/component';
import evaluateModule from 'signalizejs/evaluate';
import traverserDomModule from 'signalizejs/traverse-dom';
import directivesModule from 'signalizejs/directives';
import mutationObserverModule from 'signalizejs/mutation-observer';
import scopeModule from 'signalizejs/scope';
import bindModule from 'signalizejs/bind';
import eventModule from 'signalizejs/event';
import fetchModule from 'signalizejs/fetch';
import snippetsModule from 'signalizejs/snippets';
import spaModule from 'signalizejs/spa';
import signalModule from 'signalizejs/signal';
import dashCaseModule from 'signalizejs/dash-case';
import domReadyModule from 'signalizejs/dom-ready';

export const $ = new Signalize({
	modules: [
		['event', eventModule],
		['dom-ready', domReadyModule],
		['signal', signalModule],
		['scope', scopeModule],
		['bind', bindModule],
		['mutation-observer', mutationObserverModule],
		['dash-case', dashCaseModule],
		['evaluate', evaluateModule],
		['traverse-dom', traverserDomModule],
		['directives', directivesModule],
		['fetch', fetchModule],
		['snippets', snippetsModule],
		['spa', spaModule],
		['component', componentModule]
	]
});

const { on, component, signal, bind } = await $.resolve('event', 'component', 'signal', 'bind');

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
