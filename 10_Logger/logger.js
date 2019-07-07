const EventEmitter = require('events');

const uuid = require('uuid');

//console.log(uuid.v4());

//create logger class
class Logger extends EventEmitter{
    log(msg){
        //call event
        this.emit('mesage', {id: uuid.v4(), msg});
    }
}

module.exports = Logger;

//index file

const Logger = require('./logger');
const logger = new Logger();

logger.on('message', data => console.log('Called Listener', data));


logger.log("hELLO wORLD");
logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');