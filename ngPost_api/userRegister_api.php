<?php
	$_POST=json_decode(file_get_contents("php://input"),true);
	require_once('config.php');
	$userName=$_POST['userName'];
	$userEmail=$_POST['userEmail'];
	$userPassword=$_POST['userPassword'];
	$insert="INSERT INTO userRegister (userName, userEmail, userPassword) values ('$userName', '$userEmail', '$userPassword')";
	$select = "SELECT * FROM userRegister where userName = '$userName'";
    $query = mysqli_query($conn, $select);
    $res = mysqli_fetch_assoc($query);
    if (mysqli_num_rows($query) > 0) {
    	echo "";
    }
    else {
    	$i=mysqli_query($conn,$insert);
	    echo $i;
    }
?>