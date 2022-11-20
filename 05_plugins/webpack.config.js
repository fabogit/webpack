const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'none',
	entry: './src/index.js',
	output: {
		// md5 hash for caching
		filename: 'bundle_[contenthash].js',
		path: path.resolve(__dirname, './dist'),
		// could be also an url es http://url.com/
		publicPath: '',
		// clear old builds
		// clean: {
		// 	dry: true,
		// 	keep: /\.css/
		// }
	},
	module: {
		rules: [

			// will import css
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader, 'css-loader'
				]
			},

			// will import scss
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
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
		new TerserPlugin(),
		new MiniCssExtractPlugin({
			filename: 'styles_[contenthash].css',
		}),
		new CleanWebpackPlugin(
			// {
			// 	cleanOnceBeforeBuildPatterns: [
			// 		// all folders&subfolder from output.path
			// 		'**/*',
			// 		// custom path, es ./build
			// 		path.join(process.cwd(), 'build/**/*')
			// 	]
			// }
		),
		new HtmlWebpackPlugin({
			title: 'html title',
			filename: 'index.html',
			meta:
			{
				description: 'Some description'
			}
		})
	]
};