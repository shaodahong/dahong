module.exports = {
	parser: "@typescript-eslint/parser",
	extends: [
		"airbnb",
		"plugin:@typescript-eslint/recommended",
		"prettier",
		"prettier/@typescript-eslint"
	],
	parserOptions: {
		project: "./tsconfig.json"
	}
};
