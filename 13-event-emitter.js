const EventEmitter = require("events");
const customerEmitter = new EventEmitter();

customerEmitter.on("response", (name, id) => {
  console.log("Data received");
  console.log(`Data received from ${name} with id ${id}`);
});

customerEmitter.on("response", (name, id) => {
  console.log("some other logic here");
  console.log(`some other logic here: from ${name} with id ${id}`);
});

customerEmitter.emit("response", "John", 34);
