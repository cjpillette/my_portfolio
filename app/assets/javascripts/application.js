// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  console.log(wScroll);

//hero
  $('.hero-description').css({
    'transform': 'translate(0px, -'+ wScroll /20 +'% )'
  });

  $('.engineer-drawing').css({
    'transform': 'translate(0px, -'+ wScroll /40 +'% )'
  });

  $('.developer-drawing').css({
    'transform': 'translate(0px, -'+ wScroll /11 +'% )'
  });


//portfolio
  if(wScroll > $('.project-panel').offset().top - ($(window).height() / 1.2)) {
    $('.project-panel').each(function(i){
      setTimeout(function(){
        $('.project-panel').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });

  }

//Contact
if(wScroll > $('.skyline').offset().top - ($(window).height() / 1.2 - 400)) {

  // $('.flinders').css({
  //   'transform': 'translate(0px, '+ wScroll /60 +'% )'
  // });
  $('.bridge').addClass('is-showing');
  $('.flinders').addClass('is-showing');

}


});
