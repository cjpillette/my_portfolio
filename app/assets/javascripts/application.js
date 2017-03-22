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
//= require tether
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');
    var nav = $('#navigation').height();

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top - nav;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  console.log(wScroll);

//hero
  $('.hero-description').css({
    'transform': 'translate(0px, -'+ wScroll /20 +'% )',
    'opacity': 30/ (wScroll + 1) - 0.1,
  });

  $('.artist-drawing').css({
    'transform': 'translate(0px, '+ wScroll /50 +'% )',
    'opacity': (wScroll /200)
  });


  $('.engineer-drawing').css({
    'transform': 'translate(0px, -'+ wScroll /40 +'% )',
    'opacity': (wScroll /200),
    'transform': 'scale(1.'+ wScroll / 100 +')'
  });

  $('.developer-drawing').css({
    'transform': 'translate(0px, -'+ wScroll /22 +'% )',
    'opacity': (wScroll /200),
    'transform': 'scale(1.'+ wScroll / 100 +')'
  });


//portfolio


//Contact
$('#melbourne-background').css({
  'transform': 'translate(0px, '+ (wScroll*30)/wScroll +'% )'
});



});
