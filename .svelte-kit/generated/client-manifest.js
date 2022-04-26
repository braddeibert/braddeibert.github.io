export { matchers } from './client-matchers.js';

export const components = [
	() => import("../runtime/components/layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/resume.svelte"),
	() => import("../../src/routes/about.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"resume": [[0, 3], [1]],
	"about": [[0, 4], [1]]
};