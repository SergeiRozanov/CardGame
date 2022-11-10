module.exports = {
    entry: './src/script.js',
    output: {
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: 'true',
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resourse' },
            { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resourse' },
        ],
    },
};
