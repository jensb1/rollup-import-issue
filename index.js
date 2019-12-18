
// why is this not resolved and bundled?
app = require('./incl.js');

console.log("main file");

let test = 0;

// This wont work, incl.js will not get bundled.
export { test }

// this will work, but will give warning:
//     (!) Mixing named and default exports

//exports.test = test;