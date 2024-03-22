<?php

// Exit if accessed directly
if (!defined('ABSPATH'))
    exit;

// Main switch to get frontend assets from a Vite dev server OR from production built folder
// it is recommended to move it into wp-config.php
define('IS_VITE_DEVELOPMENT', true);

// Include needed functions
include "inc/inc.js.php";
include "inc/login-screen.php";
include "inc/navbar.php";
include "inc/sidebars.php";
include "inc/group-block-style.php";
include "inc/image-block-style.php";


function theme_features()
{

    add_theme_support('woocommerce');
    add_theme_support('wp-block-styles');

    register_nav_menu('headerMenuLocation', 'Header Menu Location');

    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_post_type_support('post', 'page-attributes');
};


add_action('after_setup_theme', 'theme_features');
