<?php

$input = file_get_contents('php://input');
$input = json_decode($input);
//print_r($input);

$response = "try again";
if($input->email=="demo" && $input->password =="demo"){
    $response = correct;
}

echo json_encode($response);

?>
