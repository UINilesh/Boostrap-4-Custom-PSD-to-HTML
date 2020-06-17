(function ($) {
 "use strict";
  
/*--------------------------
     slider carousel
---------------------------- */
    var intro_carousel = $('.intro-carousel');
    intro_carousel.owlCarousel({
        loop:true,
        nav:true,		
        autoplay:false,
        dots:true,
        navText: ["<i class='icon icon-chevron-left'></i>","<i class='icon icon-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

/*--------------------------
     Project carousel
---------------------------- */
	var Project_carousel = $('.project-carousel');
	Project_carousel.owlCarousel({
        loop:true,
        nav:true,		
        autoplay:false,
        dots:true,
        navText: ["<i class='icon icon-chevron-left'></i>","<i class='icon icon-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
/*--------------------------
     Project carousel
---------------------------- */
    $('.project-carousel-2').owlCarousel({
        loop:true,
        nav:true,		
        autoplay:false,
        dots:true,
		margin:30,
        navText: ["<i class='icon icon-chevron-left'></i>","<i class='icon icon-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });
	 
	 
	 
	 $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


 
 

})(jQuery); 


