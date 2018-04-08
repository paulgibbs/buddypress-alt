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
		// Show.
		document.getElementById('bp-hello-backdrop').style.display = '';
		document.getElementById('bp-hello-container').style.display = '';
	};

	// Init Hello after the screen's loaded.
	if ( document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading" ) {
		bp_hello_open_modal();
	} else {
		document.addEventListener( 'DOMContentLoaded', bp_hello_open_modal );
	}
}());
