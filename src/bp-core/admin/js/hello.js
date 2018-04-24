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
		document.body.classList.add( 'bp-no-scroll' );

		// Show.
		document.getElementById( 'bp-hello-backdrop' ).style.display  = '';
		document.getElementById( 'bp-hello-container' ).style.display = '';
	};

	// Close modal if "X" or background is touched.
	document.addEventListener( 'click', function( event ) {
		var backdrop = document.getElementById( 'bp-hello-backdrop' ),
			modal = document.getElementById( 'bp-hello-container' );

		if ( ! backdrop || ! modal ) {
			return;
		}

		var backdrop_click = backdrop.contains( event.target ),
			modal_click    = modal.contains( event.target ),
			modal_close    = event.target.classList.contains( 'close-modal' );

		if ( modal_close || backdrop_click || ! modal_click ) {
			document.body.classList.remove( 'bp-no-scroll' );
			modal.parentNode.removeChild( modal );
			backdrop.parentNode.removeChild( backdrop );
			window.history.pushState( {}, '', document.location.href.split( '?' )[0] );
		}
	}, false );

	// Close modal if escape key is presssed.
	document.addEventListener( 'keyup', function( event ) {
		if ( event.keyCode === 27 ) {
			var backdrop = document.getElementById( 'bp-hello-backdrop' ),
				modal    = document.getElementById( 'bp-hello-container' );

			if ( ! backdrop || ! modal ) {
				return;
			}

			document.body.classList.remove( 'bp-no-scroll' );
			modal.parentNode.removeChild( modal );
			backdrop.parentNode.removeChild( backdrop );
			window.history.pushState( {}, '', document.location.href.split( '?' )[0] );
		}
	}, false );

	// Init modal after the screen's loaded.
	if ( document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading' ) {
		bp_hello_open_modal();
	} else {
		document.addEventListener( 'DOMContentLoaded', bp_hello_open_modal );
	}
}());
