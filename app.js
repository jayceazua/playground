let Emitter = require('events');
// architecture for eventEmitter module
let {events} = require('./config')

let emtr = new Emitter();
// this is done to prevent 'magic string' downfall
emtr.on(events.GREET, () => {
  console.log(`Did someone say greet us?`);
});

emtr.emit(events.GREET);
