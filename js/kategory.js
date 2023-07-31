$(document).ready(function(){
  let hideKategory = {
    selectors: {
      'kategory_items': '#kategory-itemsJs',
      'kategory': '#kategory-titleJs',

    },
    init: function(){
      let _this = this;

      $(_this.selectors.kategory).on("click", function(){
        switch($(_this.selectors.kategory_items).data("toggle")) {
          case 'hide':
            _this.show($(_this.selectors.kategory_items));
            break
          case 'show':
            _this.hide($(_this.selectors.kategory_items));
            break
        }
      });
    },
    show: function(elem){
      let _this = this;

      elem.addClass("popupShow");
      elem.removeClass("popupHide");

      elem.data("toggle", "show");
    },
    hide: function(elem){
      let _this = this;

      elem.addClass("popupHide");
      elem.removeClass("popupShow");

      elem.data("toggle", "hide");
    },
  };

  hideKategory.init();
});
