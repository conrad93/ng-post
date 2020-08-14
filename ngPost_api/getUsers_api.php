<?php
	require_once('config.php');
	$select="SELECT * FROM userRegister";
	$query=mysqli_query($conn, $select);
	$res=[];
	if(mysqli_num_rows($query)>0){
		while($result=mysqli_fetch_assoc($query)){
			$res[]=$result;
		}
	}
	echo json_encode($res);
?>