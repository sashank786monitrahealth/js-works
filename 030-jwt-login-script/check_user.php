<?php

$input = file_get_contents('php://input');
$input = json_decode($input);
//print_r($input);


function check_user($email, $password){

//$result = "try again";
$result = false;
if($email=="demo" && $password =="demo"){
    //$response = correct;
    $result = true;
}

return $result;

}

if($input->mode == "check_user"){
 

    $response =  check_user($input->email, $input->password);

   
}

echo json_encode($response);

?>
