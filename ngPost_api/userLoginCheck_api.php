<?php
	$_POST=json_decode(file_get_contents("php://input"),true);
	require_once('config.php');
	$userName=$_POST['userName'];
	$userPassword=$_POST['userPassword'];
	$select = "SELECT * FROM userRegister where userName = '$userName' && userPassword = '$userPassword'";
	$query = mysqli_query($conn, $select);
	if (mysqli_num_rows($query)>0) {
		$result = mysqli_fetch_assoc($query);
		$res = ['success'=>true, 'msg'=>$result];
		echo json_encode($res);
	} else {
		$res = ['success'=>false];
		echo json_encode($res);
	}
?>