<?php header('Access-Control-Allow-Origin: *');

require_once("connectionSettings.php");

$username = $_POST['usernameSignIn'];
$passwd = $_POST['passSignIn'];
    
    $query = mysqli_query($conn, "SELECT id, username FROM user WHERE (username='$username' AND pass='$passwd')");

    $details = array();
    if (@mysqli_num_rows($query) == 1) {
        $details = mysqli_fetch_assoc($query);
        $details['message'] = "success";
        echo json_encode($details);

    } else {
        $details['message'] = "failed";
        echo json_encode($details);
    }
    
    mysqli_close($conn);
	
	?>