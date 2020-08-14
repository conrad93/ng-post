<?php
	require_once('config.php');
	$fileName = $_FILES['fd']['name'];
	$date = Date('ymdhis');
	$fileArray = explode('.', $fileName);
	$ext = $fileArray[count($fileArray) - 1];
	$image = $date.'.'.$ext;
	$destination = "uploads/".$image;
	$tmpName = $_FILES['fd']['tmp_name'];
	move_uploaded_file($tmpName, $destination);
	$res = ['success' => true, 'image' => $image];
	echo json_encode($res);
?>