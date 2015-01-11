<?php header('Access-Control-Allow-Origin: *'); 

require_once('connectionSettings.php');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$uploadFile = $_POST["uploadFile"];

$userName = $_get["id"];

$query = mysqli_query($conn, "INSERT INTO images2 VALUES (image_path='$uploadFile', user_id='$id');

?>