module.exports = rootPath;

function rootPath(root){

    // rootPath middleware
    var rootPathMiddleware = function(request, response, next){

        var url = request.url;

        if(url === '/'){
            request.url = '/index.html';
        }

        next();
    };

    return rootPathMiddleware;
};