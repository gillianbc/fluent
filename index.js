const { nutrition } = require('./lunch.js');

const yummy = new nutrition();

yummy
  .bread('ciabatta')
  .filling('ham')
  .sauce('mustard')
  ;

  console.log(yummy.makeSandwich());
  // Here is your lunch.  It is a sandwich with ciabatta and ham with a little mustard