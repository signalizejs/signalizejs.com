import Signalize from 'signalizejs';
import componentModule from 'signalizejs/component';
import evaluatorModule from 'signalizejs/evaluator';
import domReadyModule from 'signalizejs/dom/ready';
import domTraverserModule from 'signalizejs/dom/traverser';
import directivesModule from 'signalizejs/directives';
import mutationObserverModule from 'signalizejs/mutation-observer';
import scopeModule from 'signalizejs/scope';
import bindModule from 'signalizejs/bind';
import eventModule from 'signalizejs/event';
import ajaxModule from 'signalizejs/ajax';
import snippetsModule from 'signalizejs/snippets';
import spaModule from 'signalizejs/spa';
import signalModule from 'signalizejs/signal';
import dashCaseModule from 'signalizejs/strings/cases';

export const $ = new Signalize({
	modules: [
		['ajax', ajaxModule],
		['event', eventModule],
		['dom/ready', domReadyModule],
		['dom/traverser',domTraverserModule],
		['signal', signalModule],
		['scope', scopeModule],
		['bind', bindModule],
		['mutation-observer', mutationObserverModule],
		['strings/cases', dashCaseModule],
		['evaluator', evaluatorModule],
		['directives', directivesModule],
		['snippets', snippetsModule],
		['spa', spaModule],
		['component', componentModule]
	]
});

/**
 * @type {{
 * 	on: import('signalizejs/types/index.js').on,
 *  component: import('signalizejs/types/index.js').component,
 *  signal: import('signalizejs/types/index.js').signal,
 *  bind: import('signalizejs/types/index.js').bind
 * }}
 */
const { on, component, signal, bind } = await $.resolve('bind', 'event', 'component', 'signal');

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

component('scroll-to-top-button', ({ $refs }) => {
	// Adjust this to your needs
	// It can be for example a height of page header
	const minScrollTop = 50;
	const scrollToTopButton = $refs.button;

	on('click', scrollToTopButton, () => window.scrollTo(0,0));

	const toggleScrollToTopButton = () => {
		let scrollTopPosition = document.documentElement.scrollTop;

		if (scrollTopPosition > minScrollTop) {
			scrollToTopButton.classList.add('s-visible');
		} else {
			scrollToTopButton.classList.remove('s-visible');
		}
	}

	document.addEventListener('scroll', toggleScrollToTopButton, { passive: true });
	document.addEventListener("DOMContentLoaded", toggleScrollToTopButton);
})
