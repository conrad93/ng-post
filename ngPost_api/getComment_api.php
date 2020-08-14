<?php
	require_once('config.php');
	$postId = $_GET['postId'];
	$select="SELECT userComment.*, userRegister.userName FROM userComment JOIN userRegister ON userComment.userId = userRegister.userId where postId = '$postId' ORDER BY usercomment.commentId DESC";
	$query=mysqli_query($conn, $select);
	$res=[];
	if(mysqli_num_rows($query)>0){
		while($result=mysqli_fetch_assoc($query)){
			$res[]=$result;
		}
	}
	echo json_encode($res);
?>