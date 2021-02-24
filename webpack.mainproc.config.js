var path = require('path');
var webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = function (env) {
    return [{
        target: "electron-main",
        entry: {
            spec: [
                path.resolve(__dirname, 'src.mainproc/main.ts')
            ]
        },
        output: {
            library: 'main',

            libraryTarget: 'commonjs2',
            filename: 'main.js',
            path: path.resolve(__dirname, 'bin'),
            devtoolModuleFilenameTemplate: '../[resource-path]',
            // devtoolModuleFilenameTemplate: void 0
        },
        node: {
            __filename: false,
            __dirname: false,
        },
        module: {
            rules: [{
                test: /\.tsx?$/,
                use: [
                    'babel-loader',
                    'ts-loader?' + JSON.stringify({
                        configFile: 'tsconfig.mainproc.json'
                    }),
                ],
                exclude: /node_modules[\/\\].*$/
            }, {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules[\/\\].*$/
            }, {
                enforce: 'pre',
                test: /\.[tj]sx?$/,
                use: {
                    loader: 'source-map-loader',
                    options: {
                    }
                },
                exclude: /node_modules[\/\\].*$/
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        // Requires sass-loader@^7.0.0
                        options: {
                            implementation: require('sass'),
                            fiber: require('fibers'),
                            indentedSyntax: true // optional
                        },
                        // Requires sass-loader@^8.0.0
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                fiber: require('fibers'),
                                indentedSyntax: true // optional
                            },
                        },
                    },
                ],
            },],
        },
        plugins: [
        ],
        devServer: {
            contentBase: __dirname + "/dist/",
            inline: true,
            hot: true,
            host: "localhost",
            port: 8080
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js']
        },
        devtool: 'source-map'
    },

    ]
}