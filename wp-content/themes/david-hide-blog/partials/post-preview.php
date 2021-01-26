<?php
if( !defined( 'ABSPATH' ) ) { exit; }

?>

<div>
    <a href="<?php the_permalink(); ?>" class="post__link">
        <?php echo get_the_post_thumbnail(get_the_id(), 'customThumbnail', array( 'class' => 'post__thumbnail' )); ?><br>
        <h2 class="post__title">
        <?php the_title(); ?>
        </h2>
    </a>
    <p class="post__date"><?php the_date(); ?></p>
    <p><?php if (has_excerpt()) {
        echo get_the_excerpt();
        } else {
        echo wp_trim_words(get_the_content(), 100); 
        }?> <a href="<?php the_permalink(); ?>" class="link">Continue reading &raquo;</a></p>
    <?php
    // display a hr if if it isn't the last post
    if ($wp_query->current_post != $wp_query->post_count-1) {
        ?> <hr class="u-hr">
    <?php 
    } 
    ?>
</div>