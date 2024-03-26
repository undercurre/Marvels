/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'plugin:vue/vue3-essential',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier/skip-formatting'
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest'
	},
	rules: {
		'no-unused-vars': 0,
		'vue/multi-word-component-names': 'off'
	}
};
