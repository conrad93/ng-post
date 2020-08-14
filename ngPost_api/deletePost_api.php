<?php
	require_once('config.php');
	$postId = $_GET['postId'];
	$deletePost = "DELETE from adminPost where postId = $postId";
	$deleteComments = "DELETE from userComment where postId = $postId";
	$query=mysqli_query($conn, $deletePost);
	$query=mysqli_query($conn, $deleteComments);
	$res = ['delete' => true];
	echo json_encode($res);
?>