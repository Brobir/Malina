$(document).ready(function(){
  let hideBalance = {
    selectors: {
      'balanc': '#balanceMoneyJs',
      'balancSliderMoney': '.sliderItemMoney',
    },
    init: function(){
      let _this = this;
      let elemSliderMoney = $(_this.selectors.balancSliderMoney);

      $(_this.selectors.balanc).on("click", function(){
        switch($(this).data("toggle")) {
          case 'hide':
            _this.show($(this), elemSliderMoney);
            break
          case 'show':
            _this.hide($(this), elemSliderMoney);
            break
        }
      });
    },
    show: function(elem, elemSliderMoney){
      elem.text(elem.data("money"));

      elemSliderMoney.each(function() {
  	    $(this).text($(this).data("money"));
        $(this).siblings(".sliderItemDate").css({"display" : "flex"});
        $(this).siblings(".sliderItemIcon").css({"display" : "none"});
      });

      elem.data("toggle", "show");
    },
    hide: function(elem, elemSliderMoney){
      elem.text("****");

      elemSliderMoney.each(function() {
  	    $(this).text("****");
        $(this).siblings(".sliderItemDate").css({"display" : "none"});
        $(this).siblings(".sliderItemIcon").css({"display" : "block"});
      });

      elem.data("toggle", "hide");
    },
  };

  $("#sliderJs").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    dots: false
  });

  hideBalance.init();
});
