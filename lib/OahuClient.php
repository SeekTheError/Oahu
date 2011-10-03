<?php
 
if (!function_exists('http_parse_headers')) {
  function http_parse_headers($header) {
    $retVal = array();
    $fields = explode("\r\n", preg_replace('/\x0D\x0A[\x09\x20]+/', ' ', $header));
    foreach( $fields as $field ) {
      if( preg_match('/([^:]+): (.+)/m', $field, $match) ) {
        $match[1] = preg_replace('/(?<=^|[\x09\x20\x2D])./e', 'strtoupper("\0")', strtolower(trim($match[1])));
        if( isset($retVal[$match[1]]) ) {
          $retVal[$match[1]] = array($retVal[$match[1]], $match[2]);
        } else {
          $retVal[$match[1]] = trim($match[2]);
        }
      }
    }
    return $retVal;
  }
}

class OahuClient {
    
    public $oahuHost;
    public $clientId;
    public $consumerSecret;
    public $consumerId;
    public $noCache;
    
    static $modelTypes   = array(
      'Project'   => array('Movie'),
      'Resource'  => array('Image', 'Video', 'ImageList', 'VideoList')
    );
    
    static $modelFields  = array(
      'Project'               => array('title', 'release_date', 'synopsis', 'genres'),
      'Resource'              => array('source', 'name', 'description'),
      'Resources::ImageList'  => array('name', 'description', 'image_ids'),
      'Resources::VideoList'  => array('name', 'description', 'video_ids')
    );
    
    static $projectFilters = array("soon", "live", "featured", "recommended");
    
    function OahuClient($oahuHost="api.oahu.fr", $clientId, $consumerId, $consumerSecret, $noCache=false) {
        $this->oahuHost       = $oahuHost;
        $this->clientId       = $clientId;
        $this->consumerSecret = $consumerSecret;
        $this->consumerId     = $consumerId;
        $this->noCache        = $noCache;
    }
    

    // User account APIs
    
    public function validateUserAccount($account_object=null){

      if($account_object==null){
        return false;
      }
      
      $at = $account_object['code'];
      $sd = $account_object['sig_date'];
      $ai = $account_object['_id'];
      $sc = $this->consumerSecret;
      
      $str = implode('-', array($at, $sd, $ai, $sc));
      
      if(md5($str)==$account_object['sig']){
        return true;
      } else {
        return false;
      }
    }
     
    // Movies API
    
    public function listMovies($filter=null, $params=array()) {
      if (!in_array($filter, self::$projectFilters)) {
        $filter = null;
      }
      return $this->_get("projects/" . $filter, $params);
    }
    
    public function getProject($projectId) {
      return $this->_get("projects/" . $projectId);
    }
    
    public function getMovie($projectId) {
      return $this->getProject($projectId);
    }
    
    public function createProject($projectType, $projectData) {
      if (!in_array($projectType, self::$modelTypes["Project"])) {
        throw new Exception("ProjectType " . $projectType . " does not exist");
      }
      return $this->_post("projects", array(
        "_type"   => $projectType,
        "project" => self::_makeModel("Project", $projectData)
        )
      );
    }
    
    public function createMovie($projectData) {
      return $this->createProject("Movie", $projectData);
    }
    
    public function updateMovie($projectId, $projectData) {
      return $this->_put("projects/" . $projectId, array(
        "project" => self::_makeModel("Project", $projectData)
      ));
    }
    
    public function getMovieVideos($projectId) {
      return $this->_get("projects/" . $projectId . "/videos");
    }
    
    public function getMoviePhotos($projectId) {
      return $this->_get("projects/" . $projectId . "/photos");
    }

    public function getMovieBuzz($projectId) {
      return $this->_get("projects/" . $projectId . "/buzz");
    }
    
    public function getMovieResources($projectId, $params=array()) {
      return $this->_get("projects/" . $projectId . "/resources", $params);
    }
    
    public function getMoviePublications($projectId, $params=array()) {
      return $this->_get("projects/" . $projectId . "/publications", $params);
    }
    
    //  Resources API
    
    public function getMovieResource($projectId, $resourceId) {
      return $this->_get("projects/" . $projectId . "/resources/" . $resourceId);
    }
    
    public function createMovieResource($projectId, $resourceType, $resourceData) {
      if (!in_array($resourceType, self::$modelTypes["Resource"])) {
        throw new Exception("ResourceType " . $resourceType . " does not exist");
      }
      return $this->_post("projects/". $projectId . '/resources', array(
        "_type"   => $resourceType,
        "resource" => self::_makeModel(self::_resourceModel($resourceType), $resourceData)
        )
      );
    }
    
    public function updateMovieResource($projectId, $resourceId, $resourceData) {
      $res = $this->getMovieResource($projectId, $resourceId);
      if (!$res) {
        throw new Exception("Resource " . $resourceId . " not found");
      }
      if ($res->can_edit) {
        $updateData = self::_makeModel(self::_resourceModel($res->_type), $resourceData, array("name", "description", "image_ids", "video_ids"));
        if (count($updateData) > 0) {
          return $this->_put("projects/" . $projectId . "/resources/" . $resourceId, array(
            "resource" => $updateData
          ));
        } else {
          return false;
        }
      } else {
        throw new Exception("The Resource " . $resourceId . " is not editable");
      }
    }
    
    public function createMovieImageList($projetId, $resourceData) {
      if (!$resourceData['image_ids']) {
        throw new Exception("You have to provide image_ids to create a ImageList Resource");
      }
      return $this->createMovieResource($projetId, "ImageList", $resourceData);
    }
    
    public function createMovieVideoList($projetId, $resourceData) {
      if (!$resourceData['video_ids']) {
        throw new Exception("You have to provide video_ids to create a VideoList Resource");
      }
      return $this->createMovieResource($projetId, "VideoList", $resourceData);
    }
    
    // Publications API
    
    public function listPubAccounts($projectId) {
      return $this->_get('projects/' . $projectId . '/pub_accounts');
    }
    
    public function publishResource($resourceId, $pubOptions) {
      
    }
    
    
    // Helpers
    
    private static function _resourceModel($resourceType) {
      if (in_array($resourceType, array_keys(self::$modelFields))) {
        return $resourceType;
      }
      else if (in_array("Resources::" . $resourceType, array_keys(self::$modelFields))) {
        return "Resources::" . $resourceType;
      } else {
        return "Resource";
      }
    }
    
    private static function _makeModel($modelType, $data=array(), $only=null) {
      $keys = array_intersect(self::$modelFields[$modelType], array_keys($data));
      if ($only) {
        $keys = array_intersect($keys, $only);
      }
      $model = array();
      foreach ($keys as $k) {
        if (array_key_exists($k, $data)) {
          if (is_string($data[$k])) {
            $model[$k] = stripslashes($data[$k]);
          } else {
            $model[$k] = $data[$k];
          }
        }
      }
      return $model;
    }
    
    // HTTP Plumming...
    
    private function _get($path, $params=array(), $headers=array()) {
      $res = $this->_exec("GET", $path, $params, $headers);
      return $res['body'];
    }
    
    private function _post($path, $data, $headers=array()) {
      $res = $this->_exec("POST", $path, $data, $headers);
      return $res['body'];
    }
    
    private function _put($path, $data, $headers=array()) {
      $res =  $this->_exec("PUT", $path, $data, $headers);
      return $res['body'];
    }
    
    private function _exec($type, $path, $params = array(), $headers = array()) {
        $params["consumer_id"] = $this->consumerId;
        $params["consumer_secret"] = $this->consumerSecret;
        $params["format"] = "json";
        
        $s = curl_init();
        $headers[] = "Content-Type: application/json";
        
        if ($this->noCache) {
          $headers[] = "Cache-Control: no-cache";
        }
        
        $url = "http://" . $this->oahuHost . "/v1/clients/" . $this->clientId . "/" . $path;
        switch ($type) {
            case "GET":
              curl_setopt($s, CURLOPT_URL, $url . "?" . http_build_query($params));
              break;
            case "PUT": 
              curl_setopt($s, CURLOPT_URL, $url);
              curl_setopt($s, CURLOPT_CUSTOMREQUEST, "PUT");
              curl_setopt($s, CURLOPT_POSTFIELDS, json_encode($params));
              break;            
            case "POST":
              curl_setopt($s, CURLOPT_URL, $url);
              curl_setopt($s, CURLOPT_POST, true);
              curl_setopt($s, CURLOPT_POSTFIELDS, json_encode($params));
              break;
        }
        
        curl_setopt($s, CURLOPT_HEADER, true);
        curl_setopt($s, CURLINFO_HEADER_OUT, 1);
        curl_setopt($s, CURLOPT_TIMEOUT, 3);
        curl_setopt($s, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($s, CURLOPT_HTTPHEADER, $headers);
        
        $out = curl_exec($s);
        $status = curl_getinfo($s, CURLINFO_HTTP_CODE);
        $response = curl_getinfo($s);
        curl_close($s);
        $response_headers = http_parse_headers(substr($out, 0, $response['header_size']));
        $response_body = substr($out, $response['header_size']);
        $body = json_decode($response_body);
        if (!$body) {
          $body = array();
        }
        $res = array("status" => $status, "body" => $body);
        
        if ($status >= 400) {
          throw new Exception(json_encode($res));
        } else {
          return $res;
        }
    }
    
}