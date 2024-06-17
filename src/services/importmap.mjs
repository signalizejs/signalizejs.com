import signalizeUrl from 'signalizejs?url';
import ajaxUrl from 'signalizejs/ajax?url';
import bindUrl from 'signalizejs/bind?url';
import componentUrl from 'signalizejs/component?url';
import dashCaseUrl from 'signalizejs/strings/cases?url';
import dialogUrl from 'signalizejs/dialog?url';
import directivesUrl from 'signalizejs/directives?url';
import directivesForUrl from 'signalizejs/directives/for?url';
import directivesIfUrl from 'signalizejs/directives/if?url';
import domReadyUrl from 'signalizejs/dom/ready?url';
import domTraverserUrl from 'signalizejs/dom/traverser?url';
import evaluatorUrl from 'signalizejs/evaluator?url';
import eventUrl from 'signalizejs/event?url';
import hyperscriptUrl from 'signalizejs/hyperscript?url';
import intersectionObserverUrl from 'signalizejs/intersection-observer?url';
import loggerUrl from 'signalizejs/logger?url';
import mutationObserverUrl from 'signalizejs/mutation-observer?url';
import offsetUrl from 'signalizejs/offset?url';
import scopeUrl from 'signalizejs/scope?url';
import signalUrl from 'signalizejs/signal?url';
import sizesUrl from 'signalizejs/sizes?url';
import snippetsUrl from 'signalizejs/snippets?url';
import spaUrl from 'signalizejs/spa?url';
import taskUrl from 'signalizejs/task?url';
import viewportUrl from 'signalizejs/viewport?url';
import visibilityUrl from 'signalizejs/visibility?url';

import { getModulesDependencies, modules } from '@config/config.mjs';

export const createImportMapJson = (selectedModules = Object.keys(modules)) => {
	const map = {
		signalizejs: signalizeUrl,
		ajax: ajaxUrl,
		bind: bindUrl,
		component: componentUrl,
		'dom/ready': domReadyUrl,
		'dom/traverser': domTraverserUrl,
		dialog: dialogUrl,
		directives: directivesUrl,
		'directives/for': directivesForUrl,
		'directives/if': directivesIfUrl,
		evaluator: evaluatorUrl,
		event: eventUrl,
		hyperscript: hyperscriptUrl,
		'intersection-observer': intersectionObserverUrl,
		logger: loggerUrl,
		'mutation-observer': mutationObserverUrl,
		offset: offsetUrl,
		scope: scopeUrl,
		signal: signalUrl,
		sizes: sizesUrl,
		snippets: snippetsUrl,
		spa: spaUrl,
		'strings/cases': dashCaseUrl,
		task: taskUrl,
		viewport: viewportUrl,
		visibility: visibilityUrl
	};

	let modules = {
		signalizejs: map.signalizejs
	};

	for (const module of getModulesDependencies(...selectedModules)) {
		modules[`signalizejs/${module.name}`] = map[module.name];
	}

	for (const module of selectedModules) {
		const moduleName = `signalizejs/${module}`

		if (moduleName in modules) {
			continue;
		}

		modules[moduleName] = map[module];
	}

	return JSON.stringify({
		imports: modules
	}, null, 2);
}
