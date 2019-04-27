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
                    Posted at <?php echo get_post_time('h-i'); ?> in <?php the_category(); ?> by <?php the_author(); ?>
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

</div> <!-- #main-content -->

<?php

get_footer();
