<?php
    // header("Access-Control-Allow-Headers: *");
    // $_POST=json_decode(file_get_contents("php://input"),true);
	require_once('config.php');
	$adminId = $_POST['adminId'];
	$adminName = $_POST['adminName'];
	$adminEmail = $_POST['adminEmail'];
	$adminPassword = $_POST['adminPassword'];
	$update = "UPDATE adminRegister SET adminName = '$adminName', adminEmail = '$adminEmail', adminPassword = '$adminPassword' where adminId = $adminId";
	mysqli_query($conn, $update);
	$select="SELECT * FROM adminRegister where adminId = '$adminId'";
	$query=mysqli_query($conn, $select);
	$res=mysqli_fetch_assoc($query);
	echo json_encode($res);
?>