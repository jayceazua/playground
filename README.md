# Learning Playground

#### Notes
Non-blocking = "async", using callbacks, promises, and/or async/await.

Node is built around an idiomatic asynchronous event-driven architecture
in which certain kinds of objects ('emitters') emit named events that
cause Function object ('listeners') to be called.

All objects that emit events are instances of the EventEmitter class.

All functions attached to the EventEmitter object are called synchronously.
Any values returned by the called listeners are ignored and will be discarded.

Downfall:
'Magic String' - a string that has some special meaning in our code
