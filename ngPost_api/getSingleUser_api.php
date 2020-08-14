<?php
	require_once('config.php');
	$userId = $_GET['userId'];
	$select="SELECT * FROM userRegister where userId = '$userId'";
	$query=mysqli_query($conn, $select);
	$res=mysqli_fetch_assoc($query);
	echo json_encode($res);
?>