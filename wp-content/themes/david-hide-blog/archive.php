<?php get_header(); ?>
<div class="container">
  <div class="u-margin-top-large">
    <h1><?php the_archive_title(); ?></h1>
    <p><?php the_archive_description(); ?></p>
    <?php 
      if ( have_posts() ) {
        while ( have_posts() ) {
            the_post();
            include(locate_template('partials/post-preview.php'));
        }
      }
    ?>
  </div>
</div>
<?php get_footer(); ?>
