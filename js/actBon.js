$(document).ready(function(){
  let hideBalance = {
    selectors: {
      'card': '.cardItem',

      'card_popup': '#card_popup-layoutsJs',
      'card_back_close': '.card_popup-back',
      'formMoney_action': '#card_popup_buttonJs',

      'formMoneyPopup': '#formMoney_actionBonusJs',
      'formMoney_back_close': '.formMoney-back',
      'formMoney_icon_close': '#formMoney-closeJs',
      'formPasport_action': '#formMoneyPopup-buttonJs',

      'formPasportPopup': '#formPasport_actionBonusJs',
      'formPasport_back_close': '.formPasport-back',
      'formPasport_icon_close': '#formPasport-closeJs',
      'success_action': '#formPasportPopup-buttonJs',

      'successPopup': '#successPopup-layoutsJs',
      'success_back_close': '.successPopup-back',
      'success_icon_close': '#successPopup-closeJs',
    },
    init: function(){
      let _this = this;

      $(_this.selectors.card).on("click", function(){
        _this.addElem($(_this.selectors.card_popup), $(this));
        _this.show($(_this.selectors.card_popup));
      });

      $(_this.selectors.card_back_close).on("click", function(){
          _this.hide($(_this.selectors.card_popup));
          _this.removeElem($(_this.selectors.card_popup));
      });
      $(_this.selectors.formMoney_action).on("click", function(){
        _this.hide($(_this.selectors.card_popup));
        _this.removeElem($(_this.selectors.card_popup));
        _this.show($(_this.selectors.formMoneyPopup));
      });

      $(_this.selectors.formMoney_back_close).on("click", function(){
        _this.hide($(_this.selectors.formMoneyPopup));
      });
      $(_this.selectors.formMoney_icon_close).on("click", function(){
        _this.hide($(_this.selectors.formMoneyPopup));
      });
      $(_this.selectors.formPasport_action).on("click", function(){
        _this.hide($(_this.selectors.formMoneyPopup));
        _this.show($(_this.selectors.formPasportPopup));
      });

      $(_this.selectors.formPasport_back_close).on("click", function(){
        _this.hide($(_this.selectors.formPasportPopup));
      });
      $(_this.selectors.formPasport_icon_close).on("click", function(){
        _this.hide($(_this.selectors.formPasportPopup));
      });
      $(_this.selectors.success_action).on("click", function(){
        _this.hide($(_this.selectors.formPasportPopup));
        _this.show($(_this.selectors.successPopup));
      });

      $(_this.selectors.success_back_close).on("click", function(){
        _this.hide($(_this.selectors.successPopup));
      });
      $(_this.selectors.success_icon_close).on("click", function(){
        _this.hide($(_this.selectors.successPopup));
      });
    },
    addElem: function(elem, clickElem){
      let img = clickElem.find("img").attr("src");
      let title = clickElem.find(".cardItemTitle").text();
      let money = clickElem.find(".cardItemMoney").text();

      elem.find("img").attr("src", img);
      elem.find(".card_popup-title").text(title);
      elem.find(".card_popup-money").text(money);
    },
    removeElem: function(elem){
      elem.find("img").attr("src", "");
      elem.find(".card_popup-title").text("");
      elem.find(".card_popup-money").text("");
    },
    show: function(elem){
      let _this = this;

      elem.addClass("popupShow");
      elem.removeClass("popupHide");
      $("body").addClass("noScroll");

      elem.data("toggle", "show");
    },
    hide: function(elem){
      let _this = this;

      elem.addClass("popupHide");
      elem.removeClass("popupShow");
      $("body").removeClass("noScroll");

      elem.data("toggle", "hide");
    },
  };

  $("#historySlider-itemsJs").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    dots: false
  });

  hideBalance.init();
});
