<?php get_header(); ?>
<section class="banner banner--large">
  <div class="u-absolute-center"> 
    <h1 class="heading--primary">DavidHide.com</h1>
    <h2 class="heading--sub">Web Developer</h2>
  </div>
</section>
<section>
  <div class="container u-margin-top-large">
    <h2 class="heading--secondary">Recent Projects</h2>
    <a href="<?php echo site_url('/projects') ?>" class="link">View all projects &#x2192;</a>    
    <div class="row">
      <?php
        $homepageProjects = new WP_Query(array(
          'posts_per_page' => 2,
          'post_type' => 'project'
        ));

        while($homepageProjects->have_posts()) {
          $homepageProjects->the_post(); ?>
          <div class="col-1-of-2">
            <div class="u-margin-top-small">
              <h2 class="post__title"><a href="<?php the_permalink(); ?>" class="post__link"><?php the_title(); ?></a></h2>
              <h3 class="post__date"><?php the_date(); ?></h3>
              <p><?php echo wp_trim_words(get_the_content(), 60); ?> <a href="<?php the_permalink(); ?>" class="link">Continue reading &raquo;</a></p>
            </div>
          </div>
        <?php } wp_reset_postdata();
      ?>
    </div>
    <hr class="hr">
    <h2 class="heading--secondary">Recent Blog Posts</h2>
    <a href="<?php echo site_url('/blog') ?>" class="link">View all posts &#x2192;</a>    
    <div class="row">
      <?php
        $homepagePosts = new WP_Query(array(
          'posts_per_page' => 2
        ));

        while($homepagePosts->have_posts()) {
          $homepagePosts->the_post(); ?>
          <div class="col-1-of-2">
            <div class="u-margin-top-small">
              <h2 class="post__title"><a href="<?php the_permalink(); ?>" class="post__link"><?php the_title(); ?></a></h2>
              <h3 class="post__date"><?php the_date(); ?></h3>
              <p><?php echo wp_trim_words(get_the_content(), 60); ?> <a href="<?php the_permalink(); ?>" class="link">Continue reading &raquo;</a></p>
            </div>
          </div>
        <?php } wp_reset_postdata();
      ?>
    </div>
  </div>
</section>

<?php get_footer(); ?>