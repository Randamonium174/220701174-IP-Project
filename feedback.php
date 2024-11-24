<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get user input and sanitize it
    $email = htmlspecialchars($_POST['email']);
    $rating = htmlspecialchars($_POST['rating']);
    $type = htmlspecialchars($_POST['type']);
    $satisfaction = htmlspecialchars($_POST['satisfaction']);
    $recommend = htmlspecialchars($_POST['recommend']);

    // Database connection
    $servername = "localhost";
    $db_username = "root"; // default XAMPP username
    $db_password = ""; // default XAMPP password
    $dbname = "StratifyX"; // Your database name

    // Create connection
    $conn = new mysqli($servername, $db_username, $db_password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare the SQL query
    $stmt = $conn->prepare("INSERT INTO feed (email, rate, type, satis, reco) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sisss", $email, $rating, $type, $satisfaction, $recommend);

    // Execute the query
    if ($stmt->execute()) {
        echo "Feedback submitted successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the connection
    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request method.";
}
?>
