const path = require('path');
const TerserPlugin = require('terser-webpack-plugin')

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
			// will import scss
			{
				test: /\.scss$/,
				use: [
					'style-loader', 'css-loader', 'sass-loader'
				]
			},

			// will use babel to convert js v* to ES5
			{
				test: /\.js$/,
				exclude: '/node/modules',
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/env'],
						plugins: ['@babel/plugin-proposal-class-properties']
					}
				}
			}
		]
	},
	plugins: [
		new TerserPlugin()
	]
};