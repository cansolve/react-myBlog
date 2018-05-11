var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var RemoveWebpackPlugin = require('remove-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var argv = require('yargs').argv;
argv.env = argv.env || {};

var enteyUrl = './';
var outputUrl = argv.env.outputUrl ? require(argv.env.outputUrl) : './';

var ONEMTHost = argv.env.host || '';

var outputFile = argv.env.outputUrl ? [outputUrl + 'index.html', outputUrl + 'static'] :
    outputUrl + 'dist';
var outpath = argv.env.outputUrl ? path.resolve(__dirname, outputUrl) : path.resolve(__dirname, 'dist');

module.exports = {
    entry: {
        bundleIndex: enteyUrl + 'static/js/index.js',
        bundleCommon: [
            'jquery',
            'react',
            'react-dom',
            'react-router',
            'lodash',
            'md5',
            'moment',
            'react-dropzone',
            'superagent'
        ]
    },
    output: {
        path: outpath,
        publicPath: '',
        filename: './static/js/[name].js',
        chunkFilename: './static/js/[name]_chunk.js',
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ['react', 'es2015', 'stage-3']
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'font-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?-url&sourceMap', 'font-loader']
                }),
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)$/,
                use: 'url-loader?limit=10240&name=static/font/[name].[ext]'
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: 'url-loader?limit=10240&name=static/image/[name].[ext]'
            }
        ]
    },
    devtool: '#source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts'],
        alias: {
            '@module': __dirname + '/static/js/module/',
            '@tools': __dirname + '/static/js/tools/',
            '@component': __dirname + '/static/js/controller/component/',
            '@dispatch': __dirname + '/static/js/controller/dispatch/',
            '@action': __dirname + '/static/js/controller/action/',
            '@reducers': __dirname + '/static/js/controller/reducers/',
            '@fetch': __dirname + '/static/js/controller/tools/fetch'
        }
    },
    plugins: [
        new RemoveWebpackPlugin(outputFile),
        new webpack.LoaderOptionsPlugin({
            options: {
                eslint: {
                    configFile: './.eslintrc'
                },
            }
        }),
        new webpack.HotModuleReplacementPlugin(),

        new webpack.optimize.SplitChunksPlugin({
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                //打包重复出现的代码
                vendor: {
                    chunks: 'initial',
                    minChunks: 2,
                    maxInitialRequests: 5, // The default limit is too small to showcase the effect
                    minSize: 0, // This is example is too small to create commons chunks
                    name: 'vendor'
                },
                //打包第三方类库
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: Infinity
                }
            }
        }),
        new webpack.optimize.RuntimeChunkPlugin({
            name: "common"
        }),
        // new BundleAnalyzerPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: enteyUrl + 'template.html',
            title: argv.env.projectName && typeof argv.env.projectName === 'string' ? argv.env.projectName : '测试demo',
            host: ONEMTHost,
            time: '',
            debug: true,
            inject: true,
            excludeChunks: ['bundleCommon']
        }),
        new ExtractTextPlugin({
            filename: './static/css/style.css',
            disable: false,
            allChunks: true,
        })
    ]
}