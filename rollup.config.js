import typescript from "@rollup/plugin-typescript";
import metablock from "rollup-plugin-userscript-metablock";
import pkg from "./package.json" with { type: "json" };

export default {
	input: "src/main.ts",
	output: {
		file: "dist/my-userscript.user.js",
		format: "iife", // userscripts don’t support modules
	},
	plugins: [
		typescript(),
		metablock({
			file: "./userscript.meta.json",
			override: {
				name: pkg.name,
				version: pkg.version,
				description: pkg.description,
				author: pkg.author,
				license: pkg.license,
			},
		}),
	],
};
