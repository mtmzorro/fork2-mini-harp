/**
 * [command.js]
 */

module.exports = function(){

    var argv = require('minimist')(process.argv.slice(2));
    var createMiniHarp = require('../lib/');

    var port = argv.port ? argv.port : 4000;
    createMiniHarp(port);

};

