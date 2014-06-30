var connect = require('connect');

var createConnect = function(){

    // create a connect app
    var app = connect();

    // start the app as an http server on port 4000
    // console.log("Starting http server on http://localhost:4000");
    // app.listen(4000);
    
    return app;

};

module.exports = createConnect;
