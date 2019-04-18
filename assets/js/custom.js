jQuery(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        jQuery('body').addClass('ios');
	} else{
        jQuery('body').addClass('web');
	};
	//$('body').removeClass('loaded');
});


/* ==========================================================================
   When the window is scrolled, do
   ========================================================================== */

jQuery(window).scroll(function() {
	
		
	});

/* ==========================================================================
   When the window is resized, do
   ========================================================================== */

jQuery(window).resize(function() {
		
		
	});




/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
jQuery(function(){
	/* placeholder*/
    jQuery('input, textarea').each(function(){
 		var placeholder = jQuery(this).attr('placeholder');
        jQuery(this).focus(function(){ jQuery(this).attr('placeholder', '');});
        jQuery(this).focusout(function(){
            jQuery(this).attr('placeholder', placeholder);
 		});
 	});
	/* placeholder*/

	/* components */

    if(jQuery('#executiveMembersSlider').length) {
        jQuery('#executiveMembersSlider .et_pb_column').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            swipeToSlide: true,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 980,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    };


    if(jQuery('#memberSpotLightSlider').length) {
        jQuery('#memberSpotLightSlider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            appendArrows: jQuery('.member-spot-slider-arrows')
        });
    };











	/*
	
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 10
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	
	*/
	
	/* components */
	
	

});
