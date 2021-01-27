<?php 

class SearchRoute {
  public function __construct() {
      self::hook_actions();
  }

  public function hook_actions()
  {
      add_action('rest_api_init', array($this, 'site_register_search'));
  }

  public function site_register_search() {
    register_rest_route('dh/v1', 'search', array(
      'methods' => WP_REST_SERVER::READABLE,
      'callback' => array($this, 'dh_search_results')
    ));
  }
  
  public function dh_search_results($data) {
    $main_query = new WP_Query(array(
      'post_type' => array('post', 'project', 'page'),
      's' => sanitize_text_field($data['term'])
    ));
  
    $results = array();
  
    while($main_query->have_posts()) {
      $main_query->the_post();
      array_push($results, array(
        'title' => get_the_title(),
        'link' => get_the_permalink(),
        'type' => get_post_type()
      ));
    }
  
    return $results;
  }
}

$search_route = new SearchRoute;