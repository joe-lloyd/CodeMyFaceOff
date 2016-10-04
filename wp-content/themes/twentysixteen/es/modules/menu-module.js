/**
 * class that controlls the mobile/tablet menu
 */
export default class MenuModule {

	constructor () {

		this.burgerWrap = document.querySelector(".burger-wrap");

		this.add_event_listeners();
	}

	add_event_listeners () {
		this.burgerWrap.addEventListener("click", (event) => { this.change_menu_state(event); });
		this.burgerWrap.addEventListener("tap", (event) => { this.change_menu_state(event); });
	}

	/**
	 * toggles the state of the menu status  (open or closed)
	 */
	change_menu_state () {
		let initState = this.burgerWrap.dataset.status;
		this.burgerWrap.dataset.status = initState === "closed" || initState === "init" ? "open" : "closed";
	}
}