/**
 * @name MenuModule
 * @author Joe Lloyd
 * @class
 *
 * @classdesc
 * class that controls the mobile/tablet menu
 *
 * @example
 * <div class="burger-wrap" data-menu-button-status="open">
 * 	<div class="burger-menu burger-menu-top"></div>
 * 	<div class="burger-menu burger-menu-middle"></div>
 * 	<div class="burger-menu burger-menu-bottom"></div>
 * </div>
 * <nav id="mobile-site-navigation" data-menu-status="open" class="mobile-navigation" role="navigation" aria-label="Primary Menu"></nav>
 *
 */
export default class MenuModule {


	constructor () {

		this.burgerWrap = document.querySelector("[data-menu-button-status]");
		this.mobileMenu = document.querySelector("[data-menu-status]");

		this.add_event_listeners();
	}

	/**
	 * @memberOf MenuModule
	 * @access public
	 *
	 * @description
	 * watch for click events
	 *
	 */
	add_event_listeners () {
		this.burgerWrap.addEventListener("click", (event) => { this.change_menu_state(event); });
		this.burgerWrap.addEventListener("touchend", (event) => { this.change_menu_state(event); });
	}

	/**
	 * @memberOf MenuModule
	 * @access public
	 *
	 * @description
	 * toggles the state of the menu status  (open or closed)
	 *
	 */
	change_menu_state () {
		let initState = this.burgerWrap.dataset.menuButtonStatus;
		this.burgerWrap.dataset.menuButtonStatus = initState === "closed" || initState === "init" ? "open" : "closed";
		this.mobileMenu.dataset.menuStatus = this.burgerWrap.dataset.menuButtonStatus === "open" ? "open" : "closed"
	}
}