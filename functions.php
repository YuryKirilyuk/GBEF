<?php 

  //text editor will not remove <span>
  function pp_override_mce_options($initArray) {
    $opts = '*[*]';
    $initArray['valid_elements'] = $opts;
    $initArray['extended_valid_elements'] = $opts;
    return $initArray;
  }
  add_filter('tiny_mce_before_init', 'pp_override_mce_options');


add_filter( 'body_class', 'my_class_names' );
function my_class_names( $classes ) {
    global $post;

    $classes[] = $post->post_name;
    return $classes;
}

?>