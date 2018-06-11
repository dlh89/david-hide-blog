  <footer class="footer">
    <div class="container">
      <div class="footer__container">
        <div>
          <ul class="footer__list">
          <h4 class="footer_heading">Navigate</h4>
            <li><a href="<?php echo site_url() ?>" class="link">Home</a></li>          
            <li><a href="<?php echo site_url('blog') ?>" class="link">Blog</a></li>
            <li><a href="<?php echo site_url('about') ?>" class="link">About</a></li>
            <li><a href="<?php echo site_url('contact') ?>" class="link">Contact</a></li>
          </ul>
        </div>
        <div>
          <ul class="footer__list">
          <h4 class="footer_heading">Visit</h4>
            <li><a href="http://www.davidhide.com" target="_blank" class="link">Web Portfolio</a></li>
          </ul>
        </div>
        <div>
          <ul class="footer__list">
          <h4 class="footer_heading">Follow</h4>
            <li><a href="https://twitter.com/undanator" target="_blank" class="link">Twitter</a></li>
            <li><a href="https://github.com/dlh89" target="_blank" class="link">GitHub</a></li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
      <div class="u-margin-top-tiny">
        <hr class="u-hr">
        <p class="u-margin-top-tiny">&#169;2018 David Hide</p>
      </div>
    </div>
  </footer>
  <?php wp_footer(); ?>  
  </body>
</html>