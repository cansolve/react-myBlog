var argv = require('yargs').argv;
argv.env = argv.env || {};

var config = argv.env.pro ? require('./webpack.config.build') : require('./webpack.config.dev');

module.exports = config;
