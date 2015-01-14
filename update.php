<?php header('Access-Control-Allow-Origin: *'); 

require_once('connectionSettings.php');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
 
//Post with ajax.
$firstnameUpdate = $_POST["firstnameUpdate"];
$lastnameUpdate = $_POST["lastnameUpdate"];
$emailUpdate = $_POST["emailUpdate"];
$passwordUpdate = $_POST["passwordUpdate"];

$userName = $_get["id"];

//Querry with saved data.
//$query = mysqli_query($conn, "UPDATE user SET nume='$firstnameUpdate', prenume='$lastnameUpdate', email='$emailUpdate', pass='$passwordUpdate' WHERE id='$id'");
$query = mysqli_query($conn, "UPDATE user SET nume='$firstnameUpdate', prenume='$lastnameUpdate', email='$emailUpdate', pass='$passwordUpdate' WHERE username='ionut'");
$varEcho = mysqli_fetch_assoc($query);
echo json_encode($varEcho);

mysqli_close($conn);

?>
