/* global $ */
'use strict';
console.warn('develop');
$(document).ready(function() {
    $('#kv').animate({
      opacity: 1,
      'margin-top': '+=100'
    }, 1000);

  $('nav').animate({
      'margin-top': '+=10'
    }, 1500);

  $('#about').click(function(){
    $('#kv').fadeOut('slow');
  });

  $('.design.mainSection .wrapper:first').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false
  });

  $('.btn_left').on('click', function(){
    $('.design.mainSection .wrapper:first').slick('slickPrev');
  });

  $('.btn_right').on('click', function(){
    $('.design.mainSection .wrapper:first').slick('slickNext');
  });

});
