<?php get_header(); ?>
    <?php 
      if ( have_posts() ) {
        while ( have_posts() ) {
            the_post(); ?>
            <section class="banner">
              <h1 class="u-absolute-center"><?php the_title(); ?></h1>
            </section>
            <section class="section-main">
              <div class="container u-margin-top-large">
                <?php the_content(); ?>
              </div>
            </section>
        <?php }
      }
    ?>
<?php get_footer(); ?>
