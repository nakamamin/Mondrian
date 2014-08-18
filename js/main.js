
var main = function () {
   var haha = $('.bauhaus').css('background-color');
  
  $('.block').click(function() {
    $(this).removeClass('block');
  
  $('.r2box1').click(function() {
    $('.text').addClass('textmove').fadeIn();
    $('.r2box2').addClass('flag');
  });
    
  });
  
 
  
}

$(document).ready(main);