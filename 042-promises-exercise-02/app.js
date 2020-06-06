var MAINAPP = (function(nsp){
    "use strict";

    let url = "https://jsonplaceholder.typicode.com/";

    /*
    This IIFE is the start of an application. The first thing we want to do is download all the posts, comments and todos so that we can work with them. Add the code in order to do that. Also, make sure that you add the posts, comments and todos to the MAINAPP variable so they are accessible outside this function 
    (e.g. nsp.posts = posts & return nsp). Because the code is asynchronous - you will need to consider the best way to do that. 
    */

    fetch(url+'posts/')
    .then(response1 => response1.json() )
    .then(posts => nsp.posts = posts)
    .catch(err => console.log(`Problem retreiving posts: ${err}`));

    fetch(url+"comments/")
    .then(response2 => response2.json())
    .then(comments => nsp.comments = comments)
    .catch(reject => console.log(`Problem receiving comments: ${reject}`));

    fetch(url+"todos/")
    .then(response3 => response3.json())
    .then(todos => nsp.todos = todos)
    .catch(reject => console.log(`Problem receiving todos: ${reject}`));

    // public 
    //nsp.posts = posts;
    //nsp.comments = comments;
    //nsp.todos = todos;

    return nsp;
})(MAINAPP || {});

console.log(MAINAPP);
