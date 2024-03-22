<?php wp_nav_menu(
    array(
        'theme_location' => 'headerMenuLocation',
        'depth' => 2,
        'container' => false,
        'link_before' => '<span class="progress-bar"></span><div class="inner">',
        'link_after' => '</div>',
        'menu_id' => "navbar",
        'menu_class' => 'navigation__body__items',
    )

);