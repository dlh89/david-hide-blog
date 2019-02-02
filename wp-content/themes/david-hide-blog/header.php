<!DOCTYPE html>
<html <?php language_attributes(); ?>>

  <head>
      <meta charset="<?php bloginfo('charset'); ?>">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.ico" />

      <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
    <main>
      <nav role="navigation" class="nav">
        <button class="nav__toggle-button"><div class="nav__burger"></div></button>        
        <ul class="nav__list">
          <div class="nav__container">
            <li class="nav__item"><a href="<?php echo esc_url(site_url()); ?>" class="nav__link <?php if (is_front_page()) echo 'nav__link--active' ?>">Home</a></li>
            <li class="nav__item"><a href="<?php echo esc_url(site_url('/blog')); ?>" class="nav__link <?php if (is_home() || is_singular('post')) echo 'nav__link--active' ?>">Blog</a></li>
            <li class="nav__item"><a href="<?php echo esc_url(site_url('/projects')); ?>" class="nav__link <?php if (is_archive('project') || is_singular('project')) echo 'nav__link--active' ?>">Projects</a></li>                                                                    
            <li class="nav__item"><a href="<?php echo esc_url(site_url('/about')); ?>" class="nav__link <?php if (is_page('about')) echo 'nav__link--active' ?>">About</a></li>
            <li class="nav__item"><a href="<?php echo esc_url(site_url('/contact')); ?>" class="nav__link <?php if (is_page('contact')) echo 'nav__link--active' ?>">Contact</a></li>
            <!-- <?php if (is_user_logged_in()) { ?>
              <li class="nav__item"><a href="<?php echo wp_logout_url(); ?>" class="nav__link">Log Out</a></li>
            <?php } else { ?>
              <li class="nav__item"><a href="<?php echo wp_login_url(); ?>" class="nav__link <?php if (is_page('contact')) echo 'nav__link--active' ?>">Log In</a></li>
              <li class="nav__item"><a href="<?php echo wp_registration_url(); ?>" class="nav__link <?php if (is_page('contact')) echo 'nav__link--active' ?>">Sign Up</a></li>
            <?php }?>             -->
            <li class="nav__item nav__item--search">
              <a href="<?php echo esc_url(site_url('/search')); ?>" class="nav__search-button" id="searchButton">
                <svg class="icon icon--search"><use xlink:href="<?php echo get_template_directory_uri() ?>/dist/images/sprite.svg#icon-search"></use></svg>
              </a>
            </li>
          </div>
        </ul>
      </nav>
      <div class="search-bar" role="search">
        <div class="nav__container">
          <input type="text" class="search-bar__input" placeholder="Enter a search term" aria-hidden="true" aria-label="Search through site content" tabindex="-1">
          <div class="search-bar__results" aria-live="assertive"></div>
        </div>
      </div>
    </main>