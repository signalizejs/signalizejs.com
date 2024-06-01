export const latestSignalizeVersion = '0.1';

export const cdnUrl = (packageName) => {
	if (typeof packageName !== 'string') {
		return process.env.ENV === 'dev'
			? `/src/assets/signalizejs/src/Signalize.js`
			: `https://cdn.jsdelivr.net/npm/signalizejs@latest/+esm`;
	}

	return process.env.ENV === 'dev'
		? `/src/assets/signalizejs/src/modules/${packageName}.js`
		: `https://cdn.jsdelivr.net/npm/signalizejs@latest${packageName}/+esm`;
}

export const githubLink = 'https://github.com/signalizejs/signalize';

export const discordLink = 'https://discord.gg/V82TvAVRKY';

export const twitterLink = 'https://x.com/signalizejs';

export const siteUrl = 'https://signalizejs.com';

export const modules = [
	{
		name: 'Signals & Reactivity',
		description: 'Bind signals and values to element attributes and properties.',
		icon: 'zap',
		color: '#f3c14b',
		slug: 'bind',
		api: [
			{
				label: 'bind',
				slug: 'modules/bind'
			},
			{
				label: 'signal',
				slug: 'modules/signal'
			},
		]
	},
	{
		name: 'Directives',
		description: 'Use directives to make your website interactive in no time.',
		icon: 'repeat',
		color: '#91d630',
		slug: 'bind',
		api: [
			{
				label: 'directive',
				slug: 'modules/directives',
				anchor: 'directive'
			},
			{
				label: 'evaluate',
				slug: 'modules/evaluator'
			},
			{
				label: 'getPrerenderedNodes',
				slug: '#'
			},
			{
				label: 'processDirectives',
				slug: 'modules/directives',
				anchor: 'processDirectives'
			},
		]
	},
	{
		name: 'Web Components',
		description: 'Friendly API for Native Web Components.',
		icon: 'layout',
		color: '#c94bf3',
		slug: 'bind',
		api: [
			{
				label: 'component',
				slug: 'modules/component'
			},
		]
	},
	{
		name: 'SPA',
		description: 'Create a single page application from any website easily.',
		icon: 'layers',
		color: '#4badf3',
		slug: 'bind',
		api: [
			{
				label: 'navigate',
				slug: 'modules/spa',
				anchor: 'navigate'
			}
		]
	},
	{
		name: 'Dialogs',
		description: 'Open, close and manipulate native dialog elements with dialog utilities.',
		icon: 'square',
		color: '#f37c4b',
		slug: 'bind',
		api: [
			{
				label: 'closeDialog',
				slug: 'modules/dialog',
				anchor: 'closeDialog'
			},
			{
				label: 'dialog',
				slug: 'modules/dialog'
			},
			{
				label: 'openDialog',
				slug: 'modules/dialog',
				anchor: 'openDialog'
			},
		]
	},
	{
		name: 'Logger',
		description: 'Send JavaScript errors to server without any effort.',
		icon: 'activity',
		color: '#f34b4b',
		slug: 'bind',
		api: []
	},
	{
		name: 'Web Perf',
		description: 'Utilities that will help you easily optimize UX.',
		icon: 'code',
		color: '#fb70a9',
		slug: 'bind',
		api: [
			{
				label: 'task',
				slug: 'modules/task'
			},
		]
	},
	{
		name: 'Utils',
		description: 'Various utilities for dom, event listeners, redrawing, ajax, observers and more.',
		icon: 'tool',
		color: '#4bd8f3',
		slug: 'bind',
		api: [
			{
				label: 'ajax',
				slug: 'modules/ajax'
			},
			{
				label: 'customEvent',
				slug: 'modules/custom-event'
			},
			{
				label: 'dispatch',
				slug: 'modules/event'
			},
			{
				label: 'h',
				slug: 'modules/h'
			},
			{
				label: 'height',
				slug: 'modules/height'
			},
			{
				label: 'isDomReady',
				slug: 'modules/is-visible'
			},
			{
				label: 'isInViewport',
				slug: 'modules/is-in-viewport'
			},
			{
				label: 'isVisible',
				slug: 'modules/is-visible'
			},
			{
				label: 'observeIntersction',
				slug: '#'
			},
			{
				label: 'observeMutations',
				slug: '#'
			},
			{
				label: 'off',
				slug: 'modules/event',
				anchor: 'off'
			},
			{
				label: 'offset',
				slug: '#'
			},
			{
				label: 'on',
				slug: 'modules/event',
				anchor: 'on'
			},
			{
				label: 'redrawSnippet',
				slug: 'modules/snippets',
			},
			{
				label: 'traverseDom',
				slug: '#'
			},
			{
				label: 'width',
				slug: 'modules/width'
			},
		]
	},
];

export const apiLinks = modules.map((module) => module.api).flat().sort((a, b) => {
	return (a.label < b.label) ? -1 : (a.label > b.label) ? 1 : 0;
});

export const base64Symbol = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABvFBMVEUAAAD/JD7/JD7/JD7/JD7/JD7/JD7/JD7/JD7/JD7/JD7/JD7/JD7/JD7/JD7/JD7/JD7/JD7/JD7/JD7/JD7/JD7/JD7/JD7/JD7/JD7/JD7/JD7/JD7/JD7/JD7/Iz3/ITz/OFD/b4D/LUb/KkP/qLP/+vr/m6f/Ij3/ITv/JkD/K0T/KkT/MEj/laL/9vf//Pz/pK//MUn/Ijz/MUr/eIj/tb3/xcz/xsz/w8r/8vP//f7/rbf/N0//OlH/uMH/////5Of/u8P//f3//v7/j5z/J0D/oq3/+Pn/yc//3eH/y9L/Rlz/R13/6ev/+/z/rrj/c4P/cYL/kZ7/0NX/IDv/Y3b/+vv/2t7/Hzr/usL/1Nn/S2H/X3L/4uX/RFv/ZXf/wMf/UWb/PlX/3+P/ztT/nqn/nKf/nKj/hJP/TGH/L0j/ipj/6uz/hpT/KUL/Iz7/Lkb/8PH/9/j/dob/VGj/naj/nan/oaz/2d3/z9T/M0v/v8f/ZHf/VWn/7vD/7/H/TWL/Hjn/RVv/UGX/3uH/coL/coP/vMT/2t//OVH/jpv/+fr/qbP/Mkr/wsr/xMv/r7n/boD/JT9rPthBAAAAHnRSTlMAAAQpba3a8/0DN5jg+xqK6jbD/kLZwgI46Zcq3/KEC2jLAAAAAWJLR0RA/tlc2AAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAAd0SU1FB+gFHhIWFSACurEAAAILSURBVDjLhVP5XxJBHJ1RUPAAD/CGGV0UaAvRtRZRdNC1EMWbyqPLPCrttuzw6lDKLK3+YWfZmVnXH/T9wn7mPWa+3/d9XwAYYEGhzV5U7HAUF9lthQUQWAGdJaVl5X6G8rLSEudZCYQud4Xfggq3C0KTr6yq9p9DdVUlV0Do8Vo4hJH+4/UYCvr/c3xzi2QojDugq8bKB1rbglJI/6xxUQGsdQsqfEWW5avXIu3Rjk5FP3HXQgDr6hkf6rp+Q43FYmp3d7ynN6G/Ul8HgbOB8339UWIgOTCoDeXLaHCCxiYmuHmLUpqO1HCajIzmBU2NwMb8UzJjZHxicopiOk1mMtjw1Abs7ILs7TvkbmI2m52V58j8AmbHdsA9CN9LkfsPwoqi4IePFjnv9wIfr/HxEtGWV1afBJ8+W0PCFR9wiO913sTzFy9f8UOHKUCvI2+Y4u2GYgp84gal6936+83NDx8J+fQZiSfEoPDi1jamNWZ3dsneFyyK5G3ihXkyJ9M2v34bI/HvZpvMKJyZIfvTB7lcbuOHRn4esieoUYbVaHSEpIdTeaep4b94CdRqY1hoSBscSLImjn7/4QI6LGPcKNHbEz8+PlFV9eTvP4nz+rhZYJTOjmh7ZC0gy4H/YWGkHhgeuZAUbGsNmB6LyInQIqml2cqz0IrYs7SbvMdcjIsX5/LVu3x5L1r/U7bijWwrVYT7AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI0LTA1LTMwVDE4OjIyOjIxKzAwOjAwQup04gAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNC0wNS0zMFQxODoyMjoyMSswMDowMDO3zF4AAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII='
