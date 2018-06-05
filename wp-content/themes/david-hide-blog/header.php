<!DOCTYPE html>
<html <?php language_attributes(); ?>>

  <head>
      <meta charset="<?php bloginfo('charset'); ?>">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
    <main>
      <nav class="nav">
        <button class="nav__toggle-button"><div class="nav__burger"></div></button>        
        <ul class="nav__list">
          <div class="nav__container">
            <li class="nav__item"><a href="<?php echo site_url() ?>" class="nav__link <?php if (is_front_page()) echo 'nav__link--active' ?>">Home</a></li>
            <li class="nav__item"><a href="<?php echo site_url('/projects') ?>" class="nav__link <?php if (is_archive('project') || is_singular('project')) echo 'nav__link--active' ?>">Projects</a></li>                                                                    
            <li class="nav__item"><a href="<?php echo site_url('/blog') ?>" class="nav__link <?php if (is_home() || is_singular('post')) echo 'nav__link--active' ?>">Blog</a></li>
            <li class="nav__item"><a href="<?php echo site_url('/about') ?>" class="nav__link <?php if (is_page('about')) echo 'nav__link--active' ?>">About</a></li>
            <li class="nav__item"><a href="<?php echo site_url('/contact') ?>" class="nav__link <?php if (is_page('contact')) echo 'nav__link--active' ?>">Contact</a></li>
          </div>
        </ul>
      </nav>
    </main>