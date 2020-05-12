<?php

$input = file_get_contents('php://input');
$input = json_decode($input);
//print_r($input);

if($input->mode == "check_user"){
 

//$response = "try again";
$response = false;
if($input->email=="demo" && $input->password =="demo"){
    //$response = correct;
    $response = true;
}

   
}

echo json_encode($response);

?>
