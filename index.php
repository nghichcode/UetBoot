<?php
$u=@$_POST['user'];
$p=@$_POST['password'];
if (empty($u) || empty($p)) {
?>
<html>
<head>
	<title>NC INDEX</title>
	<meta charset="UTF-8"/>
    <link rel="stylesheet" href="./bootstrap/css/bootstrap.min.css">
    <script language="javascript" src="./bootstrap/js/jquery-3.3.1.min.js"></script>
    <script src="./bootstrap/js/bootstrap.min.js"></script>

</head>
<body>

<form method="POST" action="index.php">
	<input type="text" name="user">
	<input type="text" name="password">
	<button type="submit">Login</button>
</form>
</body>
</html>
<?php
	return;
}

$a=array('u'=>$u,'p'=>$p);

echo json_encode($a);
?>