let logCall = function(){
    console.log("logCall was called back");
};

setTimeout(logCall, 3000);

//using anonymous function
setTimeout(function(){
    console.log("first staement");
}, 2000);