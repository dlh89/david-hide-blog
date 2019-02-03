<?php get_header(); ?>
<div class="container">
  <div class="u-margin-top-medium">
    <div class="row">
      <div class="col-2-of-3">
      <h1 class="post__title"><a href="<?php the_permalink(); ?>" class="post__link"><?php the_title(); ?></a></h1>
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
        <?php include 'partials/sidebar.php'; ?>
      </div>
    </div>
  </div>
</div>
<?php get_footer(); ?>
