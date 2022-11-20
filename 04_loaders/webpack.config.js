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
			// // will create a separate file
			// {
			// 	test: /\.(png)$/,
			// 	type: 'asset/resource',
			// },

			// //will insert asset into bundled code as base 64str
			// {
			// 	test: /\.(jpg)$/,
			// 	type: 'asset/inline',
			// },

			// //will inject source code into bundle
			// {
			// 	test: /\.(txt)$/,
			// 	type: 'asset/source',
			// },

			// //auto based on the file size
			// {
			// 	test: /\.(png|jpg)$/,
			// 	type: 'asset',
			// 	parser: {
			// 		dataUrlCondition: {
			// 			// max size for asset/inline 10kilobytes
			// 			maxSize: 10 * 1024
			// 		}
			// 	}
			// }

			// will import css
			{
				test: /\.css$/,
				// loading order rigt to left
				use: [
					'style-loader', 'css-loader'
				]
			},

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
	}
};