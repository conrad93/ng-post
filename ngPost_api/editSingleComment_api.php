<?php
	require_once('config.php');
	$commentId = $_POST['commentId'];
	$editUserComment = $_POST['editUserComment'];
	$date = date("h:i A")." on ".date("jS F Y, l");
	$update = "UPDATE userComment SET comment = '$editUserComment', date = '$date' where commentId = $commentId";
	mysqli_query($conn, $update);
	$select="SELECT * FROM userComment where commentId = '$commentId'";
	$query=mysqli_query($conn, $select);
	$res=mysqli_fetch_assoc($query);
	echo json_encode($res);
?>