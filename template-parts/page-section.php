<?php
$title = strtolower(get_the_title());
$id = str_replace(" ", "-", $title);
?>

<section id="<?php echo $id; ?>">
    <div class="page">
        <?php the_content(); ?>
    </div>
</section>