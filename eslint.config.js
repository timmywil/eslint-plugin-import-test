import importPlugin from 'eslint-plugin-import'

export default [{
	files: ['index.js'],
	plugins: {
		import: importPlugin
	},
	rules: {
		semi: ['error', 'never'],

		// Uncomment the below and run eslint with --debug to see the error
		// "import/no-unused-modules": [
		// 	"error",
		// 	{
		// 		unusedExports: true
		// 	}
		// ]
	}
}]
