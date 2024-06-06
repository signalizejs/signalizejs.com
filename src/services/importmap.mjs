import signalizeUrl from 'signalizejs?url';
import ajaxUrl from 'signalizejs/ajax?url';
import bindUrl from 'signalizejs/bind?url';
import componentUrl from 'signalizejs/component?url';
import dashCaseUrl from 'signalizejs/dash-case?url';
import dialogUrl from 'signalizejs/dialog?url';
import directivesUrl from 'signalizejs/directives?url';
import domReadyUrl from 'signalizejs/dom-ready?url';
import evaluateUrl from 'signalizejs/evaluate?url';
import eventUrl from 'signalizejs/event?url';
import heightUrl from 'signalizejs/height?url';
import hyperscriptUrl from 'signalizejs/hyperscript?url';
import intersectionObserverUrl from 'signalizejs/intersection-observer?url';
import isVisibleUrl from 'signalizejs/is-visible?url';
import loggerUrl from 'signalizejs/logger?url';
import mutationObserverUrl from 'signalizejs/mutation-observer?url';
import offsetUrl from 'signalizejs/offset?url';
import scopeUrl from 'signalizejs/scope?url';
import signalUrl from 'signalizejs/signal?url';
import snippetsUrl from 'signalizejs/snippets?url';
import spaUrl from 'signalizejs/spa?url';
import taskUrl from 'signalizejs/task?url';
import traversDomUrl from 'signalizejs/traverse-dom?url';
import viewportUrl from 'signalizejs/viewport?url';
import widthUrl from 'signalizejs/width?url';
import { getModulesDependencies } from '@config/config.mjs';

export const createImportMapJson = (selectedModules) => {
	const map = {
		signalizejs: signalizeUrl,
		ajax: ajaxUrl,
		bind: bindUrl,
		component: componentUrl,
		'dash-case': dashCaseUrl,
		dialog: dialogUrl,
		directives: directivesUrl,
		'dom-ready': domReadyUrl,
		evaluate: evaluateUrl,
		event: eventUrl,
		height: heightUrl,
		hyperscript: hyperscriptUrl,
		'intersection-observer': intersectionObserverUrl,
		'is-visible': isVisibleUrl,
		logger: loggerUrl,
		'mutation-observer': mutationObserverUrl,
		offset: offsetUrl,
		scope: scopeUrl,
		signal: signalUrl,
		snippets: snippetsUrl,
		spa: spaUrl,
		task: taskUrl,
		'traverse-dom': traversDomUrl,
		viewport: viewportUrl,
		width: widthUrl
	};

	let modules = {
		signalizejs: map.signalizejs
	};

	for (const module of getModulesDependencies(...selectedModules)) {
		modules[`signalizejs/${module.name}`] = map[module.name];
	}

	for (const module of selectedModules) {
		const moduleName = `signalizejs/${module}`
		console.log(moduleName);
		if (moduleName in modules) {
			continue;
		}

		modules[moduleName] = map[module];
	}

	return JSON.stringify({
		imports: modules
	}, null, 2);
}
