<?php get_header(); ?>
<section class="section-heading">
  <div class="u-absolute-center"> 
    <h1 class="heading--primary">DavidHide.com</h1>
    <h2 class="heading--sub">Web Developer</h2>
  </div>
</section>
<section class="section-blog-posts">
  <div class="container u-margin-top-large">
    <h2 class="heading--secondary">Recent Blog Posts</h2>    
    <?php
      $homepagePosts = new WP_Query(array(
        'posts_per_page' => 2
      ));

      while($homepagePosts->have_posts()) {
        $homepagePosts->the_post(); ?>
        <div class="u-margin-top-small">
          <h2 class="post__title"><a href="<?php the_permalink(); ?>" class="post__link"><?php the_title(); ?></a></h2>
          <h3 class="post__date"><?php the_date(); ?></h3>
          <p><?php echo wp_trim_words(get_the_content(), 100); ?> <a href="<?php the_permalink(); ?>" class="link">Continue reading &raquo;</a></p>
        </div>
      <?php } wp_reset_postdata();
    ?>
  </div>
</section>

<?php get_footer(); ?>