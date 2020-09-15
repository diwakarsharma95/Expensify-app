const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
	const isProduction = env === 'production';

	return {
		entry: './src/index.js',
		output: {
			path: path.join(__dirname, 'public'),
			filename: 'bundle.js',
		},
		module: {
			rules: [
				{
					loader: 'babel-loader',
					test: /\.js$/,
					exclude: /node_modules/,
				},
				{
					test: /\.s?css$/,
					use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
				},
			],
		},
		plugins: [new MiniCssExtractPlugin({ filename: 'styles.css' })],
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			historyApiFallback: true,
		},
	};
};
