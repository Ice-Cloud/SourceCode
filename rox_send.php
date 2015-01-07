<?php header('Access-Control-Allow-Origin: *'); 

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cloud";

$conn = mysqli_connect($servername, $username, $password, $dbname);
 
// ajaxul de pe pagina web trimite un request POST catre php care poate fi preluat aici cu $_POST["numele_datei"]
$id = $_POST["id"];
$name = $_POST["name"];
$email = $_POST["email"];

//acum se formeaza un query catre baza de date cu datele care le-am salvat
$query = $conn->prepare("INSERT INTO user(id, name, email) VALUES (?, ?, ?)");

// e periculos sa fie puse variabilele direct in query asa ca folosim metoda bind_param sa combinam query-ul cu variabilele salvate mai sus
// primul parametru al metodei trebuie sa corespunda cu tipul variabilelor in ordine:

/* semnele "?" din linia de cod de mai sus vor fi inlocuite de parametrii din bin_param in ordinea in care sunt scrise
 * "siss" este tipul variabilelor pasate metodei -> s-string; i-integer; s-string; s-string
*/
$query->bind_param("iss", $id, $name, $email);

// se executa query-ul
$query->execute();

mysqli_close($conn);
