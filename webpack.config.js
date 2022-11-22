const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';

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
                // eslint-disable-next-line no-undef
                use: [MinCssExtractPlugin.loader, 'css-loader'],
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
    ],
};
