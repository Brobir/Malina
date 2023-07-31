$(document).ready(function(){
  let hideMenu = {
    selectors: {
      'closeMenu_icon': '#menu_popup-closeJs',
      'closeMenu_back': '#menu_popup-backJs',
      'menu': '#menu_popup-layoutsJs',
      'menu_icon': '#menuJs',

    },
    init: function(){
      let _this = this;

      $(_this.selectors.menu_icon).on("click", function(){
        if ($(_this.selectors.menu).data("toggle") == "hide") {
          _this.show($(_this.selectors.menu));
        }
      });

      $(_this.selectors.closeMenu_icon).on("click", function(){
        if ($(_this.selectors.menu).data("toggle") == "show") {
          _this.hide($(_this.selectors.menu));
        }
      });
      $(_this.selectors.closeMenu_back).on("click", function(){
        if ($(_this.selectors.menu).data("toggle") == "show") {
          _this.hide($(_this.selectors.menu));
        }
      });
    },
    show: function(elem){
      let _this = this;

      $(_this.selectors.menu_icon).addClass("popupHide");
      $(_this.selectors.menu_icon).removeClass("popupShow");

      elem.addClass("popupShow");
      elem.removeClass("popupHide");
      
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          $("body").addClass("noScroll");
      }


      elem.data("toggle", "show");
    },
    hide: function(elem){
      let _this = this;

      $(_this.selectors.menu_icon).addClass("popupShow");
      $(_this.selectors.menu_icon).removeClass("popupHide");

      elem.addClass("popupHide");
      elem.removeClass("popupShow");
      $("body").removeClass("noScroll");

      elem.data("toggle", "hide");
    },
  };

  hideMenu.init();
});
