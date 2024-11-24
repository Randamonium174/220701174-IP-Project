<?php
$host = 'localhost';  // XAMPP default host
$dbname = 'StratifyX'; // Replace with your database name
$user = 'root';        // XAMPP default username
$pass = '';            // XAMPP default password (leave empty)

// Create a new MySQL connection
$conn = new mysqli($host, $user, $pass, $dbname);

// Check for connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
