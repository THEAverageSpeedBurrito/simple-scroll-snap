'use strict';

var sections = ['#one', '#two', '#three'];
var currentPos = 0;

$(function() {
  $('.window').css({
    'height': window.innerHeight,
  });

  $(window).resize(() => {
    $('.window').css({
      'height': window.innerHeight,
    });
  });

  scrollListen();


  // $('#one').click(() => {
  //   $('html, body').animate({scrollTop: $("#two").offset().top}, 750);
  // });
  // $('#two').click(() => {
    // $('html, body').animate({scrollTop: $("#one").offset().top}, 750);
  // });
});


function scrollListen () {
  $(window).on('scroll', function(){
    $(window).off('scroll');

    let origin = $(window).scrollTop();
    let delta = 0;

    $(window).on('scroll', () => {
      delta = origin - $(window).scrollTop();
      console.log(origin, $(window).scrollTop());

      if(Math.abs(delta) > 100){
        $(window).off('scroll');


        if(delta < 0 && sections[currentPos + 1]){
          currentPos++;
          $('html, body').animate({scrollTop: $(sections[currentPos]).offset().top}, 750, () => {
            scrollListen();
          });
        }else if(delta > 0 && sections[currentPos - 1]){
          currentPos--;
          $('html, body').animate({scrollTop: $(sections[currentPos]).offset().top}, 750, () => {
            scrollListen();
          });
        }
      }
    });
  });
}
