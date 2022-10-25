/*
  * @package Bizcraft
  * @subpackage Bizcraft HTML
  * 
  * Template Scripts
  * Created by Tripples
  
   1.    Style Switcher
   2.    Navigation
   3.    Fixed Header
   4.    Main Slideshow (Carousel)
   5.    Counter
   6.    Owl Carousel
   7.    Flex Slider
   8.    Wow Animation
   10.   Video Background
   11.   Back To Top

  
*/


jQuery(function ($) {
  'use strict';


  /* ----------------------------------------------------------- */
  /*  Style Switcher
  /* ----------------------------------------------------------- */
    $(document).ready(function () {
      $('.style-switch-button').click(function () {
        $('.style-switch-wrapper').toggleClass('active');
      });
      $('a.close-styler').click(function () {
        $('.style-switch-wrapper').removeClass('active');
      });
    });



  /* ----------------------------------------------------------- */
  /*  Fixed header
  /* ----------------------------------------------------------- */

  /*

  $(window).on('scroll', function () {

    if ($(window).scrollTop() > 100) {

      $('.header').addClass('header-solid animated fadeInDown');
    } else {

      $('.header').removeClass('header-solid animated fadeInDown');

    }

  });

  

  $(window).on('scroll', function () {

    if ($(window).scrollTop() > 200) {

      $('.header2').addClass('header-bgnone animated fadeInDown');
    } else {

      $('.header2').removeClass('header-bgnone animated fadeInDown');

    }

  });

  */

  (function ($) {
    $(document).ready(function () {
        var $nav = $('.header');
        var lastScrollTop = 0;
        var direction;
        $(function () {
            $(window).scroll(function () {
              if ($(window).scrollTop() > 100) {
                var scrollTop = $(this).scrollTop();
                if (lastScrollTop < scrollTop - 5 && scrollTop > $nav.outerHeight() && direction != 'down') {
                    // adding -5 helps prevent navbar twitchiness
                    // Scroll down
                    $nav.stop().fadeOut();
                    direction = 'down';
                    
                } else if (lastScrollTop > scrollTop + 5  && direction != 'up') {
                    // adding +5 helps prevent navbar twitchiness
                    // Scroll up
                    $nav.stop().fadeIn();
                    direction = 'up';
                    $nav.addClass('header-solid');
                }
                lastScrollTop = scrollTop;
              } else {
                $('.header').removeClass('header-solid animated fadeInDown');
              }
            });
        });
    });
}(jQuery));

  /* ----------------------------------------------------------- */
  /*  Main slideshow
  /* ----------------------------------------------------------- */

  /* Home 2 */
  /*
  $('.flexSlideshow').flexslider({
    slideshowSpeed: 5000,
    animationSpeed: 600
  });
  */
  /* Home 3 and 4 */
  /*
  $('#main-slide').carousel({
    pause: false,
    interval: 2000
  });
  */

  /* Initialize Swiper */

  /* remove autoplay on mobile devices 
  var videoLocation  = document.getElementById("slider-video");
  window.onload = removeAutoplay();
	function removeAutoplay() {
		if(window.innerWidth < 768){
			videoLocation.removeAttribute("autoplay");
	  };
	}
  */

  const swiper = new Swiper('.swiper', {
    speed: 1000,
    effect: 'fade',
    autoplay: {
      delay: 7000, /*set to longest video duration minus transition speed*/
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    /* ON INIT AUTOPLAY THE FIRST VIDEO */
    on: {
      init: function () {
        console.log('swiper initialized');
        var currentVideo =  $("[data-swiper-slide-index=" + this.realIndex + "]").find("video");
        currentVideo.trigger('play');
      },
    },
  });


/* SWIPER SHOULD ONLY PLAY VIDEOS WHEN THEY COME INTO VIEW */  
/* GET ALL VIDEOS */
var sliderVideos = $(".swiper-slide video");

/* SWIPER API - Event will be fired after animation to other slide (next or previous) */
swiper.on('slideChange', function () {
  console.log('slide changed');
  /* stop all videos (currentTime buggy without this loop idea) */
  sliderVideos.each(function( index ) {
    this.currentTime = 0;
  });

  /* SWIPER GET CURRENT AND PREV SLIDE (AND VIDEO INSIDE) */
  var prevVideo =  $("[data-swiper-slide-index=" + this.previousIndex + "]").find("video");
  var currentVideo =  $("[data-swiper-slide-index=" + this.realIndex + "]").find("video");
  currentVideo.trigger('play');
  prevVideo.trigger('stop');
});
 

  /* ----------------------------------------------------------- */
  /*  Counter
  /* ----------------------------------------------------------- */

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });



  /* ----------------------------------------------------------- */
  /*  Owl Carousel
  /* ----------------------------------------------------------- */


  //Testimonial

  $('#testimonial-carousel').owlCarousel({

    navigation: false, // Show next and prev buttons
    slideSpeed: 600,
    pagination: true,
    singleItem: true

  });

  // Custom Navigation Events
  var owl = $('#testimonial-carousel');


  // Custom Navigation Events
  $('.next').click(function () {
    owl.trigger('owl.next');
  });
  $('.prev').click(function () {
    owl.trigger('owl.prev');
  });
  $('.play').click(function () {
    owl.trigger('owl.play', 1000); //owl.play event accept autoPlay speed as second parameter
  });
  $('.stop').click(function () {
    owl.trigger('owl.stop');
  });


  //Clients

  $('#client-carousel').owlCarousel({

    nav: false, // Show next and prev buttons
    dots: false,  
    loop: true,
    items: 5,
    responsive: {
      0: {items:2},
      576: {items:3},
      768: {items:4},
      992: {items:5},
      1200: {items: 6},
      1400: {items: 7}
    },
    autoplayHoverPause: false,
    autoplay: true,
    autoplaySpeed: 5000,
    autoplayTimeout: 5000,
    slideTransition: 'linear',
    margin: 10
  });

  //App gallery
  $('#app-gallery-carousel').owlCarousel({

    navigation: false, // Show next and prev buttons
    slideSpeed: 400,
    pagination: true,
    items: 4,
    rewindNav: true,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    stopOnHover: true
  });



  /* ----------------------------------------------------------- */
  /*  Flex slider
  /* ----------------------------------------------------------- */

  //Second item slider
  $(window).load(function () {
    $('.flexSlideshow').flexslider({
      animation: 'fade',
      controlNav: false,
      directionNav: true,
      slideshowSpeed: 8000
    });
  });


  //Portfolio item slider
  $(window).load(function () {
    $('.flexportfolio').flexslider({
      animation: 'slide',
      controlNav: false,
      directionNav: true,
      slideshowSpeed: 8000,
      controlNav: "thumbnails"
    });
  });


  /* ----------------------------------------------------------- */
  /*  Animation
  /* ----------------------------------------------------------- */
  //Wow
  new WOW().init();


  /* ----------------------------------------------------------- */
  /*  Prettyphoto
  /* ----------------------------------------------------------- */

  $('a[data-rel^=\'prettyPhoto\']').prettyPhoto();


  /* ----------------------------------------------------------- */
  /* Video background
  /* ----------------------------------------------------------- */

  var resizeVideoBackground = function () {

    $('.video-background').each(function (i, el) {
      var $el = $(el),
        $section = $el.parent(),
        min_w = 300,
        video_w = 16,
        video_h = 9,
        section_w = $section.outerWidth(),
        section_h = $section.outerHeight(),
        scale_w = section_w / video_w,
        scale_h = section_h / video_h,
        scale = scale_w > scale_h ? scale_w : scale_h,
        new_video_w, new_video_h, offet_top, offet_left;


      if (scale * video_w < min_w) {
        scale = min_w / video_w;
      }

      new_video_w = scale * video_w;
      new_video_h = scale * video_h;
      offet_left = (new_video_w - section_w) / 2 * -1;
      offet_top = (new_video_h - section_h) / 2 * -1;

      $el.css('width', new_video_w);
      $el.css('height', new_video_h);
      $el.css('marginTop', offet_top);
      $el.css('marginLeft', offet_left);
    });

  };

  $(window).on('resize', function () {
    resizeVideoBackground();
  });

  resizeVideoBackground();

  /* ----------------------------------------------------------- */
  /*  Back to top
  /* ----------------------------------------------------------- */

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-to-top').click(function () {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  $('#back-to-top').tooltip('hide');

});

  /* ----------------------------------------------------------- */
  /*  vector animations
      uses SVGInjector to inline svg from file
      uses scrollmagic to animate
      avoid fouc by using <img data-src="file.svg"> (not src)
      https://greensock.com/forums/topic/11909-iconic-svginjector-preventing-gsap-animations/
  /* ----------------------------------------------------------- */
  
  // Elements to inject
  var mySVGsToInject = document.querySelectorAll('img.inject-me');

  // Options
  var injectorOptions = {
    evalScripts: 'once',
    pngFallback: 'assets/png',
    each: function (svg) {
      // Callback after each SVG is injected
      console.log('SVG injected: ' + svg.getAttribute('id'));
    }
  };
  
  // Trigger the injection
  SVGInjector(mySVGsToInject, injectorOptions, function (totalSVGsInjected) {
    console.log('We injected ' + totalSVGsInjected + ' SVG(s)!');
    // Animate with scrollmagic
    var $drawing = $("path#drawing");

	  // prepare SVG
	  pathPrepare($drawing);

	  // init controller
	  var controller = new ScrollMagic.Controller();

	  // build tween
	  var tween = new TimelineMax()
		.add(TweenMax.to($drawing, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);			// change color during the whole thing

	  // build scene
	  var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 200, tweenChanges: true})
					.setTween(tween)
					//.addIndicators() // add indicators (requires plugin) remove for production
					.addTo(controller);

    function pathPrepare ($el) {
      var lineLength = $el[0].getTotalLength();
      $el.css("stroke-dasharray", lineLength);
      $el.css("stroke-dashoffset", lineLength);
    }
  });
	
