<?php

$input = file_get_contents('php://input');
$input = json_decode($input);
//print_r($input);


function check_user($email, $password){

    $email = filter_var($email, FILTER_VALIDATE_EMAIL);

    if($email === FALSE){
         return "Please provide a valid email address.";
    }

    //$dir = 'sqlite:/home/shree/Documents/javascript-project/js-works/030-jwt-login-script/myDB.sqllite';
    //$dbh  = new PDO($dir) or die("cannot open the database");
    //$sql =  "SELECT `id` , `email` , `password` FROM `users` WHERE `email`=".$email." AND `password`=".$password."";
    $sql =  "SELECT count(*) FROM `users` WHERE `email`='".$email."' AND `password`='".$password."'";

    
    //$stmt = $dbh->query($sql);
    //try { $stmt->execute();}
    //catch(PDOException $e){echo $e->getMessage();}
    //$rowCount = $stmt->rowCount();
    
    //$dbh = null;

    $db = new SQLite3('myDB.sqllite');
    $rowCount = (int) $db->querySingle($sql);
    //echo $rowCount;

    if ($rowCount > 0){
      return $rowCount;
    }

    return $rowCount;

    /*
    foreach ($dbh->query($query) as $row)
    {
        echo $row[0];
        $pass = $row[0];
    }

    

    return $pass;

    */
/*
//$result = "try again";
$result = false;
if($email=="demo" && $password =="demo"){
    //$response = correct;
    $result = true;
}

return $result;
*/

}

if($input->mode == "check_user"){
 

    $response =  check_user($input->email, $input->password);

   
}

echo json_encode($response);

?>
