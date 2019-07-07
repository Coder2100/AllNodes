const fs = require('fs');
const path = require('path');

//create folder
fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
    if (err) throw err;
    console.log("file created");
});
//create file in side test folder

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello world!', err =>{
    if (err) throw err;
    console.log("file written to..!");
});
//write to override the existing content on file
//use append to instead


fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'Zukile got conned by his fake girlfriend!', err =>{
    if (err) throw err;
    console.log("file written to..!");
});
