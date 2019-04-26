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


        resetHeight();

		
	});



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



    jQuery('#tabs').on('click', '.et_pb_module', function () {
        var $el = jQuery(this),
            id = $el.attr('id');

        $el.addClass('active').parent().siblings().find('.et_pb_module').removeClass('active');

        jQuery('#tabs-content').find('.et_pb_module ').removeClass('active');
        jQuery('#' + id + '-content').addClass('active');

    });

    jQuery('#tabs').on('click', 'a', showForm);
    jQuery('#tabs-content').on('click', '.button', showForm);
    jQuery('.section-membership-form').on('click', hideForm);
    jQuery('.et_pb_blurb.close').on('click', hideForm);


function showForm() {
    jQuery('body').css('overflow','hidden');
    jQuery('.section-membership-form').addClass('show');
}

function hideForm(e) {
    var el = jQuery(e.target);
    if(el.closest('#form-membership').length==0) {
        jQuery('.section-membership-form').removeClass('show');
        jQuery('body').css('overflow','visible');
    }

}


    jQuery('.section-members .et_pb_column').append('<div class="et_pb_team_member empty"></div><div class="et_pb_team_member empty"></div>');
    jQuery('.section-members .et_pb_team_member_image ').each(function (){
        jQuery(this).append('<div class="toggle-button"></div>');
    });
    //jQuery('.toggle-button').each(showPopup);
    jQuery('.section-members .et_pb_module_header').each(showPopup);
    jQuery('.section-members .et_pb_team_member_image').each(showPopup);

});

function showPopup() {
    var $el = jQuery(this);

    $el.on('click', function(){
        var parentHeight = $el.parents('.et_pb_team_member').height(),
            offset = $el.offset(),
            windowWidth = jQuery(window).width(),
            breakPoint = windowWidth / 2;

        //direction alignment of popup
        if(breakPoint < offset.left) {
            $el.parents('.et_pb_team_member').addClass('align-right');
        }
        else {
            $el.parents('.et_pb_team_member').removeClass('align-right');
        }

        //setting parents height
        $el.parents('.et_pb_team_member').height(parentHeight);

        if($el.hasClass('active')) {
            $el.parents('.et_pb_team_member').removeAttr('style');
        }

        if(!($el.hasClass('active'))) {
            jQuery('.et_pb_column ').removeClass('blur')
                .find('.toggle-button').removeClass('active');
        }
        $el.toggleClass('active')
            .parents('.et_pb_team_member ')
            .toggleClass('show')
            .siblings().removeClass('show')
            .parent().toggleClass('blur');
    });
}

function resetHeight() {
    jQuery('.et_pb_team_member').each(function(){
        jQuery(this).removeAttr('style');
    });
}