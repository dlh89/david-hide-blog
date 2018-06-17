<?php 

add_action('rest_api_init', 'siteRegisterSearch');

function siteRegisterSearch() {
  register_rest_route('dh/v1', 'search', array(
    'methods' => WP_REST_SERVER::READABLE,
    'callback' => 'dhSearchResults'
  ));
}

function dhSearchResults($data) {
  $mainQuery = new WP_Query(array(
    'post_type' => array('post', 'project', 'page'),
    's' => sanitize_text_field($data['term'])
  ));

  $results = array();

  while($mainQuery->have_posts()) {
    $mainQuery->the_post();
    array_push($results, array(
      'title' => get_the_title(),
      'link' => get_the_permalink(),
      'type' => get_post_type()
    ));
  }

  return $results;
}