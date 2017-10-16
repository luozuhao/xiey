$.fn.extend({
	mousewheel:function (Fn) {
		if (window.navigator.userAgent.indexOf("Firefox")>-1) {
			$(this).get(0).addEventListener("DOMMouseScroll",wheel,false)
		}else{
			$(this).get(0).onmousewheel = wheel;
		}

		function wheel (e) {
			var down = false;
			if (e.detail) {		
				down = e.detail>0;
			}else{		
				down = e.wheelDelta<0;
			}
			// Fn(down,e)
			Fn.call($(this).get(0),down,e)
			// Fn.apply(obj,[down])
			if (e.preventDefault) {
				e.preventDefault();
			};			
			return false;			
		}
	}
})