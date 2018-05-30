<?php get_header(); ?>
<h1>David Hide | Web Development Blog</h1>
<?php
  while(have_posts()) {
    the_post(); ?>
    <h2><a href="<?php the_permalink(); ?>"</h2><?php the_title(); ?></a></h2>
    <hr>
  <?php }
  
?>

<?php get_footer(); ?>