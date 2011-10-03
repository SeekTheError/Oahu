<?php 
session_start();
require_once("lib/OahuClient.php");


$environment = "neue";
$config = parse_ini_file('config/' . $environment . '.ini');
$oahu = new OahuClient($config['host'], $config['client_id'], $config['consumer_id'], $config['consumer_secret'], $config['no_cache']);


function currentUserId() {
  if ($_SESSION['user_id']) {
    return $_SESSION['user_id'];
  } else {
    return 0;
  }
}

?>