<?php

/**
 * Plugin Name: David Hide Blog
 */

class DavidHideBlog {
    public function __construct() {
        self::include_files();
        self::hook_actions();
    }

    public function include_files()
    {
        require (plugin_dir_path(__FILE__) . '/includes/search-route.php');
    }

    public function hook_actions()
    {
        add_filter('clean_url', array($this, 'async_scripts'), 11, 1);
        add_action('after_setup_theme', array($this, 'blog_features'));
        add_filter('login_headertext', array($this, 'login_title'));

        // Customise login screen
        add_filter('login_headerurl', array($this, 'header_url'));

        add_action('wp_enqueue_scripts', array($this, 'blog_files'));
        add_action('login_enqueue_scripts', array($this, 'login_css'));
    }


    public function blog_files() {
        wp_enqueue_script('jquery');
        // Test if local.php file exists which will determine if it is the development environment
        if (file_exists(dirname(__FILE__) . '/local.php')) {
            // include microtime for development as it prevents caching
            wp_enqueue_style('site_main_css', get_template_directory_uri() . '/dist/main.min.css' , null, microtime());
            wp_enqueue_script('site_main_js', get_template_directory_uri() . '/dist/app.bundle.js' , null , microtime(), true);
        } else {
            // include a genuine version for production to enable caching
            wp_enqueue_style('site_main_css', get_template_directory_uri() . '/dist/main.min.css' , null, 1.4);
            wp_enqueue_script('site_main_js', get_template_directory_uri() . '/dist/app.bundle.js' , null , 1.1, true);
        }
        wp_enqueue_style('custom-google-fonts', '//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
        wp_localize_script('site_main_js', 'blogData', array(
            'root_url' => get_site_url()
         ));
    }

    // Async load
    public function async_scripts($url)
    {
        if (strpos($url, '#asyncload') === false) {
            return $url;
        } else if (is_admin()) {
            return str_replace('#asyncload', '', $url);
        } else {
            return str_replace('#asyncload', '', $url)."' async='async"; 
        }
    }

    public function blog_features() {
        add_theme_support('title-tag');
        add_theme_support('post-thumbnails');
        add_image_size('customThumbnail', 440, 247, true);
    }

    public function header_url() {
        return esc_url(get_template_directory_uri() . '/dist/images/davidhide-logo.svg');
    }

    public function login_css() {
        wp_enqueue_style('site_main_css', get_template_directory_uri() . '/dist/main.min.css');
        wp_enqueue_style('custom-google-fonts', '//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
    }

    public function login_title() {
        return get_bloginfo('name');
    }
}
 
$david_hide_blog = new DavidHideBlog;