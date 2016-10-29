import MenuModule from "./modules/menu-module";

/**
 * @description
 * loads modules based on the availability of the elements
 *
 */
document.addEventListener("DOMContentLoaded", () => {
	new MenuModule();
});
