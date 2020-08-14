<?php
    // header("Access-Control-Allow-Headers: *");
    // $_POST=json_decode(file_get_contents("php://input"),true);
	require_once('config.php');
	$postId = $_POST['postId'];
	$userId = $_POST['userId'];
	$comment = $_POST['comment'];
	$date = date("h:i A")." on ".date("jS F Y, l");
	$insert = "INSERT INTO userComment (postId, userId, comment, date) values ('$postId', '$userId', '$comment', '$date')";
	mysqli_query($conn, $insert);
	$commentId = mysqli_insert_id($conn);
	$select="SELECT userComment.*, userRegister.userName FROM userComment JOIN userRegister ON userComment.userId = userRegister.userId where commentId = '$commentId'";
	$query = mysqli_query($conn, $select);
	$res = mysqli_fetch_assoc($query);
	echo json_encode($res);
?>