import $ from 'jquery';

export default class Test {

	constructor () {
		console.log('test constructor');

		this.fn_thing = ::this.fn_thing;

		this.event_listeners();
	}

	event_listeners () {
		console.log("listening");
		$("body").on("click", () => {Test.fn_clicked()});
	}

	static fn_clicked () {
		console.log("hi there");
	}

	fn_thing () {
		return 1;
	}
}