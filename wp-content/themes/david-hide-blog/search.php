<?php get_header(); ?>
<section class="banner">
  <h1 class="u-absolute-center">Search Results</h1>
</section>
<section>
  <div class="container u-margin-top-large">
      <?php
        if(!have_posts()) { ?>
          <h2 class="heading__secondary">No results found for &ldquo;<?php echo esc_html(get_search_query(false)); ?>&rdquo;.</h2>
          <div class="u-margin-top-small">
            <?php get_search_form(); ?>
          </div>
        <?php } else {
          while(have_posts()) {
            the_post(); ?>
            <h2 class="heading__secondary">Showing search results for &ldquo;<?php echo esc_html(get_search_query(false)); ?>&rdquo;</h2>
            <div class="u-margin-top-small">
              <h2 class="post__title">
                <a href="<?php the_permalink(); ?>" class="post__link">
                  <?php echo get_the_post_thumbnail(get_the_id(), 'customThumbnail', array( 'class' => 'post__thumbnail' )); ?><br>
                  <?php the_title(); ?>
                </a>
              </h2>
              <h3 class="post__date"><?php the_date(); ?></h3>
              <p><?php echo wp_trim_words(get_the_content(), 100); ?> <a href="<?php the_permalink(); ?>" class="link">Continue reading &raquo;</a></p>
              <hr class="u-hr">
            </div>
          <?php }    
          echo paginate_links();
        }
      ?>
    </div>
  </div>
</section>

<?php get_footer(); ?>
