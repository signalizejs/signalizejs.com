import { getModulesDependencies, modules } from '@config/config.mjs';

export const createImportMapJson = (selectedModules = Object.keys(modules)) => {

	let modules = {
		signalizejs: 'https://cdn.jsdelivr.net/npm/signalizejs/+esm'
	};

	const createUrl = (moduleName) =>  `https://cdn.jsdelivr.net/npm/signalizejs/${moduleName}/+esm`;

	for (const module of getModulesDependencies(...selectedModules)) {
		modules[`signalizejs/${module.name}`] = createUrl(module.name);
	}

	for (const module of selectedModules) {
		const moduleName = `signalizejs/${module}`

		if (moduleName in modules) {
			continue;
		}

		modules[moduleName] = createUrl(module);
	}

	return JSON.stringify({
		imports: modules
	}, null, 2);
}
