const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.js'
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        publicPath: "/dist",
        port: 8000,
        hot: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};

module.exports = config;
