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



jQuery(document).ready(function($) {
    $(".et_pb_member_social_links a").attr('target', '_blank');
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
            autoplay: true,
            autoplaySpeed: 8000,
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

    //adding empty divs for propper last row alignment
    jQuery('.section-members div[id$="members"] .et_pb_column')
        .append('<div class="et_pb_team_member empty"></div><div class="et_pb_team_member empty"></div>');
    jQuery('.section-members .et_pb_team_member_image ').each(function (){
        jQuery(this).append('<div class="toggle-button"></div>');
    });
    jQuery('.section-members .et_pb_module_header').each(showPopup);
    jQuery('.section-members .et_pb_team_member_image').each(showPopup);




    jQuery('.sorting span').on('click', function(){
        jQuery(this).addClass('active').siblings().removeClass('active');
    });

    //SORTING
    //Setting attribute data-name
    jQuery('.et_pb_team_member').each(function(){
        var $teamMember = jQuery(this),
            name = $teamMember.find('.et_pb_module_header').text(),
            company = $teamMember.find('.title').text(),
            arr = name.replace(/\s/g," ");

        arr = arr.split(" ");
        if(arr.length > 1) {
            $teamMember.attr('data-name', arr.pop());
        } else {
            $teamMember.attr('data-name', '');
        }
        $teamMember.attr('data-company', company);

    });
    //sorting by attributes data-name, data-company
    if(jQuery('.section-members').length) {
        jQuery('.sort-name').on('click', function(){
            tinysort('#executive-members .et_pb_team_member',{data:'name'});
            tinysort('#general-members .et_pb_team_member',{data:'name'});
        });

        jQuery('.sort-company').on('click', function(){
            tinysort('#executive-members .et_pb_team_member',{data:'company'});
            tinysort('#general-members .et_pb_team_member',{data:'company'});
        });
    }

    //company logo
    jQuery('.et_pb_team_member .et_pb_module_header').each(function(){
        var company = jQuery(this).siblings('.title').text();
        //console.log(company);

        if(company.indexOf('Oracle') != -1) {company = 'Oracle'};
        if(company.indexOf('Ambit') != -1) {company = 'Ambit'};
        if(company.indexOf('Roosevelt') != -1) {company = 'Roosevelt'};
        if(company.indexOf('UIC') != -1) {company = 'UIC'};
        var companyNew = company.split(' ')[0];
        var companyNew = companyNew.split('.')[0];
        var companyNew = companyNew.split(',')[0];
        //console.log(companyNew);

        var path = "/GBEF/wp-content/themes/gbef/assets/img/logos/logo-" + companyNew + ".png";
        //console.log(path);

        var img = "<img alt='" + company + "' src='" + path + "' />";
        //console.log(img);

        jQuery(this).append(img);


        //jQuery(this).append('<img alt="' + company + '" src="/GBEF/wp-content/themes/gbef/assets/img/logos/logo-' + companyNew + '.png" />');
    });



    //<br> issue
    if(jQuery('.section-leadership-team').length) {
        jQuery('.et_pb_member_position').each(function(){
            jQuery(this).text(jQuery(this).text().replace(",", ",\n"));
        });
    }



});

function showPopup() {
    var $el = jQuery(this),
        $item = $el.parents('.et_pb_team_member');

    $el.on('click', function(){
        var parentHeight = $item.height(),
            windowWidth = jQuery(window).width(),
            elOffset = $item.offset(),
            breakPoint = (windowWidth > 1024) ? windowWidth * .7 : windowWidth * .6;

        //direction alignment of popup
        if(breakPoint < elOffset.left) $item.addClass('align-right');
        else $item.removeClass('align-right');

        //setting parents height(for no jumping on changing position to absolute)
        $item.height(parentHeight);
        //removing parents height
        if($el.hasClass('active')) $item.removeAttr('style');

        if(!($el.hasClass('active'))) {
            jQuery('.et_pb_column').find('.toggle-button').removeClass('active');
        }
        $el.toggleClass('active')
            .parents('.et_pb_team_member ')
            .toggleClass('show')
            .siblings().removeClass('show');
    });
}
//this for testing purposes
function resetHeight() {
    jQuery('.et_pb_team_member').each(function(){
        jQuery(this).removeAttr('style');
    });
}