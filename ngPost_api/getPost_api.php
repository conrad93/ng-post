<?php
	require_once('config.php');
	$select="SELECT adminPost.*, adminRegister.adminName, COUNT(userComment.commentId) AS commentCount FROM adminPost JOIN adminRegister ON adminPost.adminId = adminRegister.adminId LEFT JOIN userComment ON adminPost.postId = userComment.postId GROUP BY adminPost.postId";
	$query=mysqli_query($conn, $select);
	$res=[];
	if(mysqli_num_rows($query)>0){
		while($result=mysqli_fetch_assoc($query)){
			$res[]=$result;
		}
	}
	echo json_encode($res);
?>