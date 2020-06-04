"use strict";

const swapi = function(num){
     let url = "https://swapi.co/api/people/";

     fetch(url+num+"/").then(function(data){
        return data.json();
     })
     .then(function(obj){
         console.log(obj);
     });
};


swapi(1);

console.log("Check other commands!");