<?php

require get_theme_file_path('/inc/search-route.php');

function blog_files() {
  wp_enqueue_style( 'site_main_css', get_template_directory_uri() . '/dist/main.min.css' );
  // Test if local.php file exists which will determine if it is the development enviornment
  if (file_exists(dirname(__FILE__) . '/local.php')) {
    wp_enqueue_script( 'site_main_js', get_template_directory_uri() . '/dist/app.bundle.js' , null , microtime(), true ); // include microtime for development as it prevents caching
  } else {
    wp_enqueue_script( 'site_main_js', get_template_directory_uri() . '/dist/app.bundle.js' , null , 1.0, true ); // include a genuine version for production to enable caching
  }
  wp_enqueue_style('custom-google-fonts', '//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
  wp_localize_script('site_main_js', 'blogData', array(
    'root_url' => get_site_url()
  ));
}

// Async load
function async_scripts($url)
{
  if ( strpos( $url, '#asyncload') === false )
    return $url;
  else if ( is_admin() )
    return str_replace( '#asyncload', '', $url );
  else
	  return str_replace( '#asyncload', '', $url )."' async='async"; 
}
add_filter( 'clean_url', 'async_scripts', 11, 1 );

add_action('wp_enqueue_scripts', 'blog_files');

function blog_features() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_image_size('customThumbnail', 440, 247, true);
}

add_action('after_setup_theme', 'blog_features');
