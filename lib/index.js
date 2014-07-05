var connect = require('connect');
var serveStatic = require('serve-static');

var rootPath = require('./processor/rootPath.js')
var makeJade = require('./processor/jade.js');
var makeLess = require('./processor/less.js');

var createConnect = function(root){

    // create a connect app
    var app = connect();

    app.use(function(request, response, next){

        var url = request.url.split('/');

        if(url[1] === 'current-time'){
            var time = (new Date()).toISOString();
            response.end(time);
        }else{
            next();
        }

    })
    .use(rootPath(root))
    .use(makeJade(root))
    .use(makeLess(root))
    .use(serveStatic(root));

    return app;

};

module.exports = createConnect;
