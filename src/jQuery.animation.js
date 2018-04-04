(function($) {
	
	$.fn.extend({
		animation: function(opt) {
			
			var defaults = {
				
				//动画名称
				name: '',
				
				//动画持续时间
				time: '1.5s'
				
			}
			
			var options = $.extend(defaults , opt),
				str = 'bounce,flash,pulse,rubberBand,shake,swing,tada,wobble,flip,hinge',
				str1 = 'bounceIn,bounceInDown,bounceInLeft,bounceInRight,bounceInUp,fadeIn,fadeInDown,fadeInDownBig,fadeInLeft,fadeInLeftBig,fadeInRight,fadeInRightBig,fadeInUp,fadeInUpBig,flipInX,flipInY,lightSpeedIn,rotateIn,rotateInDownLeft,rotateInDownRight,rotateInUpLeft,rotateInUpRight,slideInDown,slideInLeft,slideInRight,rollIn';
			
			return this.each(function() {
				var $this = $(this);
				$this.addClass('animated').css({
					"animation-duration": options.time
				});
				if(str.indexOf(options.name) > -1) {
					$this.hover(function() {
						$this.addClass(options.name);
					},function() {
						$this.removeClass(options.name);
					});				
				}else if(str1.indexOf(options.name) > -1) {
					var	$window = $(window),
						$document = $(document),
						windowH = $window.height(),
						bottomH = $document.height() - windowH,
						offsetH = $this.offset().top,
						viewH = offsetH - windowH * .7;
						
					viewH = (viewH > bottomH) ? bottomH : viewH;
					$this.css("visibility","hidden");
					if(windowH >= offsetH) {
						$this.css({
							"visibility": "visible"
						});
						$this.addClass(options.name);
					}else {
						$window.scroll(function() {
							if($window.scrollTop() >= viewH) {
								$this.css({
									"visibility": "visible"
								});
								$this.addClass(options.name);
							}
						})						
					}
				}
			});
		}
	});
	
})(jQuery);