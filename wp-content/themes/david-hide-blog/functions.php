<?php
function blog_files() {
  wp_enqueue_style( 'site_main_css', get_template_directory_uri() . '/dist/main.min.css' );
  wp_enqueue_script( 'site_main_js', get_template_directory_uri() . '/dist/app.bundle.js' , null , microtime() , true ); // TODO: Remove microtime from version in production as it prevents caching
  wp_enqueue_style('custom-google-fonts', '//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
  wp_localize_script('site_main_js', 'blogData', array(
    'root_url' => get_site_url()
  ));
}

add_action('wp_enqueue_scripts', 'blog_files');

function blog_features() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_image_size('customThumbnail', 440, 247, true);
}

add_action('after_setup_theme', 'blog_features');
