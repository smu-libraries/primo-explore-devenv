
const gulp = require('gulp');
const minimist = require('minimist');
const requireDir = require('require-dir');
requireDir('./gulp/tasks', { recurse: true });
const config = require('./gulp/config');


var options = minimist(process.argv.slice(2));
config.setView(options.view);
config.setBrowserify(options.browserify);
