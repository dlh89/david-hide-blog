<?php
/*
Template Name: Search Page
*/
?>

<?php get_header(); ?>
<section class="banner">
  <h1 class="u-absolute-center">Search Results</h1>
</section>
<section>
  <div class="container u-margin-top-large">
      <?php
        if(!have_posts()) { ?>
          <p class="heading__secondary">No results found for &ldquo;<?php echo esc_html(get_search_query(false)); ?>&rdquo;.</p>
          <div class="u-margin-top-small">
            <?php get_search_form(); ?>
          </div>
        <?php } else {
          ?>
          <p class="heading__secondary">Showing search results for &ldquo;<?php echo esc_html(get_search_query(false)); ?>&rdquo;</p>
          <?php
          while(have_posts()) {
            the_post();
            include(locate_template('partials/post-preview.php'));
          }    
          echo paginate_links();
        }
      ?>
    </div>
  </div>
</section>

<?php get_footer(); ?>
