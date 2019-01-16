'use strict';

const autoPrefixer = require( 'autoprefixer' );
const browsers = require( '@wordpress/browserslist-config' );
const mediaQueryPacker = require( 'css-mqpacker' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const OptimizeCSSAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const UglifyJsPlugin = require( 'uglifyjs-webpack-plugin' );
const webpack = require( 'webpack' );

module.exports = function () {

	const mode = process.env.NODE_ENV || 'development';
	const extensionPrefix = mode === 'production' ? '.min' : '';

	// These are the paths where different types of resources should end up.
	const paths = {
		css: 'assets/css/',
		img: 'assets/img/',
		font: 'assets/font/',
		js: 'assets/js/',
	};

	// The property names will be the file names, the values are the files that should be included.
	const entry = {
		'flex-fields': [
			'./source/js/flex-fields.js',
			'./source/scss/flex-fields.scss',
			'./node_modules/flatpickr/dist/flatpickr.css',
			'./node_modules/flatpickr/dist/plugins/confirmDate/confirmDate.css',
		],
	};

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
					autoPrefixer( {
						browsers,
						flexbox: 'no-2009',
					} ),
					mediaQueryPacker(),
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

	const config = {
		mode,
		entry,
		output: {
			filename: `${ paths.js }[name]${ extensionPrefix }.js`,
			path: __dirname,
		},
		externals: {
			'@wordpress/a11y': 'wp.a11y',
			'@wordpress/components': 'wp.components', // Not really a package.
			'@wordpress/blocks': 'wp.blocks', // Not really a package.
			'@wordpress/data': 'wp.data', // Not really a package.
			'@wordpress/date': 'wp.date', // Not really a package.
			'@wordpress/element': 'wp.element', // Not really a package.
			'@wordpress/hooks': 'wp.hooks',
			'@wordpress/i18n': 'wp.i18n',
			'@wordpress/utils': 'wp.utils', // Not really a package
			backbone: 'Backbone',
			jquery: 'jQuery',
			lodash: 'lodash',
			moment: 'moment',
			react: 'React',
			'react-dom': 'ReactDOM',
			tinymce: 'tinymce',
		},
		module: {
			rules: [
				{
					test: /\.js|.jsx/,
					loader: 'babel-loader',
					query: {
						presets: [
							'@wordpress/default',
						],
						plugins: [
							'transform-class-properties',
						],
					},
					exclude: /(node_modules|bower_components)/,
				},
				{
					test: /\.html$/,
					loader: 'raw-loader',
					exclude: /node_modules/,
				},
				{
					test: /\.css$/,
					use: [
						MiniCssExtractPlugin.loader,
						loaders.css,
						loaders.postCss,
					],
				},
				{
					test: /\.scss$/,
					use: [
						MiniCssExtractPlugin.loader,
						loaders.css,
						loaders.postCss,
						loaders.sass,
					],
					exclude: /node_modules/,
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
					exclude: /(assets)/,
				},
			],
		},
		optimization: {
			minimizer: [
				new UglifyJsPlugin( {
					cache: true,
					parallel: true,
					sourceMap: true,
				} ),
				new OptimizeCSSAssetsPlugin( {} ),
			],
		},
		plugins: [
			new MiniCssExtractPlugin( {
				filename: `${ paths.css }[name]${ extensionPrefix }.css`,
			} ),
			new webpack.DefinePlugin( {
				'process.env.NODE_ENV': JSON.stringify( mode ),
			} ),
			function () {
				// Custom webpack plugin - remove generated JS files that aren't needed
				this.hooks.done.tap( 'webpack', function (stats) {
					stats.compilation.chunks.forEach( chunk => {
						if (!chunk.entryModule._identifier.includes( '.js' )) {
							chunk.files.forEach( file => {
								if (file.includes( '.js' )) {
									fs.unlinkSync( path.join( __dirname, `/${ file }` ) );
								}
							} );
						}
					} );
				} );
			},
		],
	};

	if (mode !== 'production') {
		config.devtool = 'source-map';
	}

	return config;

};
