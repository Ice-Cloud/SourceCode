<?php header('Access-Control-Allow-Origin: *'); 

require_once('connectionSettings.php');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$conn = mysql_connect($servername, $username, $password, $dbname);
 
$q = $_get["q"];

$result = mysql_query('DELETE FROM `cloud`.`images2` WHERE `images2`.`image_path` = '$q'',$conn);
 /*
 if(isset($_GET['q'])) {
	$result = mysql_query('DELETE FROM `cloud`.`images2` WHERE `images2`.`image_path` = '.(int)$_GET['q'],$conn);
}
*/
//$query = mysqli_query($conn, "DELETE FROM `cloud`.`images2` WHERE `images2`.`image_path` = 'happinessIS3.png'");

$varEcho = mysqli_fetch_assoc($query);
echo json_encode($varEcho);

mysqli_close($conn);
?>