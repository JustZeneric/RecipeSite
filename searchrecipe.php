<?php
  session_start();

  if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form method="post" action="save_recipe.php" id="search-form">
  <label for="ingredients-input">Enter ingredients:</label>
  <input type="text" id="ingredients-input" name="ingredients">
  <input type="hidden" name="username" id="username-input" value="<?php echo $_SESSION['username']; ?>">
  <button type="submit" name="submit">Search</button>
  
</form>


<div id="recipes-list"></div>
<script src="search.js"></script>
</body>
</html>
