

jQuery(function($){
	function post_state(id, t, l){
		console.log( id + " : " + t + " : " + l );
		$.post('/update/' + id,
			{
				'x': l,
				'y': t
			},
			function(r){
				console.log(r);
				$other = $('.other');
				$other.css('top', parseInt(r.y) + "px");
				$other.css('left', parseInt(r.x) + "px");
			}
		)
	}

	var ARROW_UP = 38;
	var ARROW_DOWN = 40;
	var ARROW_LEFT = 37;
	var ARROW_RIGHT = 39;
	var SPEED = 5;
	$('body').keydown(function(e){
		var $me = $('.me');
		var id = $me.children("span").html();
		var t = parseInt($me.css('top').replace("px",""));
		var l = parseInt($me.css('left').replace("px",""));
		var key = e.keyCode;

		if( key == ARROW_UP ){
			$me.css("top", t - SPEED + "px");
			console.log("UP");
		} else if( key == ARROW_DOWN ){
			$me.css('top', t + SPEED + 'px');
			console.log("DOWN");
		} else if( key == ARROW_LEFT ){
			$me.css('left', l - SPEED + 'px');
			console.log("LEFT");
		} else if( key == ARROW_RIGHT ){
			$me.css('left', l + SPEED + 'px');
			console.log("RIGHT");
		}
		post_state(id, parseInt($me.css('top').replace("px","")), parseInt($me.css('left').replace("px","")));
	});
});
