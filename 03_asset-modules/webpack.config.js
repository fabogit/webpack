const path = require('path');

module.exports = {
	mode: 'none',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist'),
		// could be also an url es http://url.com/
		publicPath: 'dist/'
	},
	module: {
		rules: [
			// will create a separate file
			{
				test: /\.(png)$/,
				type: 'asset/resource',
			},
			// will insert asset into bundled code as base 64str
			{
				test: /\.(jpg)$/,
				type: 'asset/inline',
			}
		]
	}
};