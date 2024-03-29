const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
module.exports = {
    entry: { app: './src/client/app.js' },
    output: {
        path: path.resolve(__dirname, '../dist/static'),
        filename: 'index.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: path.resolve(__dirname, '../src'),
                exclude: /node_modules/,
                use: { loader: 'ts-loader' }
            },
            {
                test: /\.tsx$/,
                include: path.resolve(__dirname, '../src'),
                exclude: /node_modules/,
                use: { loader: 'ts-loader' }
            },
            // JavaScript
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(scss|css)$/,
                include: path.resolve(__dirname, '../src'),
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.less$/i,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                strictMath: true
                            }
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.json']
    },
    externals: [nodeExternals()],
    plugins: [
        // new HtmlWebpackPlugin({
        //     title: 'hulu-hooks',
        //     filename: 'index.html',
        //     template: path.resolve(__dirname, '../public/index.html')
        // })
    ]
};
