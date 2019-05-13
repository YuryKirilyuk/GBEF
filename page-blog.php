<?php
/*
Template Name: Blog Page
*/

get_header();

$is_page_builder_used = et_pb_is_pagebuilder_used( get_the_ID() ); ?>

<div id="main-content">
    <div class="et_pb_section page-title">
        <div class="et_pb_row">
            <div class="et_pb_column et_pb_column_4_4 et-last-child">
                <div class="et_pb_module et_pb_text et_pb_text_align_left">
                    <div class="et_pb_text_inner">
                        <h1 class="entry-title"><?php the_title(); ?></h1>
                    </div>
                </div> <!-- .et_pb_text -->
            </div> <!-- .et_pb_column -->
        </div> <!-- .et_pb_row -->
    </div>

    <div class="et_pb_section section-blog">
        <div class="et_pb_row">
            <div class="et_pb_column">

        <?php $loop = new WP_Query( array(  'post_type' => 'blog',
                                            'posts_per_page' => '-1',
                                            'orderby' => 'post_id',
                                            'order' => 'ASC' ) ); ?>

    <?php if ($loop->have_posts()) : while ( $loop->have_posts() ) : $loop->the_post(); ?>

        <article id="post-<?php the_ID(); ?>" <?php post_class( 'et_pb_post' ); ?>>

            <div class="date">
                <?php echo get_the_date('F'); ?>
                <span><?php echo get_the_date('d'); ?></span>
            </div>

            <div class="post-info">

                <div class="post-meta">
                    Posted at <?php echo get_post_time('h-i'); ?> on <?php echo get_the_date('F d'); ?>
                    <!--in <?php the_category(); ?> by <?php the_author(); ?> -->
                </div>

                <h2 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>

                <?php
                if ( 'on' !== et_get_option( 'divi_blog_style', 'false' ) || ( is_search() && ( 'on' === get_post_meta( get_the_ID(), '_et_pb_use_builder', true ) ) ) ) {
                    truncate_post( 270 );
                } else {
                    the_content();
                } ?>

                <div class="et_pb_text_align_right">
                    <a href="<?php the_permalink(); ?>" class="button link">More</a>
                </div>


            </div>

        </article> <!-- .et_pb_post -->

    <?php endwhile;  wp_reset_query(); endif; ?>


            </div><!-- .et_pb_column -->
        </div><!-- .et_pb_row -->
    </div><!-- .et_pb_section -->







    <div class="et_pb_with_border et_pb_section et_pb_section_4 section-subscribe et_pb_with_background et_section_regular">
        <div class="et_pb_row et_pb_row_1">
            <div class="et_pb_column et_pb_column_4_4 et_pb_column_1    et_pb_css_mix_blend_mode_passthrough et-last-child">
                <div id="et_pb_contact_form_1" class="et_pb_with_border et_pb_module et_pb_contact_form_1 et_pb_contact_form_container clearfix" data-form_unique_num="1">
                    <h1 class="et_pb_contact_main_title">Subscribe to Email Updates</h1>
                    <div class="et-pb-contact-message"></div>
                    <div class="et_pb_contact">
                        <form class="et_pb_contact_form clearfix" method="post" action="http://testing15.lightmix.com/contact/">
                            <p class="et_pb_contact_field et_pb_contact_field_4 et_pb_contact_field_half" data-id="firstname" data-type="input">


                                <label for="et_pb_contact_firstname_1" class="et_pb_contact_form_label">First Name*</label>
                                <input type="text" id="et_pb_contact_firstname_1" class="input" value="" name="et_pb_contact_firstname_1" data-required_mark="required" data-field_type="input" data-original_id="firstname" placeholder="First Name*">
                            </p><p class="et_pb_contact_field et_pb_contact_field_5 et_pb_contact_field_half et_pb_contact_field_last" data-id="lastname" data-type="input">


                                <label for="et_pb_contact_lastname_1" class="et_pb_contact_form_label">Last Name*</label>
                                <input type="text" id="et_pb_contact_lastname_1" class="input" value="" name="et_pb_contact_lastname_1" data-required_mark="required" data-field_type="input" data-original_id="lastname" placeholder="Last Name*">
                            </p><p class="et_pb_contact_field et_pb_contact_field_6 et_pb_contact_field_half" data-id="email" data-type="email">


                                <label for="et_pb_contact_email_1" class="et_pb_contact_form_label">Email Address*</label>
                                <input type="text" id="et_pb_contact_email_1" class="input" value="" name="et_pb_contact_email_1" data-required_mark="required" data-field_type="email" data-original_id="email" placeholder="Email Address*">
                            </p>
                            <input type="hidden" value="et_contact_proccess" name="et_pb_contactform_submit_1">
                            <input type="text" value="" name="et_pb_contactform_validate_1" class="et_pb_contactform_validate_field">
                            <div class="et_contact_bottom_container">

                                <button type="submit" class="et_pb_contact_submit et_pb_button">Submit</button>
                            </div>
                            <input type="hidden" id="_wpnonce-et-pb-contact-form-submitted-1" name="_wpnonce-et-pb-contact-form-submitted-1" value="b35e78b187"><input type="hidden" name="_wp_http_referer" value="/blog/">
                        </form>
                    </div> <!-- .et_pb_contact -->
                </div> <!-- .et_pb_contact_form_container -->


            </div> <!-- .et_pb_column -->
        </div> <!-- .et_pb_row -->
    </div>

</div> <!-- #main-content -->

<?php

get_footer();
