const routes = {
	'docs': (params) => {
		const { slug = 'introduction'} = params;
		return `/docs/${slug}`;
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
		...params
	});
}
