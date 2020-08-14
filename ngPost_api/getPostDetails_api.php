<?php
	require_once('config.php');
	$postId = $_GET['postId'];
	$select="SELECT adminPost.*, adminRegister.adminName, COUNT(userComment.commentId) AS commentCount FROM adminPost JOIN adminRegister ON adminPost.adminId = adminRegister.adminId LEFT JOIN userComment ON adminPost.postId = userComment.postId where adminPost.postId = '$postId'";
	$query=mysqli_query($conn, $select);
	$res = mysqli_fetch_assoc($query);
	echo json_encode($res);
?>