var SvgStore = require('webpack-svgstore-plugin');
var path = require('path');
var sourcePath = path.join('App');
var distPath = path.join('wwwroot');

module.exports = {
		entry: {
			app: './App/app.js'
		},

		output: {
			path: './wwwroot/',
			filename: '/js/bundle.js'
		},
        
        resolve: {
			extensions: ['', '.js', '.svg']
		},
        
        devtool: 'source-map',

		plugins: [
			new SvgStore(
				path.join(sourcePath, 'images', 'icons', '*.svg'),
				'images',
				{
					name: 'sprite.[hash].svg',
					chunk: 'app',
					svgoOptions: {
					}
				})
		]
};