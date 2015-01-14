<?php header('Access-Control-Allow-Origin: *');
	  header('Content-Type:text/plain'); 

require_once('connectionSettings.php');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
 
$id_path = $_POST['q'] ;
$entityBody = file_get_contents('php://input');
$result2 = mysqli_query($conn,"DELETE FROM images2 WHERE image_path = '$entityBody'");
//"SELECT `note` FROM `glogin_users` WHERE email = '.$email.'")
 /*
 if(isset($_GET['q'])) {
	$result = mysql_query('DELETE FROM `cloud`.`images2` WHERE `images2`.`image_path` = '.(int)$_GET['q'],$conn);
}
*/
//$query = mysqli_query($conn, "DELETE FROM `cloud`.`images2` WHERE `images2`.`image_path` = 'happinessIS3.png'");

//$varEcho = mysqli_fetch_assoc($result);
//echo json_encode($varEcho);

mysqli_close($conn);
?>