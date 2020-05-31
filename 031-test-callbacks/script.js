let logCall = function(){
    console.log("logCall was called back");
};

setTimeout(logCall, 3000);

//using anonymous function
setTimeout(function(){
    console.log("first staement");
}, 2000);

/*
A very common application in JavaScript for callbacks are event listeners..
*/

let btn = document.querySelector("#button1");
let h1Tag = document.querySelector("h1");



btn.addEventListener("mousedown",function(e){
    h1Tag.innerHTML = "Down";
});



btn.addEventListener("mouseup",function(e){
    h1Tag.innerHTML = "Up";
});


btn.addEventListener("mouseout",function(e){
    h1Tag.innerHTML = "Output";
});