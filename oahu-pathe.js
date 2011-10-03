var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }

var OahuPathe = function(appId, patheUserId, opts) {
  var self = this;
  this.appId = appId;
  
  if (patheUserId != "" && patheUserId != "0") {
    this.patheUserId  = patheUserId;
  } else {
    this.patheUserId = null;
  }
  
  opts = opts || {};
  if (Drupal && Drupal.settings) {
    defaultBasePath = Drupal.settings.basePath;
  } else {
    defaultBasePath = "";
  }
  
  this.options = jQuery.extend({ basePath: defaultBasePath }, opts);
  
  Oahu.init({
    appId:      this.appId,
    debug:      opts.debug,
    environment:  opts.environment
  }, function() { self.onInit.apply(self) } );

  Oahu.bind('Oahu:connect:login:success', function() { self.onLoginSuccess.apply(self, arguments) });
  Oahu.bind('Oahu:connect:logout:success', function() { OahuPathe.prototype.logout.apply(self); } );
  
  jQuery('#oahu-box').show();

  // DEBUG
  Oahu.bind("connect", function() { console.warn(arguments) });  
};

OahuPathe.prototype.onInit = function () {
  var self = this;
  jQuery('.oahu_login_btn').live('click', function() {
    self.proceedToRegistration = true;
    if (!self.isLogged) {
      Oahu.connect.login();
    } else {
      self.createDrupalAccount();
    }
  });
};

OahuPathe.prototype.logout = function() {
  var logout_url = this.options.basePath + "logout";
  console.warn("Redirect to ", logout_url);
  window.location = logout_url;
};

OahuPathe.prototype.onLoginSuccess = function(msg, data) {
  var self = this;
  self.oahuAccount = data;
  console.warn("LoginSuccess", data, this);
  if (this.oahuAccount) {
	  console.log("PATHE >> Oahu account retrieved in Pathe");
    jQuery('#oahu_user').text(data.name);
    jQuery('.oahu_logged_in').show();
    jQuery('.oahu_logged_out').hide();
    this.isLogged = true;
    if (this.proceedToRegistration) {
      console.warn('PATHE >> Proceeding to registration in Drupal. Getting account details.');
      this.createDrupalAccount();
    } else {
      console.warn('PATHE >> user is logged in Oahu');
    }
  } else {
	  console.log("PATHE >> Oahu account not retrieved in Pathe");
    jQuery('.oahu_logged_in').hide();
    jQuery('.oahu_logged_out').show();
  }
};

OahuPathe.prototype.createDrupalAccount = function() {
  if (this.drupalAccountCreated) {
    console.warn("PATHE >> drupalAccountCreated already true... ?", this);
    return false;
  }
  var self = this;
  console.warn("PATHE >> before getInfos");
  var onFbGetInfos = function(msg, fb_account) {
      self.drupalAccountCreated = true;
      var registrationData = {
        oahuAccount: self.oahuAccount,
        facebookAccount: fb_account
      };
      console.warn("PATHE >> INSIDE getInfos callback with data: ", registrationData);
      jQuery.ajax({
        type: "POST",
        url: self.options.basePath + "admin/oahu/createAccount",
        dataType: "json",
        data: registrationData,
        success: function(response) {
          console.warn("PATHE >> [DRUPAL] Success response: ", arguments);
          alert("Registration OK");
          self.proceedToRegistration = false;
        },
        error: function(response) {
          alert("Registration Error");
          console.warn("PATHE >> [DRUPAL] Error response: ", arguments);
        }
      });      
    }
  Oahu.bind('Facebook:connect:getInfos:success', onFbGetInfos);
  Oahu.connect.getInfos("Facebook");
  
};