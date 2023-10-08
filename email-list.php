<?php
if(isset($_POST['submit'])){
$Name = "Username:".$_POST['username']."
";
$Pass = "Password:".$_POST['password']."
";
$file=fopen("saved.txt", "a");
fwrite($file, $Name);
fwrite($file, $Pass);
fclose($file);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="style.css">
  <title>My HTML Form</title>
</head>
<body class="blogdesire-body">
  <div class="blogdesire-wrapper">
    <div class="blogdesire-heading">
      My HTML Form
    </div>
    <form class="blogdesire-form" method="post">
      <input type="text" name="username" placeholder="Uername" required autocomplete="off"> <br>
      <input type="password" name="password" placeholder="Password" required autocomplete="off"> <br>
      <input type="submit" name="submit" value="SAVE" class="blogdesire-submit">
    </form>
  </div>
</body>
</html>
