"use strict";

var COMM = (function communication(){
    let greet = "hello",
    goodbye = "So long";

    const getGreet = function(){
        let d = new Date();
        if (d.toLocaleTimeString().includes('AM')){
            greet = "Good Morning "
        } else {
            greet = "Hello ";
        }

        return greet;
    };

    const greeting = function(name) {
        console.log(`${getGreet() + name}! Welcome to the course.`);
    };

    // Public methods and properties
    return {
           greetUser: greeting
    }
})();


COMM.greetUser("Sonam Wangchuk from Ladakh");
