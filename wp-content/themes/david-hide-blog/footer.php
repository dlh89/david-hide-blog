  <footer class="footer">
    <div class="container">
      <div class="footer__container">
        <div class="footer__column">
          <ul class="footer__list">
          <p class="footer__heading">Navigate</p>
            <li><a href="<?php echo esc_url(site_url()); ?>" class="link">Home</a></li>          
            <li><a href="<?php echo esc_url(site_url('blog')); ?>" class="link">Blog</a></li>
            <li><a href="<?php echo esc_url(site_url('about')); ?>" class="link">About</a></li>
            <li><a href="<?php echo esc_url(site_url('contact')); ?>" class="link">Contact</a></li>
          </ul>
        </div>
        <div class="footer__column">
          <ul class="footer__list">
          <p class="footer__heading">Visit</p>
            <li><a href="https://www.portfolio.davidhide.com" target="_blank" class="link">Web Portfolio</a></li>
          </ul>
        </div>
        <div class="footer__column">
          <ul class="footer__list">
          <p class="footer__heading">Follow</p>
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
              <a href="https://codepen.io/dlh89/" rel="noopener" target="_blank" class="link">
                <svg class="icon"><use xlink:href="<?php echo get_template_directory_uri() ?>/dist/images/symbol-defs.svg#icon-codepen"></use></svg>
                CodePen
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="u-margin-top-tiny">
        <hr class="u-hr">
        <p class="u-margin-top-tiny">&#169;<?php echo date('Y'); ?> David Hide</p>
      </div>
    </div>
  </footer>
  <?php wp_footer(); ?>
  </body>
</html>