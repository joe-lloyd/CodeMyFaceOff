<?php
	$field = get_fields($post_id);
?>

<section class="about section">

	<figure>
		<img src="<?php echo $field['home_about_image']['sizes']['medium']; ?>" alt="">
	</figure>

	<h1><?php echo $field['home_about_title']; ?></h1>
	<span><?php echo $field['home_about_sub_title']; ?></span>

	<?php echo $field['home_about_description']; ?>

</section>