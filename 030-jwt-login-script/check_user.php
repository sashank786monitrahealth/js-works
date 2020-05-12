<?php

$input = file_get_contents('php://input');
$input = json_decode($input);
//print_r($input);


function check_user($email, $password){

//$response = "try again";
$response = false;
if($email=="demo" && $password =="demo"){
    //$response = correct;
    $response = true;
}

return $response;

}

if($input->mode == "check_user"){
 

    $response =  check_user($input->email, $input->password);

   
}

echo json_encode($response);

?>
