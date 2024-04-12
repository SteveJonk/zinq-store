<?php

// Exit if accessed directly
if (!defined('ABSPATH'))
    exit;

// Main switch to get frontend assets from a Vite dev server OR from production built folder
// it is recommended to move it into wp-config.php
define('IS_VITE_DEVELOPMENT', false);

// Include needed functions
require_once "inc/inc.vite.php";
require_once "inc/login-screen.php";
require_once "inc/navbar.php";
require_once "inc/sidebars.php";
require_once "inc/group-block-style.php";
require_once "inc/image-block-style.php";
require_once "inc/woocommerce/product-list-page.php";
require_once "inc/woocommerce/product-detail-page.php";


function theme_features()
{

    add_theme_support('woocommerce');
    add_theme_support('wp-block-styles');
    add_theme_support('align-wide');
    add_theme_support('block-template-parts');

    register_nav_menu('headerMenuLocation', 'Header Menu Location');

    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_post_type_support('post', 'page-attributes');
};

add_action('after_setup_theme', 'theme_features');
