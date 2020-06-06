"use strict";

let asyncFunction = function(){
    return new Promise(function(resolve, reject){
          setTimeout(function(){
             resolve("asyncFunction has resolved.");
          },4000)
    });
};

let asyncFunction2 = function(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("asyncFunction2 is done.");
        },4000);
    });
};

let setTimeoutP = function(time){
    return new Promise(function(res, rej){
        setTimeout(res, time);
    });
};

setTimeoutP(2000)
.then(function(){
    console.log("app2.js: Done.");
});