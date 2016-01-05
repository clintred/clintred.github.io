/* global $ */
'use strict';
console.warn('develop');
$(document).ready(function() {

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
