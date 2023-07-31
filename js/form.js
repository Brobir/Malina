$(document).ready(function(){
  let inputs = $('.form-file input');
  inputs.each(function ( index, element ) {
    let label = $(element).siblings("label");
    let labelVal = label.children();
    let labelValText = label.children().text();

    $(element).on('change', function (e) {
      let countFiles = '';
      if (this.files && this.files.length >= 1)
        countFiles = this.files.length;

      if (countFiles)
        labelVal.text(labelValText+"(Файлы: "+countFiles+")");
      else
        labelVal.text(labelValText);
    });
  });

  $(".form-range input").ionRangeSlider();

  let my_range = $(".form-range input").data("ionRangeSlider");
  $(".form-money input").on("input", function(){
    my_range.update({
      from: $(this).val(),
    });
  });
  $(".rangeStep").on("click", function(){
    my_range.update({
      from: $(this).data("step"),
    });
  });
  $(".form-range input").on("input", function(){
    $(".form-money input").val($(this).val());
  });
});
