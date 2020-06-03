"use strict";

let asyncFunction = function(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("async function has resolved.")
        },4000);
    });
};

let asyncFunction2 = function(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("asyncFunction2 is done.")
        },3000);
    });
};


let promise1 = asyncFunction();
console.log(promise1);
