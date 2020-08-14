<?php
    // header("Access-Control-Allow-Headers: *");
    // $_POST=json_decode(file_get_contents("php://input"),true);
	require_once('config.php');
	$userId = $_POST['userId'];
	$userName = $_POST['userName'];
	$userEmail = $_POST['userEmail'];
	$userPassword = $_POST['userPassword'];
	$update = "UPDATE userRegister SET userName = '$userName', userEmail = '$userEmail', userPassword = '$userPassword' where userId = $userId";
	mysqli_query($conn, $update);
	$select="SELECT * FROM userRegister where userId = '$userId'";
	$query=mysqli_query($conn, $select);
	$res=mysqli_fetch_assoc($query);
	echo json_encode($res);
?>