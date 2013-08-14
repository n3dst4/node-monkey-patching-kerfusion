var alpha = require('alpha');

alpha.potato = "app.js monkeypatched potato";

var bravo = require('bravo');

console.log(bravo.getPotato());
console.log(alpha.potato);
