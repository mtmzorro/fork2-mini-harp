
var argv = require('minimist')(process.argv.slice(2));

var command = function(){

    var createMiniHarp = require('../lib/');
    var app = createMiniHarp();
    
    console.log("Starting mini-harp on http://localhost:4000");
    app.listen(4000);

};

module.exports = command;

