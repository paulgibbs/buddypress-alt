/**
 * Loads for BuddyPress Hello in wp-admin for query string `hello=buddypress`.
 *
 * @since 3.0.0
 */
(function() {
	/**
	 * Open the BuddyPress Hello modal.
	 */
	var bp_hello_open_modal = function() {
		var wrapper = document.getElementById('bp-hello-wrapper');
		wrapper.style.display = '';  // Show.
		wrapper.style.opacity = 1;   // Animation.
	};

	// Init Hello after the screen's loaded.
	if ( document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading" ) {
		bp_hello_open_modal();
	} else {
		document.addEventListener( 'DOMContentLoaded', bp_hello_open_modal );
	}
}());
