"use strict";

// create promise using a Promise constructor
// now in the process of creating that promise you need to pass in a callback function
// in the paranthesis
// and the purpose of the callback function is to setup what the promise is going to do.
// lets add a callback function
// the callback function will have two parameters
// 1. resolve - this function will be called when a promise is resolved.
// 2. reject - this will be called when the promise is rejected.
let a = new Promise(function(resolve,reject){
      setTimeout(function(){
          reject("Done.")
      },4000);
});

// now let us see how we would use that promise.
// remmeber to use that promise, we have a method then.

a.then(function(val){
   console.log("resolved: "+val); // called when resolved
}, function(val){
    console.log("rejected: "+val); // called when rejected
})

console.log("this is asynch code");