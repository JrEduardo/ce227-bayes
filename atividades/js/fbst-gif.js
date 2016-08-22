(function($) {
    $(document).ready(function() {
	
	$('#fbst-gif').scianimator({
	    'images': ['fbst-gif/fbst-gif1.png', 'fbst-gif/fbst-gif2.png', 'fbst-gif/fbst-gif3.png', 'fbst-gif/fbst-gif4.png', 'fbst-gif/fbst-gif5.png'],
	    'width': 700,
	    'delay': 800,
	    'loopMode': 'loop'
	});
	$('#fbst-gif').scianimator('play');
    });
})(jQuery);
