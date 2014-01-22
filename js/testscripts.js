$( window ).load(function() {
	$("span.glyphicon-book").fadeOut().fadeIn().fadeOut().fadeIn();
});

$(function() {
	$( "button" ).on('click', function() {
		$( this ).fadeOut().fadeIn();
		var $id = $( this ).attr('data-id');
		$( "#content" ).empty().load( $id +'.html', function() {
			$( "#content" ).hide().fadeIn();
		});
	});

});

