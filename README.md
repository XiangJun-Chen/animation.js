# animation.js
//引入样式文件
<link rel="stylesheet" type="text/css" href="css/animate.min.css"/>

//引入 js 文件
<script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="js/jQuery.animation.js"></script>

//html
<div class="test"></div>

//js
$(window).load(function() {
	$(".test").animation({
		name: '',        //动画名称
		time: ''         //动画持续时间
});
});
除了“bounce , flash , pulse , rubberBand , shake , swing , tada , wobble , flip , hinge”这几种动画是鼠标悬浮执行外，其余如“bounceIn , fadeIn , rollIn , slideInLeft”等都是屏幕滚动到指定位置执行。之所以使用 “$(window).load” 是为了避免因为图片等外部资源的加载问题对高度计算的影响，同理，也要等其他改变文档高度的 js 执行完毕之后再执行添加动画的操作。
