<?php

	$args = array(
		'post_type' => 'post'
	);

	query_posts($args);
?>
<section class="posts section">
	<div class="container">
		<div class="row">

			<?php
				// check if the repeater field has rows of data
				if (have_rows('home_blog_repeater')):

					// loop through the rows of data
					while (have_rows('home_blog_repeater')) : the_row();

						$postobject = get_sub_field('home_blog_repeater_post');
						$postTags = wp_get_post_tags($postobject->ID);
//						echo '<pre>';
//						var_dump($postobject);
//						var_dump($postTags);
//						echo '</pre>';

						echo '<div class="col-sm-4">';
						echo get_blogcard($postobject, $postTags);
						echo '</div>';

					endwhile;

				else :

					// no rows found

				endif;

			?>
		</div>
	</div>
</section>
