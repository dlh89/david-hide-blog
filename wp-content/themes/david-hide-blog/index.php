<?php get_header(); ?>
<section class="section-heading">
  <h1 class="u-absolute-center">David Hide Web Development Blog</h1>
</section>
<section class="section-blog-posts">
  <div class="container u-margin-top-large">
    <?php
      while(have_posts()) {
        the_post(); ?>
        <div class="u-margin-top-small">
          <h2 class="post__title"><a href="<?php the_permalink(); ?>" class="post__link"><?php the_title(); ?></a></h2>
          <h3 class="post__date"><?php the_date(); ?></h3>
          <p><?php the_excerpt(); ?></p>
        </div>
      <?php }    
    ?>
  </div>
</section>

<?php get_footer(); ?>