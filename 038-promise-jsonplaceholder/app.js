"use strict";

/*
fetch('https://jsonplaceholder.typicode.com/todos/5/')
  .then(data => data.json())
  .then(obj => console.log(obj));
*/

let todo = {
    completed: false,
    userID:1,
    title:"ee ho! essel world"
}

fetch('https://jsonplaceholder.typicode.com/todos/',{
    method:'POST',
    headers:{
        'Content-Type':"application/json"
    },
    body: JSON.stringify(todo)
})
.then(resp => resp.json())
.then(obj => console.log(obj))
.catch(reject => console.log(`Unable to create todo: ${reject}`));


  console.log("other code");