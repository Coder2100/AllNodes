const path = require('path');

//base file name
console.log(path.basename(__filename));

//dir name
console.log(path.dirname(__filename));

//file extensiom
console.log(path.extname(__filename));

//create path object
console.log(path.parse(__filename));
//access property
console.log(path.parse(__filename).base);

//concatenate path using join
console.log(path.join(__dirname, 'test', 'hello.html'));

