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

  $('.logo').css({
    'transform': 'translate(0px, '+ wScroll /2 +'% )'
  });

  $('.back-bird').css({
    'transform': 'translate(0px, '+ wScroll /4 +'% )'
  });

  $('.fore-bird').css({
    'transform': 'translate(0px, -'+ wScroll /20 +'% )'
  });

  if(wScroll > $('.project-panel').offset().top - ($(window).height() / 1.2)) {
    $('.project-panel').each(function(i){
      setTimeout(function(){
        $('.project-panel').eq(i).addClass('is-showing');
      }, 250 * (i+1));
    });
  }

  if(wScroll > $('.nicolas').offset().top - $(window).height()){
    // var offset = wScroll - $('.nicolas').offset().top + $(window).height();

    var offset = (Math.min(0, wScroll - $('.nicolas').offset().top +$(window).height() - 350)).toFixed();

    $('.nicolas-1').css({'transform': 'translate('+ offset +'px , 20px)'});
    $('.nicolas-3').css({'transform': 'translate('+ Math.abs(offset) +'px , '+ Math.abs(offset) +'px)'});
  }

});
