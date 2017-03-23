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

//navigation link and smooth scroll

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

//scroll to the top of the page
$(document).scroll(function(){
      $(".arrow-up").on("click", function() {
        $("body").scrollTop(0)
      });
    });


//parallax effects
$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  var nav = $('#navigation').height();
  var hero = $('#hero-box').height();
  var about = $('#about-me').height();
  var portfolio = $('#my-portfolio').height();
  var art = $('#my-art').height();
  var contact = $('#contact-me').height();
  var wScroll_normalised = wScroll + nav;

  if (wScroll_normalised < hero ) {
    $('.icon-maison').addClass("maison-red");
    $('.icon-a-mon-sujet').removeClass("a-mon-sujet-red");
  }

  if (wScroll_normalised > hero && wScroll <= hero + about) {
    $('.icon-a-mon-sujet').addClass("a-mon-sujet-red");
    $('.icon-maison').removeClass("maison-red");
    $('.icon-cartable').removeClass("cartable-red");
  }

  if (wScroll_normalised > hero + about && wScroll <= hero + about + portfolio) {
    $('.icon-a-mon-sujet').removeClass("a-mon-sujet-red");
    $('.icon-cartable').addClass("cartable-red");
    $('.icon-petit-nicolas').removeClass("petit-nicolas-red");
  }

  if (wScroll_normalised > hero + about + portfolio && wScroll <= hero + about + portfolio + art) {
    $('.icon-petit-nicolas').addClass("petit-nicolas-red");
    $('.icon-cartable').removeClass("cartable-red");
    $('.icon-contacter-moi').removeClass("contacter-moi-red");
  }

  if (wScroll_normalised > hero + about + portfolio + art && wScroll <= hero + about + portfolio + art + contact) {
    $('.icon-contacter-moi').addClass("contacter-moi-red");
    $('.icon-petit-nicolas').removeClass("petit-nicolas-red");
  }


//hero
  $('.hero-description').css({
    'transform': 'translate(0px, -'+ wScroll /20 +'% )',
    'opacity': 30/ (wScroll + 1) - 0.1
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
