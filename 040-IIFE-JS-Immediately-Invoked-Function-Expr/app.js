"use strict";
/*
// function expression
let product = function(){
    console.log(5*5);
}

// We use paranthesis to invoke the above function expression
product();
*/

// Now to invoke this immediately we put paranthesis at the end while defining
let product = function(){
    console.log(5*5);
}();

// adding a paranthesis -  causes the function to invoke immediately
