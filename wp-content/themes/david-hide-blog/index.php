<?php get_header(); ?>
<section class="banner">
  <h1 class="u-absolute-center">Blog</h1>
</section>
<section>
  <div class="container u-margin-top-large">
    <?php
      while(have_posts()) {
        the_post(); 
        include(locate_template('partials/post-preview.php'));
      }    
      $links = paginate_links(array(
        'type' => 'array'
      ));
      if (!empty($links)) {
        echo "<div class='pagination'>";
        foreach ($links as $link) {
          echo $link;
        }
        echo "</div>";
      }
    ?>
  </div>
</section>

<?php get_footer(); ?>
