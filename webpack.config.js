/**
 * External Dependencies
 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

/**
 * WordPress Dependencies
 */
const defaultConfig = require('@wordpress/scripts/config/webpack.config.js');
const webpack = require("webpack");

module.exports = function (env, options) {

	const entry = {
		'flex-fields': [
			'./source/js/flex-fields.js',
			'./source/scss/flex-fields.scss',
		],
	};

	const paths = {
		css: 'assets/css/',
		img: 'assets/img/',
		font: 'assets/font/',
		js: 'assets/js/',
		lang: 'languages/',
	};

	const mode = options.mode || 'development';

	const extPrefix = mode === 'production' ? '.min' : '';

	return {
		...defaultConfig,
		mode,
		entry,
		output: {
			path: path.join(__dirname, '/'),
			filename: `${paths.js}[name]${extPrefix}.js`,
		},
		plugins: [
			new RemoveEmptyScriptsPlugin(),
			new MiniCssExtractPlugin({
				filename: `${paths.css}[name]${extPrefix}.css`,
			}),
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(mode),
			}),
		],
		devtool: 'source-map',
	}

}
