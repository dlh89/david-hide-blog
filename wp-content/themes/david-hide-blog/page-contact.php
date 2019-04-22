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
                <br>
                <ul class="footer__list">
                  <li>
                    <a href="https://github.com/dlh89" rel="noopener" target="_blank" class="link">
                      <svg class="icon"><use xlink:href="<?php echo get_template_directory_uri() ?>/dist/images/symbol-defs.svg#icon-github"></use></svg>
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/david-hide-b2633b168/" rel="noopener" target="_blank" class="link">
                    <svg class="icon"><use xlink:href="<?php echo get_template_directory_uri() ?>/dist/images/symbol-defs.svg#icon-linkedin-square"></use></svg>
                    LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/undanator" rel="noopener" target="_blank" class="link">
                      <svg class="icon"><use xlink:href="<?php echo get_template_directory_uri() ?>/dist/images/symbol-defs.svg#icon-twitter"></use></svg>
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="https://codepen.io/dlh89/" rel="noopener" target="_blank" class="link">
                      <svg class="icon"><use xlink:href="<?php echo get_template_directory_uri() ?>/dist/images/symbol-defs.svg#icon-codepen"></use></svg>
                      CodePen
                    </a>
                  </li>
                </ul>
              </div>
            </section>
        <?php }
      }
    ?>
<?php get_footer(); ?>
