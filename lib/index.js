var connect = require('connect');

var createConnect = function(port){

    // create a connect app
    var app = connect();

    console.log('Starting mini-harp on http://localhost:' + port);

    app.use(function(request, response, next){

        var url = request.url.split('/');

        if(url[1] === 'current-time'){
            var time = (new Date()).toISOString();
            response.end(time);
        }else{
            next();
        }

    }).listen(port);

};

module.exports = createConnect;
