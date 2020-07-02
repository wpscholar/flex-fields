'use strict';

const autoprefixer = require('autoprefixer');
const browsers = require('@wordpress/browserslist-config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = function (env, options) {

	const entry = {
		'flex-fields': [
			'./source/js/flex-fields.js',
			'./source/scss/flex-fields.scss',
			'./node_modules/flatpickr/dist/flatpickr.css',
			'./node_modules/flatpickr/dist/plugins/confirmDate/confirmDate.css',
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

	const loaders = {
		css: {
			loader: 'css-loader',
			options: {
				sourceMap: true,
			},
		},
		postCss: {
			loader: 'postcss-loader',
			options: {
				plugins: [
					autoprefixer({
						overrideBrowserslist: browsers,
						flexbox: 'no-2009',
					}),
				],
				sourceMap: true,
			},
		},
		sass: {
			loader: 'sass-loader',
			options: {
				sourceMap: true,
			},
		},
	};

	return {
		mode,
		entry,
		output: {
			path: path.join(__dirname, '/'),
			filename: `${paths.js}[name]${extPrefix}.js`,
		},
		module: {
			rules: [
				{
					test: /\.js|.jsx|.es6/,
					loader: 'babel-loader',
					query: {
						presets: [
							'@wordpress/default',
						],
						plugins: [
							[
								'@wordpress/babel-plugin-makepot',
								{
									'output': `${paths.lang}translation.pot`,
								}
							],
							'transform-class-properties',
						],
					},
					exclude: /(node_modules|bower_components)/,
				},
				{
					test: /\.css$/,
					use: [
						MiniCssExtractPlugin.loader,
						loaders.css,
						loaders.postCss,
					],
					exclude: /(bower_components)/,
				},
				{
					test: /\.scss$/,
					use: [
						MiniCssExtractPlugin.loader,
						loaders.css,
						loaders.postCss,
						loaders.sass,
					],
					exclude: /(node_modules|bower_components)/,
				},
				{
					test: /\.(ttf|eot|svg|woff2?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: paths.font,
							},
						},
					],
					exclude: /(assets|node_modules|bower_components)/,
				},
				{
					test: /\.html$/,
					loader: 'raw-loader',
					exclude: /(node_modules|bower_components)/,
				},
			],
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: `${paths.css}[name]${extPrefix}.css`,
			}),
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(mode),
			}),
			function (compiler) {
				// Custom webpack plugin - remove generated JS files that aren't needed
				compiler.hooks.emit.tap('RemoveEmptyJsFiles', function (compilation) {
					compilation.chunks.forEach(chunk => {
						if (!chunk.entryModule._identifier.includes('.js')) {
							chunk.files.forEach(file => {
								if (file.includes('.js')) {
									delete compilation.assets[file];
								}
							});
						}
					});
				});
			},
		],
		externals: {
			'@wordpress/a11y': 'wp.a11y',
			'@wordpress/api-fetch': 'wp.apiFetch',
			'@wordpress/api-request': 'wp.apiRequest',
			'@wordpress/autop': 'wp.autop',
			'@wordpress/blob': 'wp.blob',
			'@wordpress/block-library': 'wp.blockLibrary',
			'@wordpress/blocks': 'wp.blocks',
			'@wordpress/block-serialization-default-parser': 'wp.blockSerializationDefaultParser',
			'@wordpress/components': 'wp.components',
			'@wordpress/compose': 'wp.compose',
			'@wordpress/core-data': 'wp.coreData',
			'@wordpress/data': 'wp.data',
			'@wordpress/date': 'wp.date',
			'@wordpress/deprecated': 'wp.deprecated',
			'@wordpress/dom': 'wp.dom',
			'@wordpress/dom-ready': 'wp.domReady',
			'@wordpress/editor': 'wp.editor',
			'@wordpress/edit-post': 'wp.editPost',
			'@wordpress/element': 'wp.element',
			'@wordpress/escape-html': 'wp.escapeHtml',
			'@wordpress/format-library': 'wp.formatLibrary',
			'@wordpress/hooks': 'wp.hooks',
			'@wordpress/html-entities': 'wp.htmlEntities',
			'@wordpress/i18n': 'wp.i18n',
			'@wordpress/is-shallow-equal': 'wp.isShallowEqual',
			'@wordpress/keycodes': 'wp.keycodes',
			'@wordpress/notices': 'wp.notices',
			'@wordpress/nux': 'wp.nux',
			'@wordpress/plugins': 'wp.plugins',
			'@wordpress/redux-routine': 'wp.reduxRoutine',
			'@wordpress/rich-text': 'wp.richText',
			'@wordpress/shortcode': 'wp.shortcode',
			'@wordpress/token-list': 'wp.tokenList',
			'@wordpress/url': 'wp.url',
			'@wordpress/viewport': 'wp.viewport',
			'@wordpress/wordcount': 'wp.wordcount',
			backbone: 'Backbone',
			jquery: 'jQuery',
			lodash: 'lodash',
			moment: 'moment',
			react: 'React',
			'react-dom': 'ReactDOM',
			tinymce: 'tinymce',
			underscore: '_',
		},
		devtool: 'source-map',
	};

};
