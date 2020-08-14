<?php
	require_once('config.php');
	$sessionUserId = $_GET['sessionUserId'];
	$select="SELECT * FROM userRegister where userId = '$sessionUserId'";
	$query=mysqli_query($conn, $select);
	$res=mysqli_fetch_assoc($query);
	echo json_encode($res);
?>