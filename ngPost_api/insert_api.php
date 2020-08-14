<?php
    // header("Access-Control-Allow-Headers: *");
    // $_POST=json_decode(file_get_contents("php://input"),true);
	require_once('config.php');
	$title = $_POST['title'];
	$description = $_POST['description'];
	$image = $_POST['image'];
	$adminId = $_POST['adminId'];
	$date = date("h:i A")." on ".date("jS F Y, l");
	$insert = "INSERT INTO adminPost (adminId, title, description, image, date) values ('$adminId', '$title', '$description', '$image', '$date')";
	mysqli_query($conn, $insert);
	$res = ['success' => true];
	echo json_encode($res);
?>