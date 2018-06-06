<?php get_header(); ?>
<div class="container">
  <div class="u-margin-top-large">
    <?php 
      if ( have_posts() ) {
        while ( have_posts() ) {
            the_post(); ?>
            <h2 class="post__title"><a href="<?php the_permalink(); ?>" class="post__link"><?php the_title(); ?></a></h2>
            <a href="<?php the_field('project_link') ?>"><?php the_field('project_link') ?></a>
            <h3 class="post__date"><?php the_date(); ?></h3> <a href="<?php echo site_url() ?>" class="link">&#x2190; Back</a>
            <div class="u-margin-top-small">
              <?php the_content(); ?>
            </div>
        <?php }
      }
    ?>
  </div>
</div>
<?php get_footer(); ?>
