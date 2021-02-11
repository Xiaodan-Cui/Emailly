//keys.js - figure out what set of credentials to return

if (process.env.NODE_ENV === "production") {
  //we are in producition
  module.exports = require("./dev");
} else {
  //we are in development
  module.exports = require("./dev");
}
