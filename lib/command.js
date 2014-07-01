/**
 * [command.js]
 */

module.exports = function(){

    var minimist = require('minimist');
    var createMiniHarp = require('../lib/');

    var argv = minimist(process.argv.slice(2));
    var root = argv._[0] ? argv._[0] : process.cwd();
    var port = argv.port ? argv.port : 4000;

    var miniHarp = createMiniHarp(root);

    console.log('Starting mini-harp on http://localhost:' + port);
    console.log('Set server path:' + root);

    miniHarp.listen(port);

};

