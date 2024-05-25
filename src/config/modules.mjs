import { base64Symbol } from "./config.mjs"

interface ModuleInfo {
	title: string
	packageName: string
	description: string
	url: string
	added: Date
	svgIcon?: '',
	inCore?: boolean,
	official?: boolean
}

const officialModuleIcon = base64Symbol;

export const modules: ModuleInfo = [
	// Official - In core - Alphabetically sorted
	{
		title: 'signalizejs/bind',
		packageName: 'signalizejs',
		description: 'Bind signals and values to element attributes and properties.',
		url: '/modules/signalizejs-bind',
		added: new Date('October 18, 2023 15:00'),
		base64Icon: officialModuleIcon,
		inCore: true,
		official: true
	},
	{
		title: 'signalizejs/dispatch',
		packageName: 'signalizejs',
		description: 'Dispatch global and local events easily.',
		url: '/modules/signalizejs-dispatch',
		added: new Date('October 18, 2023 15:00'),
		base64Icon: officialModuleIcon,
		inCore: true,
		official: true
	},
	{
		title: 'signalizejs/dom-ready',
		packageName: 'signalizejs',
		description: 'DOM ready listener.',
		url: '/modules/signalizejs-dom-ready',
		added: new Date('October 18, 2023 15:00'),
		base64Icon: officialModuleIcon,
		inCore: true,
		official: true
	},
	{
		title: 'signalizejs/mutation-observer',
		packageName: 'signalizejs',
		description: 'Watch for hanges being made on the DOM tree of the selected element.',
		url: '/modules/signalizejs-mutation-observer',
		added: new Date('October 18, 2023 15:00'),
		base64Icon: officialModuleIcon,
		inCore: true,
		official: true
	},
	{
		title: 'signalizejs/on',
		packageName: 'signalizejs',
		description: 'Add event listener to an element or listen to dispatched events.',
		url: '/modules/signalizejs-on',
		added: new Date('October 18, 2023 15:00'),
		base64Icon: officialModuleIcon,
		inCore: true,
		official: true
	},
	{
		title: 'signalizejs/component',
		packageName: 'signalizejs',
		description: 'Create reusable Web Components.',
		url: '/modules/signalizejs-component',
		added: new Date('October 18, 2023 15:00'),
		base64Icon: officialModuleIcon,
		inCore: true,
		official: true
	},
	{
		title: 'signalizejs/signal',
		packageName: 'signalizejs',
		description: 'Reactive primitive that can be watched, used to create stores or binded to element properties and attributes.',
		url: '/modules/signalizejs-signal',
		added: new Date('October 18, 2023 15:00'),
		base64Icon: officialModuleIcon,
		inCore: true,
		official: true
	},

	// Official - Not in core - Alphabetically sorted
	{
		title: 'signalizejs/directives',
		packageName: 'signalizejs',
		description: 'Attribute Directives inspired by Vue, Svelte and Nette.',
		url: '/modules/signalizejs-directives',
		added: new Date('October 18, 2023 15:00'),
		base64Icon: officialModuleIcon,
		official: true
	},
	{
		title: 'signalizejs/dialog',
		packageName: 'signalizejs',
		description: 'Wrapper around native dialog functionality.',
		url: '/modules/signalizejs-dialog',
		added: new Date('October 18, 2023 15:00'),
		base64Icon: officialModuleIcon,
		official: true
	},
	{
		title: 'signalizejs/evaluator',
		packageName: 'signalizejs',
		description: 'Evaluate javascript without unsafe-eval.',
		url: '/modules/signalizejs-evaluator',
		added: new Date('October 18, 2023 15:00'),
		base64Icon: officialModuleIcon,
		official: true
	},
	{
		title: 'signalizejs/fetch',
		packageName: 'signalizejs',
		description: 'Wrapper around native javascript fetch.',
		url: '/modules/signalizejs-fetch',
		added: new Date('October 18, 2023 15:00'),
		base64Icon: officialModuleIcon,
		official: true
	},
	{
		title: 'signalizejs/height',
		packageName: 'signalizejs',
		description: 'Get computed element height.',
		url: '/modules/signalizejs-height',
		added: new Date('October 18, 2023 15:00'),
		base64Icon: officialModuleIcon,
		official: true
	},
	{
		title: 'signalizejs/hyperscript',
		packageName: 'signalizejs',
		description: 'Hyperscript. For simple elements creation.',
		url: '/modules/signalizejs-hyperscript',
		added: new Date('October 18, 2023 15:00'),
		base64Icon: officialModuleIcon,
		official: true
	},
	{
		title: 'signalizejs/intersection-observer',
		packageName: 'signalizejs',
		description: 'Observe changes in the element intersection with an ancestor element or with document\'s viewport.',
		url: '/modules/signalizejs-intersection-observer',
		added: new Date('October 18, 2023 15:00'),
		base64Icon: officialModuleIcon,
		official: true
	},
	{
		title: 'signalizejs/is-in-viewport',
		packageName: 'signalizejs',
		description: 'Get element info against the current viewport.',
		url: '/modules/signalizejs-is-in-viewport',
		added: new Date('October 18, 2023 15:00'),
		base64Icon: officialModuleIcon,
		official: true
	},
	{
		title: 'signalizejs/is-visible',
		packageName: 'signalizejs',
		description: 'Get info if element is visible.',
		url: '/modules/signalizejs-is-visible',
		added: new Date('October 18, 2023 15:00'),
		base64Icon: officialModuleIcon,
		official: true
	},
	{
		title: 'signalizejs/logger',
		packageName: 'signalizejs',
		description: 'Wrapper around console (log, info, warning, error) for sending JS info to server.',
		url: '/modules/signalizejs-logger',
		added: new Date('October 18, 2023 15:00'),
		base64Icon: officialModuleIcon,
		official: true
	},
	{
		title: 'signalizejs/offset',
		packageName: 'signalizejs',
		description: 'Get element coordinates.',
		url: '/modules/signalizejs-offset',
		added: new Date('October 18, 2023 15:00'),
		base64Icon: officialModuleIcon,
		official: true
	},
	{
		title: 'signalizejs/snippets',
		packageName: 'signalizejs',
		description: 'Redraw the current DOM elements based on string input.',
		url: '/modules/signalizejs-snippets',
		added: new Date('October 18, 2023 15:00'),
		base64Icon: officialModuleIcon,
		official: true
	},
	{
		title: 'signalizejs/spa',
		packageName: 'signalizejs',
		description: 'Turn any website to SPA.',
		url: '/modules/signalizejs-spa',
		added: new Date('October 18, 2023 15:00'),
		base64Icon: officialModuleIcon,
		official: true
	},
	{
		title: 'signalizejs/task',
		packageName: 'signalizejs',
		description: 'Schedule task to be executed only if there is no pending user input. Serves for breaking long task to small ones.',
		url: '/modules/signalizejs-task',
		added: new Date('October 18, 2023 15:00'),
		base64Icon: officialModuleIcon,
		official: true
	},
	{
		title: 'signalizejs/traverse-dom',
		packageName: 'signalizejs',
		description: 'Traverse DOM nodes asynchronously.',
		url: '/modules/signalizejs-traverse-dom',
		added: new Date('October 18, 2023 15:00'),
		base64Icon: officialModuleIcon,
		official: true
	},
	{
		title: 'signalizejs/width',
		packageName: 'signalizejs',
		description: 'Get computed element width.',
		url: '/modules/signalizejs-width',
		added: new Date('October 18, 2023 15:00'),
		base64Icon: officialModuleIcon,
		official: true
	},

	// Unofficial - Alphabetically sorted
]
