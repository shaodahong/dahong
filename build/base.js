/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('./utils');

const config = {
	mode: process.env.NODE_ENV,
	entry: resolve('src/main.ts'),
	module: {
		rules: [
			{
				test: /\.ts[x]?$/,
				use: [
		  	'babel-loader',
					{
						  loader: 'ts-loader',
						options: {
							transpileOnly: true,
							happyPackMode: true,
							configFile: resolve('tsconfig.json')
						}
					}
				]
			}
		]
	}
};

module.exports = config;
