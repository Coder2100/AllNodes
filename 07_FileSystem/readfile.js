const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, 'conned.txt'), (err, data) => {
    if (err) throw err;
    console.log(data);
});