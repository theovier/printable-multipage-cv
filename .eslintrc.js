module.exports = {
	env: {
		node: true,
		"vue/setup-compiler-macros": true,
	},
	extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
	plugins: [],
	rules: {
		"vue/multi-word-component-names": "off",
		"vue/no-unused-vars": [
			"error",
			{
				ignorePattern: "^_",
			},
		],
	},
};
