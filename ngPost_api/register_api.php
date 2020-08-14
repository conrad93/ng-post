<?php
	$_POST=json_decode(file_get_contents("php://input"),true);
	require_once('config.php');
	$adminName=$_POST['adminName'];
	$adminEmail=$_POST['adminEmail'];
	$adminPassword=$_POST['adminPassword'];
	$insert="INSERT INTO adminRegister (adminName, adminEmail, adminPassword) values ('$adminName', '$adminEmail', '$adminPassword')";
	$select = "SELECT * FROM adminRegister where adminName = '$adminName'";
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