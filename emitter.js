// Event Emitter sample - this is how the event emitter in node works.

function Emitter() {
  this.events = {};
};

Emitter.prototype.on = function (type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};

Emitter.prototype.emit = function (type) {
  if (this.events[type]) {
    this.events[type].forEach(function(listener) {
      listener();
    });
  };
};

module.exports = Emitter
//Event Listener -  code that responds to an event: the listener will be a function
