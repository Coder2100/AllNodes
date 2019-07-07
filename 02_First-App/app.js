var http = require("http");// importing required module

// create server
http.createServer(function (request, response){
    //send http header
    //http status:200:ok
    //content type is text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    //send response body as hello world
    response.end('Hello World\n');
}).listen(8080);
//console print on the terminal
console.log('Server starting... http://127.0.0.1:8080/')

