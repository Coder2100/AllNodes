const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((request, response) => {
   /*
    if (request.url === '/'){
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            response.writeHead(200, {'Content-Type': 'text/html' });
            response.end(content); 
        })
    }
     RESTAPI
    if (request.url === '/api/users'){
        const users = [
            {name: 'Bob Smith', age:40},
            {name: 'John Doe', age:30}
        ];
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(users));
    }
    */
   //build file path

   let filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' :request.url);

   //console.log(filePath);
   //response.end();

   // extension of file
   let extname = path.extname(filePath);

   //set initial content type

   let contentType = 'text/html';

   //check ext name and set content type
   switch(extname){
       case '.js':
           contentType = 'text/javascript';
           break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
         case '.jpeg':
            contentType = 'image/jpeg';
            break;
   }
   //Readfile
   fs.readFile(filePath, (err, content) => {
       if (err){
           if(err.code == 'ENOENT'){
               //Page not found
               fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                   response.writeHead(200, {'Content-Type': 'text/html'});
                   response.end(content, 'utf8');
               })
           }else{
               //server error
               response.writeHead(500);
               response.end(`Server Error: ${err.code}`);
           }
       }else{
           //success response
           response.writeHead(200, {'Content-Type': contentType});
           response.end(content, 'utf8');
       }
   });

});

const PORT = process.env.PORT || 5000;
//http://localhost:5000

server.listen(PORT, () => console.log(`Server running at port ${PORT}`));