let info = document.querySelector('#info');
let email_input = document.querySelector('#email_input');
let password_input = document.querySelector('#password_input');
document.querySelector("#login_button").addEventListener("click",check_user);


function check_user(){
    let email = email_input.value;
    let password = password_input.value;

    if (email=='' || password=='') return;
    console.log('continue..');
    let post_data = {
       "mode":"check_user",
       "email":email,
       "password": password
    }

    //fetch("http://127.0.0.1:8080/check_user.php",

    fetch("check_user.php",
    {
        method:'post',
        body:JSON.stringify(post_data),
    }).then(response=>response.json())
      .then(data=>
{
  info.style.display="block";

if(!data){
  info.innerText = "Non Existing user";
} else {

  info.innerText = 'Successful login';

}

});
}


