const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

console.log("test");
console.log(format(new Date(), "yyyMMdd\tHH:mm:ss"));

console.log(uuid());
