<?php header('Access-Control-Allow-Origin: *');

require_once("connectionSettings.php");

$id = $conn->real_escape_string($_GET['id']);

$details = array();

$query = mysqli_query($conn, "SELECT id, image_path FROM images2 WHERE user_id='$id'");
    
    if (@mysqli_num_rows($query) > 0) {
    	$details['images'] = array();
    	while ($row = mysqli_fetch_array($query, MYSQLI_ASSOC)) {
    		array_push($details['images'], $row['image_path']);
    	}

    	$details['message'] = "success";
        echo json_encode($details);

    } else {
    	$details['message'] = "No Images";
        echo json_encode($details);
    }
    
mysqli_close($conn);

?>