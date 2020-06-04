"use strict";

const swapi = function(num){
     let url = "https://swapi.dev/api/people/";

     fetch(url+num+"/").then(data => data.json())
     .then(obj => {
         console.log(obj);
         return fetch(obj.homeworld)
        })
        .then(hwdata => hwdata.json())
        .then(hwObject => console.log(hwObject));
};


swapi(1);

console.log("Check other commands!");