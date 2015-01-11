<?php header('Access-Control-Allow-Origin: *'); 

 require_once('connectionSettings.php');

$sth = mysqli_query($conn, "SELECT * from user");
$rows = array();

while($r = mysqli_fetch_assoc($sth)) {
        $rows[] = $r;
}

print json_encode($rows);

mysqli_close($conn);
