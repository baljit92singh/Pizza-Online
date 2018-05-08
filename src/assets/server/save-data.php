<?php
if($_SERVER['REQUEST_METHOD'] == 'POST')
{
	$json_string = file_get_contents("php://input");
	$file_handle = fopen('order.json', 'w');
	fwrite($file_handle, $json_string);
	fclose($file_handle);
	$data = new stdClass();
	$data->status = "success";
	header('Content-Type: application/json');
	echo json_encode($data);
} else {
	echo "file sucess";
}
?>