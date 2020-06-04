"use strict";

const swapi = function(num){
     let url = "https://swapi.dev/api/people/";

     fetch(url+num+"/").then(data => data.json())
     .then(obj => console.log(obj));
};


swapi(1);

console.log("Check other commands!");