<?php

	/**
	 * A function to build and return a blog card
	 *
	 * @return string - html elemt for a blog card
	 */
	function get_blogcard ($a_post, $a_tags) {
		$s_blogcardhtml = '';

		$s_blogcardhtml .= '<div class="blogcard">';
		$s_blogcardhtml .= '<figure>';
		$s_blogcardhtml .= get_the_post_thumbnail($a_post->ID, 'blogcard');
		$s_blogcardhtml .= '</figure>';
		$s_blogcardhtml .= '<article>';
		$s_blogcardhtml .= '<h2>' . $a_post->post_title . '</h2>';
		$s_blogcardhtml .= '</article>';
		$s_blogcardhtml .= '</div>';

		return $s_blogcardhtml;
	}