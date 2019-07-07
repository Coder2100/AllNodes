const  EventEmitter = require('events');

//create events

class MyEmitter extends EventEmitter{}
//initialize object
const myEmitter = new MyEmitter();

//event listener
myEmitter.on('event', () => console.log('Event Fired!'));

myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');