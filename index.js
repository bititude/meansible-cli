#!/usr/bin/env node

var chalk = require('chalk'),
	program = require('commander');

module.exports = {
	start : function (msg) {
		console.log(chalk.blue(msg));
		return true;
	}
}
 

