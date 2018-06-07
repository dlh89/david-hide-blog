<?php get_header(); ?>
<section class="banner">
  <h1 class="u-absolute-center">Blog</h1>
</section>
<section>
  <div class="container u-margin-top-large">
    <?php
      while(have_posts()) {
        the_post(); ?>
        <div>
          <h2 class="post__title"><a href="<?php the_permalink(); ?>" class="post__link"><?php the_title(); ?></a></h2>
          <h3 class="post__date"><?php the_date(); ?></h3>
          <p><?php echo wp_trim_words(get_the_content(), 100); ?> <a href="<?php the_permalink(); ?>" class="link">Continue reading &raquo;</a></p>
          <hr class="u-hr">
        </div>
      <?php }    
      echo paginate_links();
    ?>
  </div>
</section>

<?php get_footer(); ?>
