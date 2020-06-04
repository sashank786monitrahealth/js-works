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

let chuckNorrisAPI = "https://api.chucknorris.io/jokes/random" , joke;

/*
let wordnikWords = "http://api.wordnik.com/v4/words.json",
wordnikWord = "http://api.wordnik.com/v4/word.json",
apiKey = "?api_key=lksjldkfjlksdfklsflksjlfjslk",
wordObj;
*/
/*
let promise = asyncFunction();

//we can use the then method - when the promise is resolved. Or when it fails!
// Here, val is the value that is going to be returned by the promise.
let promise2 = promise.then(function(val){
       console.log("Yeah!"+" - val = "+val);
       return asyncFunction2();
});

promise2.then(function(val){
    console.log("promise2 returns value = "+val);
})

console.log("The code is Asynchronous!")

*/


// use chain syntax to accomplish the same
asyncFunction().then(function(val){
    console.log("Yeah!"+" - val = "+val);
    return asyncFunction2();
}).then(function(val){
    console.log("promise2 returns value = "+val);
})



console.log("The code is synchronous!");

fetch(chuckNorrisAPI).then(function(response){
    //wordObj = response;
    joke = response.body;
    console.log(response);
    console.log(joke);
});

