<?php
// Start session
session_start();

// Database connection variables
$host = "127.0.0.1";
$user = "root";
$password = "";
$database = "registration";

// Create connection
$conn = new mysqli($host, $user, $password, $database);

// Check connection 
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if (isset($_POST['username']) && isset($_POST['password'])) {

  // Get user input
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Prepare SQL query
  $sql = "SELECT * FROM users WHERE username = ? AND password = ?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("ss", $username, $password);

  // Execute query
  $stmt->execute();
  $result = $stmt->get_result();

  // Check if there is a match
  if ($result->num_rows > 0) {

    // Set session variables
    $_SESSION['username'] = $username;

    // Redirect to homepage
    header("Location: index.php");
    exit();

  } else {
    // Display error message
    echo "Invalid username or password.";
  }
}

// Close connection
$conn->close();
?>
