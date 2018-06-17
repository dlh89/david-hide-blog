<?php
  function project_post_types() {
    register_post_type('project', array(
      'supports' => array('title', 'editor', 'excerpt', 'thumbnail'),
      'rewrite' => array('slug' => 'projects'),
      'has_archive' => true,
      'public' => true,
      'show_in_rest' => true,
      'rest_base' => 'projects',
      'labels' => array(
        'name' => 'Projects',
        'add_new_item' => 'Add New Project',
        'edit_item' => 'Edit Project',
        'all_items' => 'All Projects',
        'singular_name' => 'Project'
      ),
      'menu_icon' => 'dashicons-portfolio'
    ));
  }
  
  add_action('init', 'project_post_types');