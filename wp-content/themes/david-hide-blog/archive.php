<?php get_header(); ?>
<div class="container">
  <div class="u-margin-top-large">
    <h1><?php the_archive_title(); ?></h1>
    <h2><?php the_archive_description(); ?></h2>
    <?php 
      if ( have_posts() ) {
        while ( have_posts() ) {
            the_post(); ?>
            <h2 class="post__title u-margin-top-small"><a href="<?php the_permalink(); ?>" class="post__link"><?php the_title(); ?></a></h2>
            <h3 class="post__date"><?php the_date(); ?></h3> <a href="<?php echo site_url() ?>" class="back-btn">&#x2190; Back</a>
            <div class="u-margin-top-small">
              <?php the_content(); ?>
            </div>
        <?php }
      }
    ?>
  </div>
</div>
<?php get_footer(); ?>
