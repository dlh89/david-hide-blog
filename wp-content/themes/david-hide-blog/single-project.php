<?php get_header(); ?>
<div class="container">
  <div class="u-margin-top-large">
    <div class="row">
      <div class="col-2-of-3">
      <h2 class="post__title"><a href="<?php the_permalink(); ?>" class="post__link"><?php the_title(); ?></a></h2>
        <a href="<?php the_field('project_link') ?>" target="_blank"><?php the_field('project_link') ?></a>
        <h3 class="post__date"><?php the_date(); ?></h3> <a href="<?php echo esc_url(site_url()); ?>" class="link">&#x2190; Back</a>
        <div class="project-panel row u-margin-top-medium">
          <div class="col-2-of-3 u-margin-top-small u-padding-bottom-small">
              <h2 class="project-panel__title">What is it?</h2>
              <div class="u-margin-top-tiny">
                <?php $description = get_field('description');
                if ($description) {
                  echo '<p>' . $description . '</p>';
                } ?>
              </div>
          </div>
          <div class="col-1-of-3 u-margin-top-small u-padding-bottom-small">
            <?php 
              $technologies = get_field('technology');
              if ($technologies) {
                ?>
                <div class="technologies">
                  <h2 class="project-panel__title">Technologies</h2>
                  <div class="u-margin-top-tiny">
                    <?php
                    foreach($technologies as $technology) { ?>
                      <ul class="technologies__list">
                        <li class="technologies__item">&raquo;<?php echo $technology; ?></li>
                      </ul>
                      <?php
                      } ?>
                    </div>
                  </div>
                <?php }?>
          </div>
        </div>
        <div class="u-margin-top-small">
          <?php echo get_the_post_thumbnail(get_the_id(), 'medium_large', array( 'class' => 'post__image' )); ?>
        </div>
        <div class="u-margin-top-small">
          <?php 
            the_post(); 
            the_content();
          ?>
        </div>
      </div>
      <div class="col-1-of-3">
        <div class="sidebar">
        <h3 class="sidebar__heading">Blog Archive</h3>
          <?php 
          $args = array(
          'numberposts' => 5,
          'category' => 0, 
          'orderby' => 'date',
          'order' => 'DESC', 
          'include' => array(),
          'exclude' => array(get_the_ID()), 
          'meta_key' => '',
          'meta_value' =>'', 
          'post_type' => 'post',
          'suppress_filters' => true
          );
          $posts = get_posts($args);
          $post_months = array();
          foreach ($posts as $post) {
            $year = date('Y', strtotime($post->post_date));
            $month = date('F', strtotime($post->post_date));
            $title = $post->post_title;
            $link = get_permalink($post->ID);
            $post_meta = array(
              'title' => $title,
              'link' => $link
            );

            if (!array_key_exists($year, $post_months)) {
              // add key for the year
              $post_months[$year] = array();
            }
            if (!array_key_exists($month, $post_months[$year])) {
              // add key for the month
              $post_months[$year][$month] = array();
            } 
            // add post to relevant year and month array
            array_push($post_months[$year][$month], $post_meta);
          }

          foreach ($post_months as $post_year => $post_month) {
            echo '<h3 class="sidebar__subheading">' . $post_year . '</h3>';
            foreach ($post_month as $month => $month_post) {
              echo '<h3 class="sidebar__subheading">' . $month . '</h3>';
              echo '<div>';
              echo '<ul class="sidebar__list">';
              foreach ($month_post as $post => $post_meta) {
                ?>
                  <li><a href="<?php echo $post_meta['link']; ?>" class="sidebar__link"><?php echo $post_meta['title'];  ?></a></li>
                <?php
              }
              echo '</ul>';
              echo '</div>';
            }
          }
          ?>
          <h3 class="sidebar__heading">Project Archive</h3>
          <?php 
          $args = array(
          'numberposts' => 5,
          'category' => 0, 
          'orderby' => 'date',
          'order' => 'DESC', 
          'include' => array(),
          'exclude' => array(get_the_ID()), 
          'meta_key' => '',
          'meta_value' =>'', 
          'post_type' => 'project',
          'suppress_filters' => true
          );
          $posts = get_posts($args);
          $post_months = array();
          foreach ($posts as $post) {
            $year = date('Y', strtotime($post->post_date));
            $month = date('F', strtotime($post->post_date));
            $title = $post->post_title;
            $link = get_permalink($post->ID);
            $post_meta = array(
              'title' => $title,
              'link' => $link
            );

            if (!array_key_exists($year, $post_months)) {
              // add key for the year
              $post_months[$year] = array();
            }
            if (!array_key_exists($month, $post_months[$year])) {
              // add key for the month
              $post_months[$year][$month] = array();
            } 
            // add post to relevant year and month array
            array_push($post_months[$year][$month], $post_meta);
          }

          foreach ($post_months as $post_year => $post_month) {
            echo '<h3 class="sidebar__subheading">' . $post_year . '</h3>';
            foreach ($post_month as $month => $month_post) {
              echo '<h3 class="sidebar__subheading">' . $month . '</h3>';
              echo '<div>';
              echo '<ul class="sidebar__list">';
              foreach ($month_post as $post => $post_meta) {
                ?>
                  <li><a href="<?php echo $post_meta['link']; ?>" class="sidebar__link"><?php echo $post_meta['title'];  ?></a></li>
                <?php
              }
              echo '</ul>';
              echo '</div>';
            }
          }
          ?>
          <h3 class="sidebar__heading">Follow</h3>
          <ul class="sidebar__list">
            <li><a href="https://github.com/dlh89" rel="noopener" target="_blank" class="sidebar__link">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/david-hide-b2633b168/" rel="noopener" target="_blank" class="sidebar__link">LinkedIn</a></li>
            <li><a href="https://twitter.com/undanator" rel="noopener" target="_blank" class="sidebar__link">Twitter</a></li>
            <li><a href="https://codepen.io/dlh89/" rel="noopener" target="_blank" class="sidebar__link">CodePen</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<?php get_footer(); ?>
