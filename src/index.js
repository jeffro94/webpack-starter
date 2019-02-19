const moment = require('moment');

console.log("Hello from JavaScript!!");
console.log(moment().startOf('day').fromNow());

const name = "Jeff", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);