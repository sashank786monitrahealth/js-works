"use strict";

// create promise using a Promise constructor
// now in the process of creating that promise you need to pass in a callback function
// in the paranthesis
// and the purpose of the callback function is to setup what the promise is going to do.
// lets add a callback function
// the callback function will have two parameters
// 1. resolve - this function will be called when a promise is resolved.
// 2. reject - this will be called when the promise is rejected.
let a = new Promise(function(resolve, reject){
      setTimeout(function(){
          resolve("Done.")
      },4000);
});

console.log(a);

