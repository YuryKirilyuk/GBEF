<?php

get_header();

$show_default_title = get_post_meta( get_the_ID(), '_et_pb_show_title', true );

$is_page_builder_used = et_pb_is_pagebuilder_used( get_the_ID() );

?>

<div id="main-content">

    <div class="et_pb_section page-title et_pb_with_background et_section_regular">
        <div class="et_pb_row">
            <div class="et_pb_column et_pb_column_4_4 et_pb_css_mix_blend_mode_passthrough et-last-child">
                <div class="et_pb_module et_pb_text et_pb_bg_layout_light  et_pb_text_align_left">
                    <div class="et_pb_text_inner">
                        <h1 class="entry-title">Blog</h1>
                        <h1 class="entry-title">News & Updates</h1>
                    </div>
                </div> <!-- .et_pb_text -->
            </div> <!-- .et_pb_column -->
        </div> <!-- .et_pb_row -->
    </div>




	<?php
		if ( et_builder_is_product_tour_enabled() ):
			// load fullwidth page in Product Tour mode
			while ( have_posts() ): the_post(); ?>

				<article id="post-<?php the_ID(); ?>" <?php post_class( 'et_pb_post' ); ?>>
					<div class="entry-content">
					<?php
						the_content();
					?>
					</div> <!-- .entry-content -->

				</article> <!-- .et_pb_post -->

		<?php endwhile;
		else:
	?>
    <?php if ( ! $is_page_builder_used ) : ?>
	<div class="container">
		<div id="content-area" class="clearfix">
			<div id="left-area">
    <?php endif; ?>
			<?php while ( have_posts() ) : the_post(); ?>
				<?php
				/**
				 * Fires before the title and post meta on single posts.
				 *
				 * @since 3.18.8
				 */
				do_action( 'et_before_post' );
				?>
				<article id="post-<?php the_ID(); ?>" <?php post_class( 'et_pb_post' ); ?>>
					<?php if ( ( 'off' !== $show_default_title && $is_page_builder_used ) || ! $is_page_builder_used ) { ?>
						<div class="et_post_meta_wrapper">
							<h1 class="entry-title"><?php the_title(); ?></h1>

                            <div class="post-meta">
                                Posted at <?php echo get_post_time('h-i'); ?> on <?php echo get_the_date('F d'); ?> in <?php the_category(); ?> <!-- by <?php the_author(); ?> -->
                            </div>


					</div> <!-- .et_post_meta_wrapper -->
				<?php  } ?>

					<div class="entry-content">
					<?php
						do_action( 'et_before_content' );

						the_content();

						wp_link_pages( array( 'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'Divi' ), 'after' => '</div>' ) );
					?>
					</div> <!-- .entry-content -->
					<div class="et_post_meta_wrapper">
					<?php
					if ( et_get_option('divi_468_enable') === 'on' ){
						echo '<div class="et-single-post-ad">';
						if ( et_get_option('divi_468_adsense') !== '' ) echo et_core_intentionally_unescaped( et_core_fix_unclosed_html_tags( et_get_option('divi_468_adsense') ), 'html' );
						else { ?>
							<a href="<?php echo esc_url(et_get_option('divi_468_url')); ?>"><img src="<?php echo esc_attr(et_get_option('divi_468_image')); ?>" alt="468" class="foursixeight" /></a>
				<?php 	}
						echo '</div> <!-- .et-single-post-ad -->';
					}

					/**
					 * Fires after the post content on single posts.
					 *
					 * @since 3.18.8
					 */
					do_action( 'et_after_post' );

						if ( ( comments_open() || get_comments_number() ) && 'on' === et_get_option( 'divi_show_postcomments', 'on' ) ) {
							comments_template( '', true );
						}
					?>
					</div> <!-- .et_post_meta_wrapper -->
				</article> <!-- .et_pb_post -->

			<?php endwhile; ?>

            <?php endif; ?>

            <?php if ( ! $is_page_builder_used ) : ?>
			</div> <!-- #left-area -->

			<?php get_sidebar(); ?>


		</div> <!-- #content-area -->
	</div> <!-- .container -->
	<?php endif; ?>
</div> <!-- #main-content -->

<?php

get_footer();
