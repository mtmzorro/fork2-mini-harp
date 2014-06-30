
var argv = require('minimist')(process.argv.slice(2));


var command = function(){

    var createMiniHarp = require('../lib/');
    var app = createMiniHarp();

    var port = argv.port ? argv.port : 4000;
   
    console.log("Starting mini-harp on http://localhost:" + port);
    app.listen(port);

};

module.exports = command;

