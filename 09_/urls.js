const url = require('url');

const myURL = new URL('http://mysite.co.za:8000/user.html?id=1&status=active');

//serialize the url
console.log(myURL.href);
console.log(myURL.toString());

//get hostname
console.log(myURL.host);

//hostname
console.log(myURL.hostname);

