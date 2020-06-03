"use strict";

let asyncFunction = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction has resolved.");
        }, 4000);
    });
};

let asyncFunction2 = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction2 is done.");
        }, 3000);
    });
};


/*
let wordnikWords = "http://api.wordnik.com/v4/words.json",
wordnikWord = "http://api.wordnik.com/v4/word.json",
apiKey = "?api_key=lksjldkfjlksdfklsflksjlfjslk",
wordObj;
*/

let promise = asyncFunction();

/*we can use the then method - when the promise is resolved. Or when it fails!*/
/* Here, val is the value that is going to be returned by the promise.*/
promise.then(function(val){
       console.log("Yeah!"+" - val = "+val);
});