<?php
	require_once('config.php');
	$sessionAdminId = $_GET['sessionAdminId'];
	$select="SELECT * FROM adminRegister where adminId = '$sessionAdminId'";
	$query=mysqli_query($conn, $select);
	$res=mysqli_fetch_assoc($query);
	echo json_encode($res);
?>