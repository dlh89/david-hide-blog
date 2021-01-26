<?php
if( !defined( 'ABSPATH' ) ) { exit; } ?>

<div class="sidebar">
  <p class="sidebar__heading">Blog Archive</p>
  <?php 
  $args = array(
  'numberposts' => 10,
  'category' => 0, 
  'orderby' => 'date',
  'order' => 'DESC', 
  'include' => array(),
  'exclude' => array(get_the_ID()), 
  'meta_key' => '',
  'meta_value' =>'', 
  'post_type' => 'post',
  'suppress_filters' => true
  );
  $posts = get_posts($args);
  $post_months = array();
  foreach ($posts as $post) {
    $year = date('Y', strtotime($post->post_date));
    $month = date('F', strtotime($post->post_date));
    $title = $post->post_title;
    $link = get_permalink($post->ID);
    $post_meta = array(
      'title' => $title,
      'link' => $link
    );

    if (!array_key_exists($year, $post_months)) {
      // add key for the year
      $post_months[$year] = array();
    }
    if (!array_key_exists($month, $post_months[$year])) {
      // add key for the month
      $post_months[$year][$month] = array();
    } 
    // add post to relevant year and month array
    array_push($post_months[$year][$month], $post_meta);
  }

  foreach ($post_months as $post_year => $post_month) {
    echo '<p class="sidebar__subheading sidebar__subheading--year">' . $post_year . '</p>';
    foreach ($post_month as $month => $month_post) {
      echo '<p class="sidebar__subheading">' . $month . '</p>';
      echo '<div>';
      echo '<ul class="sidebar__list">';
      foreach ($month_post as $post => $post_meta) {
        ?>
          <li><a href="<?php echo $post_meta['link']; ?>" class="sidebar__link"><?php echo $post_meta['title'];  ?></a></li>
        <?php
      }
      echo '</ul>';
      echo '</div>';
    }
  }
  ?>
  <p class="sidebar__heading">Project Archive</p>
  <?php 
  $args = array(
  'numberposts' => 5,
  'category' => 0, 
  'orderby' => 'date',
  'order' => 'DESC', 
  'include' => array(),
  'exclude' => array(get_the_ID()), 
  'meta_key' => '',
  'meta_value' =>'', 
  'post_type' => 'project',
  'suppress_filters' => true
  );
  $posts = get_posts($args);
  $post_months = array();
  foreach ($posts as $post) {
    $year = date('Y', strtotime($post->post_date));
    $month = date('F', strtotime($post->post_date));
    $title = $post->post_title;
    $link = get_permalink($post->ID);
    $post_meta = array(
      'title' => $title,
      'link' => $link
    );

    if (!array_key_exists($year, $post_months)) {
      // add key for the year
      $post_months[$year] = array();
    }
    if (!array_key_exists($month, $post_months[$year])) {
      // add key for the month
      $post_months[$year][$month] = array();
    } 
    // add post to relevant year and month array
    array_push($post_months[$year][$month], $post_meta);
  }

  foreach ($post_months as $post_year => $post_month) {
    echo '<p class="sidebar__subheading sidebar__subheading--year">' . $post_year . '</p>';
    foreach ($post_month as $month => $month_post) {
      echo '<p class="sidebar__subheading">' . $month . '</p>';
      echo '<div>';
      echo '<ul class="sidebar__list">';
      foreach ($month_post as $post => $post_meta) {
        ?>
          <li><a href="<?php echo $post_meta['link']; ?>" class="sidebar__link"><?php echo $post_meta['title'];  ?></a></li>
        <?php
      }
      echo '</ul>';
      echo '</div>';
    }
  }
  ?>
  <p class="sidebar__heading">Follow</p>
  <ul class="sidebar__list">
    <li>
      <a href="https://github.com/dlh89" rel="noopener" target="_blank" class="sidebar__link">
        <svg class="icon"><use xlink:href="<?php echo get_template_directory_uri() ?>/dist/images/symbol-defs.svg#icon-github"></use></svg>
        GitHub
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/david-hide-b2633b168/" rel="noopener" target="_blank" class="sidebar__link">
      <svg class="icon"><use xlink:href="<?php echo get_template_directory_uri() ?>/dist/images/symbol-defs.svg#icon-linkedin-square"></use></svg>
      LinkedIn
      </a>
    </li>
    <li>
      <a href="https://codepen.io/dlh89/" rel="noopener" target="_blank" class="sidebar__link">
        <svg class="icon"><use xlink:href="<?php echo get_template_directory_uri() ?>/dist/images/symbol-defs.svg#icon-codepen"></use></svg>
        CodePen
      </a>
    </li>
  </ul>
</div>