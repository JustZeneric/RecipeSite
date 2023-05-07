<?php
session_start();

if (!isset($_SESSION['username'])) {
  header("Location: login.php");
  exit();
}

if (isset($_POST['save'])) {
  // Get form data
  $username = $_POST['username'];
  $recipe_name = $_POST['recipe_name'];
  $recipe_url = $_POST['recipe_url'];
  
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

  // Prepare SQL statement
  $sql = "INSERT INTO saved_recipes (username, recipe_name, recipe_url) VALUES (?, ?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("sss", $username, $recipe_name, $recipe_url);

  // Execute statement
  $stmt->execute();

  // Close statement and connection
  $stmt->close();
  $conn->close();
}
?>
