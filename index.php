<?php get_header(); ?>



<div id="open_menu" class="m_button">
    <span></span>
    <span></span>
    <span></span>
</div>

<div id="navigation" class="navigation">
    <div id="close_menu" class="m_close"></div>
    <div class="navigation__header">
        <img class="navigation__header__logo" src="<?php echo get_theme_mod('navbar_logo'); ?>" />
    </div>
    <div class="navigation__body">
        <?php get_template_part('template-parts/menu') ?>
    </div>
</div>

<div class="content">

    <?php while (have_posts()) {
        the_post();
        the_content();
    } ?>

</div>

<?php get_footer() ?>