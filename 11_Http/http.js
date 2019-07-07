const http = require('http');

//create server object
http.createServer((request, response) => {
    //write response
    response.write('Hello World');
    response.end();
}).listen(8080, () => console.log('Server starting at... http://localhost:8080'));