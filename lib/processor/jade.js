var fs = require('fs');
var jade = require('jade');
var path = require('path');

var makeJade = function(root){

    // jade middleware
    var jadeMiddleware = function(request, response, next){

        var filePath = root + request.url;
        var extname = path.extname(request.url);

        var isHtml = (extname === '.html');

        if(isHtml){
            filePath = filePath.replace(/.html/g, '.jade');
        }

        fs.readFile(filePath, {encoding: "utf8"}, function (err, data) {

            if (err) {
                // Deal with error.
                next();

            } else {
                var html = jade.render(data);
                // write Head
                response.writeHead(200, {
                    'Content-Length': html.length,
                    'Content-Type': 'text/html'
                });
                response.end(html);
            }

        });

    };

    return jadeMiddleware;
}

module.exports = makeJade;
