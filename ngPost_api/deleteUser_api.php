<?php
	require_once('config.php');
	$userId = $_GET['userId'];
	$deleteUser = "DELETE from userRegister where userId = $userId";
	$deleteComments = "DELETE from userComment where userId = $userId";
	$query=mysqli_query($conn, $deleteUser);
	$query=mysqli_query($conn, $deleteComments);
	$res = ['delete' => true];
	echo json_encode($res);
?>