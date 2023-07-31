$(document).ready(function(){
  let refreshPassword = {
    selectors: {
      'showPass': '.showPassword',
      'hidePass': '.hidePassword',
      'passInput': '.form-passOld input, .form-passNew1 input, .form-passNew2 input',

      'refreshPasswordActPopup': '#refreshPasswordJs',
      'refreshPasswordPopup': '#refreshPassword-layoutsJs',
      'refreshPassword_back_close': '.refreshPassword-back',
      'refreshPassword_icon_close': '#refreshPassword_popup-closeJs',
    },
    init: function(){
      let _this = this;

      $(_this.selectors.showPass).on("click", function(){
        _this.tooglePass();
      });
      $(_this.selectors.hidePass).on("click", function(){
        _this.tooglePass();
      });

      $(_this.selectors.refreshPassword_back_close).on("click", function(){
        _this.hidePopup($(_this.selectors.refreshPasswordPopup));
      });
      $(_this.selectors.refreshPassword_icon_close).on("click", function(){
        _this.hidePopup($(_this.selectors.refreshPasswordPopup));
      });
      $(_this.selectors.refreshPasswordActPopup).on("click", function(){
        _this.showPopup($(_this.selectors.refreshPasswordPopup));
      });
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
    },

    showPopup: function(elem){
      let _this = this;

      elem.addClass("popupShow");
      elem.removeClass("popupHide");
      $("body").addClass("noScroll");

      elem.data("toggle", "show");
    },
    hidePopup: function(elem){
      let _this = this;

      elem.addClass("popupHide");
      elem.removeClass("popupShow");
      $("body").removeClass("noScroll");

      elem.data("toggle", "hide");
    },
  }

  refreshPassword.init();
});
