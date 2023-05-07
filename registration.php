<?php

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

// Get user input
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

// Generate a unique confirmation code
$confirmation_code = uniqid();

// Check for duplicate email and username
$sql = "SELECT * FROM users WHERE username = '$username' OR email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // If there is a duplicate, display an error message
  echo "Error: Username or email already exists.";
} else {
  // If there is no duplicate, insert the user into the database
  $sql = "INSERT INTO users (username, email, password, confirmation_code) VALUES ('$username', '$email', '$password', '$confirmation_code')";
  if ($conn->query($sql) === TRUE) {
    // Send the confirmation email
    $to = $email;
    $subject = 'Confirm your registration';
    $message = 'Please click on the following link to confirm your registration: http://yourwebsite.com/confirm.php?code=' . $confirmation_code;
    $headers = 'From: noreply@pantrypal.com' . "\r\n" .
               'Reply-To: noreply@pantrypal.com' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);

    echo "Registration successful! Please check your email to confirm your registration.";
    // Set session variables
    $_SESSION['username'] = $username;
    $_SESSION['email'] = $email;
    // Redirect to homepage
    header("Location: login.html");
    exit;
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

// Close connection
$conn->close();
?>
