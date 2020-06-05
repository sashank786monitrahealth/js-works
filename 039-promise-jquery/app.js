"use strict";

console.log("inside app.js");

const moviePlanets = function(movieNum){
    let url = "https://swapi.dev/api/films"

    $.getJSON(url+"/"+movieNum+'/')
    .then(function(response){
        console.log(response.title);

        response.planets.forEach(p => $.getJSON(p)
        .then(
            pl => console.log(pl.name)
        )
        )
    })
    .catch(err => console.log(`Couldn't retreive films: ${err}`));
};

moviePlanets(1);

