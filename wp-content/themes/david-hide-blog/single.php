<?php get_header(); ?>
<div class="container">
  <div class="u-margin-top-medium">
    <div class="row">
      <div class="col-2-of-3">
        <?php 
          if ( have_posts() ) {
            while ( have_posts() ) {
                the_post();
                $id = get_the_ID();
                ?>
                <h1 class="post__title post__title--headline"><?php the_title(); ?></h1>
                <p class="post__date"><?php the_date(); ?></p> <a href="<?php echo esc_url(site_url()); ?>" class="link">&#x2190; Back</a>
                <div class="u-margin-top-small">
                  <?php echo get_the_post_thumbnail($id, 'medium_large', array( 'class' => 'post__image' )); ?>
                </div>
                <div class="u-margin-top-small">
                  <?php the_content(); ?>
                </div>
            <?php }
          }
        ?>
      </div>
      <div class="col-1-of-3">
        <?php include 'partials/sidebar.php'; ?>
      </div>
    </div>
    <div class="row container u-margin-top-large">
      <h2 class="heading--secondary">Recent Blog Posts</h2>
      <?php
        $homepagePosts = new WP_Query(array(
          'posts_per_page' => 2,
          'post__not_in' => array($id)
        ));

        include(locate_template('partials/recent-posts.php'));
      ?>
    </div>
  </div>
</div>
<?php get_footer(); ?>
