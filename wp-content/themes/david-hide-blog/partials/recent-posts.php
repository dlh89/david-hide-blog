<?php
if( !defined( 'ABSPATH' ) ) { exit; }

while($homepagePosts->have_posts()) {
  $homepagePosts->the_post(); ?>
  <div class="col-1-of-2">
    <div class="u-margin-top-small">
      <a href="<?php the_permalink(); ?>" class="post__link">
        <?php echo get_the_post_thumbnail(get_the_id(), 'customThumbnail', array( 'class' => 'post__thumbnail' )); ?><br>
        <h3 class="post__title">
          <?php the_title(); ?>
        </h3>
      </a>
      <p class="post__date"><?php the_date(); ?></p>
      <p><?php if (has_excerpt()) {
        echo get_the_excerpt();
      } else {
        echo wp_trim_words(get_the_content(), 60); 
      }?> <a href="<?php the_permalink(); ?>" class="link">Continue reading &raquo;</a></p>
    </div>
  </div>
<?php } wp_reset_postdata();