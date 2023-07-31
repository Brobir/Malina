$(document).ready(function(){
  let auth = {
    selectors: {
      'loginTitle': '.log-inTitle',
      'signinTitle': '.sign-inTitle',
      'login': '.log-in',
      'signin': '.sign-in',
      'showPass': '.showPassword',
      'hidePass': '.hidePassword',
      'passInput': '.form-pas input, .form-pasx2 input',
    },
    init: function(){
      let _this = this;

      $(_this.selectors.loginTitle).on("click", function(){
        _this.showLogin();
      });
      $(_this.selectors.signinTitle).on("click", function(){
        _this.showSignin();
      });

      $(_this.selectors.showPass).on("click", function(){
        _this.tooglePass();
      });
      $(_this.selectors.hidePass).on("click", function(){
        _this.tooglePass();
      });
    },
    showLogin: function(){
      let _this = this;

      $(_this.selectors.login).css({"display" : "flex"});
      $(_this.selectors.signin).css({"display" : "none"});
      $(_this.selectors.loginTitle).addClass("active");
      $(_this.selectors.signinTitle).removeClass("active");
    },
    showSignin: function(){
      let _this = this;

      $(_this.selectors.login).css({"display" : "none"});
      $(_this.selectors.signin).css({"display" : "grid"});
      $(_this.selectors.signinTitle).addClass("active");
      $(_this.selectors.loginTitle).removeClass("active");
    },
    tooglePass: function(){
      let _this = this;

      if ($(_this.selectors.showPass).is(":hidden")) {
        $(_this.selectors.showPass).css({"display" : "block"});
        $(_this.selectors.hidePass).css({"display" : "none"});
        $(_this.selectors.passInput).attr("type", "text");
      }
      else if ($(_this.selectors.hidePass).is(":hidden")) {
        $(_this.selectors.showPass).css({"display" : "none"});
        $(_this.selectors.hidePass).css({"display" : "block"});
        $(_this.selectors.passInput).attr("type", "password");
      }
    }
  }

  auth.init();
});
