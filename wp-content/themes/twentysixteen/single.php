<?php get_header(); ?>

<main>
	<section class="section single-page">
		<article>

		<?php
			while ( have_posts() ) : the_post();

				echo '<h1>';
					the_title();
				echo '</h1>';

				the_content();

			endwhile;
		?>

		</article>
	</section>
</main>

<?php get_footer(); ?>
