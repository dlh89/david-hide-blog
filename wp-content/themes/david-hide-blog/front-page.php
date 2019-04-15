<?php get_header(); ?>
<section class="banner banner--large">
  <div class="u-absolute-center"> 
    <h1 class="heading--primary">DavidHide.com</h1>
    <h2 class="heading--sub">Full-Stack Web Development</h2>
  </div>
</section>
<section>
  <div class="container u-margin-top-large">
  <h2 class="heading--secondary">Recent Blog Posts</h2>
    <a href="<?php echo esc_url(site_url('/blog')); ?>" class="link">View all posts &#x2192;</a>    
    <div class="row">
      <?php
        $homepagePosts = new WP_Query(array(
          'posts_per_page' => 2
        ));

        include(locate_template('partials/recent-posts.php'));
      ?>
    </div>
    <hr class="u-hr">
    <h2 class="heading--secondary">Recent Projects</h2>
    <a href="<?php echo esc_url(site_url('/projects')); ?>" class="link">View all projects &#x2192;</a>    
    <div class="row">
      <?php
        $homepagePosts = new WP_Query(array(
          'posts_per_page' => 2,
          'post_type' => 'project'
        ));

        include(locate_template('partials/recent-posts.php'));
      ?>
    </div>
  </div>
</section>

<?php get_footer(); ?>