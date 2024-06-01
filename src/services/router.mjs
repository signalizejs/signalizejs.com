import { latestSignalizeVersion } from "@config/config.mjs";

const routes = {
	'docs': (params) => {
		const { slug = 'introduction', version } = params;
		return `/docs/${version}/${slug}`;
	},
	'homepage': () => '/',
	'playground': () => {
		return '/playground';
	}
}

export const path = (routeName, params = {}) => {
	const route = routes[routeName];

	if (route === undefined) {
		throw new Error(`Unknown route "${routeName}".`);
	}

	return route({
		version: latestSignalizeVersion,
		...params
	});
}
