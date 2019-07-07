//REPL for Read, Evaluate, Print, Loop
var fs = require("fs")
var data = fs.readFileSync('text.txt');
console.log(data.toString())
console.log("The end")