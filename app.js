let Emitter = require('events');
// architecture for eventEmitter module
let {events} = require('./config')

let emtr = new Emitter();
// this is done to prevent 'magic string' downfall
emtr.on(events.GREET, () => {
  console.log(`Did someone say greet us?`);
});

emtr.emit(events.GREET);


/*
Node is built around an idiomatic asynchronous event-driven architecture
in which certain kinds of objects ('emitters') emit named events that
cause Function object ('listeners') to be called.

All objects that emit events are instances of the EventEmitter class.

All functions attached to the EventEmitter object are called synchronously.
Any values returned by the called listeners are ignored and will be discarded.

Downfall:
'Magic String' - a string that has some special meaning in our code
*/
