const OFF = 0;
const WARN = 1;
const ERROR = 2;

/**
 * @typedef {Object} ESLintRules
 * @property {import('eslint/rules').ESLintRules} rules
 * @typedef {import('eslint').Linter.Config&ESLintRules} ESLintConfig
 */

/**
 * @type {ESLintConfig}
 */
module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: ['airbnb-base', 'plugin:prettier/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'arrow-parens': [ERROR, 'as-needed'],
		'default-case': [ERROR, { commentPattern: 'No Default' }],
		'no-param-reassign': [
			ERROR,
			{ props: true, ignorePropertyModificationsFor: ['draft'] },
		],
		'import/no-named-as-default': OFF,
		'import/no-extraneous-dependencies': OFF,
		'import/no-unresolved': [ERROR, { caseSensitive: false }],
		'import/prefer-default-export': OFF,
		'linebreak-style': [ERROR, 'windows'],
		'max-len': [
			ERROR,
			{
				// Ignore import lines and jsx props
				// \w+=".*$ doesn't work
				ignorePattern: '^import .*|S*w*=".*$',
				ignoreComments: true,
				ignoreUrls: true,
				ignoreRegExpLiterals: true,
				ignoreTrailingComments: true,
				ignoreTemplateLiterals: true,
			},
		],
		'no-alert': WARN,
		'no-console': OFF,
		'no-continue': OFF,
		'no-debugger': OFF,
		'no-plusplus': OFF,
		'no-tabs': OFF,
		'no-underscore-dangle': OFF,
		'no-unused-vars': WARN,
		'prettier/prettier': ERROR,
	},
};
