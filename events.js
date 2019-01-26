var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on(
    'someEvents',function (message) {
        console.log(message);
    }
)


myEmitter.emit('someEvent', "the event was emitted");