<?php
    // header("Access-Control-Allow-Headers: *");
    // $_POST=json_decode(file_get_contents("php://input"),true);
	require_once('config.php');
	$title = $_POST['title'];
	$description = $_POST['description'];
	$image = $_POST['image'];
	$adminId = $_POST['adminId'];
	$postId = $_POST['postId'];
	$date = date("h:i A")." on ".date("jS F Y, l");
	$update = "UPDATE adminPost SET title = '$title', description = '$description', image = '$image', adminId = '$adminId', date = '$date' where postId = $postId";
	mysqli_query($conn, $update);
	$select="SELECT adminPost.*, adminRegister.adminName, COUNT(userComment.commentId) AS commentCount FROM adminPost JOIN adminRegister ON adminPost.adminId = adminRegister.adminId LEFT JOIN userComment ON adminPost.postId = userComment.postId where adminPost.postId = '$postId'";
	$query=mysqli_query($conn, $select);
	$res=mysqli_fetch_assoc($query);
	echo json_encode($res);
?>