<?php

/*########################################################

*/
function generate_token($key){
    $header = [
        'typ' => 'JWT',
        'alg' => 'HS256'
    ];

    $header = json_encode($header);
    $header = base64_encode($header);

    $payload = [
        "name" => "Vinita Bankhede",
        "email" => "vinita.bankhede@gmail.com"
    ];

    $payload = json_encode($payload);
    $payload = base64_encode($payload);

    // Generates a key keyed hash value using the HMAC method
    $signature = hash_hmac('sha256',"$header.$payload",$key, true);

    //base64 encode the signature
    $signature = base64_encode($signature);

    //concatenating the header , the payload and the signature to obtain the JWT token
    $token = "$header.$payload.$signature";

    return $token;


}


function check_token($token){

    $secret_key = 'myapp';
    
    // split a string by 
    $jwt_values = explode('.', $token);

    // extracting the signature from the original JWT
    $received_signature = $jwt_values[2];

    //concatenating the first two arguments of the $jwt_values array, representing
    // the header and the payload
    $receivedHeaderAndPayload = $jwt_values[0].'.'.$jwt_values[1];

    //creating the base64 encoded new signature generated by applying the HMAC method 
    // to the concatenated header and payload values
    $resultedsignature = base64_encode(hash_hmac('sha256',$receivedHeaderAndPayload, $secret_key, true));

    //checking if the created signature signature is equal to the received signature
    if($resultedsignature == $received_signature){
        // If everything worked fine, if the signature is ok and the payload was not modified 
        // you should get a success message
        return true;
    }
    return false;
}


?>