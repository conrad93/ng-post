<?php
	require_once('config.php');
	$commentId = $_GET['commentId'];
	$delete = "DELETE from userComment where commentId = $commentId";
	$query=mysqli_query($conn, $delete);
	$res = ['delete' => true];
	echo json_encode($res);
?>