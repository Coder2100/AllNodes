const url = require('url');

const myURL = new URL('http://mysite.co.za:8000/user.html?id=1&status=active');

//serialize the url
console.log(myURL.href);
console.log(myURL.toString());

//get hostname
console.log(myURL.host);

//hostname
console.log(myURL.hostname);

//path name
console.log(myURL.pathname);

//serach query orr serialized query
console.log(myURL.search);

//getting file object or para objects

console.log(myURL.searchParams);

//add params
myURL.searchParams.append('abc', '12');
console.log(myURL.searchParams);

//loop through params
myURL.searchParams.forEach((value, name) => console.log(`${name}: ${value}: ${value}`));