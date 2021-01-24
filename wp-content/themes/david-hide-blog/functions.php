<?php

require get_theme_file_path('/inc/search-route.php');

function blog_files() {
  wp_enqueue_script('jquery');
  // Test if local.php file exists which will determine if it is the development environment
  if (file_exists(dirname(__FILE__) . '/local.php')) {
    // include microtime for development as it prevents caching
    wp_enqueue_style( 'site_main_css', get_template_directory_uri() . '/dist/main.min.css' , null, microtime());
    wp_enqueue_script( 'site_main_js', get_template_directory_uri() . '/dist/app.bundle.js' , null , microtime(), true );
  } else {
    // include a genuine version for production to enable caching
    wp_enqueue_style( 'site_main_css', get_template_directory_uri() . '/dist/main.min.css' , null, 1.3);
    wp_enqueue_script( 'site_main_js', get_template_directory_uri() . '/dist/app.bundle.js' , null , 1.1, true );
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

// Redirect subscriber accounts from wp-admin to homepage
add_action('admin_init', 'subscriberLoginRedirect');

function subscriberLoginRedirect() {
  $user = wp_get_current_user();
  if (count($user->roles) == 1 AND $user->roles[0] == 'subscriber') {
    wp_redirect(site_url('/'));
    exit;
  }
}

add_action('wp_loaded', 'subscriberRemoveAdminBar');

function subscriberRemoveAdminBar() {
  $user = wp_get_current_user();
  if (count($user->roles) == 1 AND $user->roles[0] == 'subscriber') {
    show_admin_bar(false);
  }
}

// Customise login screen
add_filter('login_headerurl', 'headerUrl');

function headerUrl() {
  return esc_url(site_url('/'));
}

add_action('login_enqueue_scripts', 'loginCSS');

function loginCSS() {
  wp_enqueue_style( 'site_main_css', get_template_directory_uri() . '/dist/main.min.css' );
  wp_enqueue_style('custom-google-fonts', '//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
}

add_filter('login_headertitle', 'loginTitle');

function loginTitle() {
  return get_bloginfo('name');
}