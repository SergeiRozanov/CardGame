const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimiser-plugin');

module.exports = {
    entry: './src/script.js',
    mode: isProduction ? 'production' : 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: 'true',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resourse' },
            { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resourse' },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: 'style/img', to: 'static' }],
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
    optimization: {
        minimizer: ['...', new CssMinimizerPlugin()],
    },
    devtool: isProduction ? 'hidden-source-map' : 'source-map',
};
