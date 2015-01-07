<?php header('Access-Control-Allow-Origin: *'); 

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cloud";

$conn = mysqli_connect($servername, $username, $password, $dbname);
 

$sth = mysqli_query($conn, "SELECT * from user");
$rows = array();

while($r = mysqli_fetch_assoc($sth)) {
        $rows[] = $r;
}

print json_encode($rows);

mysqli_close($conn);
