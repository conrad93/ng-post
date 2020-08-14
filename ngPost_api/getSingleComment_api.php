<?php
	require_once('config.php');
	$commentId = $_GET['commentId'];
	$select="SELECT * FROM userComment where commentId = $commentId";
	$query=mysqli_query($conn, $select);
	$res=mysqli_fetch_assoc($query);
	echo json_encode($res);
?>