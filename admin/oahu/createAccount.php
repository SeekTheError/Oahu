<?php 
require("../../config.inc.php");
global $oahu;
if ($oahu->validateUserAccount($_POST['oahuAccount'])) {
  header('Content-type: application/json', true, 201);
  $_SESSION["user_id"] = 1;
  echo json_encode($_POST);
} else {
  header('Content-type: application/json', true, 400);
  echo json_encode(array("error" => "oahuAccount is not valid", "ok" => false));
}

?>
