$.fn.extend({
	"fang":function(){
		var link=$('<link rel="stylesheet" type="text/css" href="css/fang.css"/>');
		//向head里添加link标签，引入css文件
		$("head").eq(0).append(link);
		//创建结构
		var el=$('<div id="minWrap">'+
			'<img src="'+$(this).attr("src")+'" alt="">'+
			'<div id="slider"></div>'+
		'</div>'+
		'<div id="maxWrap">'+
			'<img src="'+$(this).attr("src")+'" alt="">'+
		'</div>');
		$(this).after(el);
		$(this).remove();
		//创建功能
		$("#minWrap").mousemove(function(ev){
					$("#maxWrap").show();
					$("#slider").show();
					
					var x = ev.clientX - $("#slider").width() / 2 - $("#minWrap").offset().left;
					var y = ev.clientY - $("#slider").height() / 2 - $("#minWrap").offset().top;
					
					if(x <= 0){
						x = 0;
					} else if(x >= $("#minWrap").width() - $("#slider").width()){
						x = $("#minWrap").width() - $("#slider").width();
					}
					if(y <= 0){
						y = 0;
					} else if(y >= $("#minWrap").height() - $("#slider").height()){
						y = $("#minWrap").height() - $("#slider").height();
					}
					$("#slider").css({
						"top":y+"px",
						"left":x+"px"
					})
					
					var scaleX = x /  ($("#minWrap").width() - $("#slider").width());  
					var scaleY = y /  ($("#minWrap").height() - $("#slider").height());
					console.log(scaleX);
					$("#maxWrap img").css({
						"left":-scaleX * ($("#maxWrap img").width() - $("#maxWrap").width()) + "px",
						"top": -scaleY * ($("#maxWrap img").height() - $("#maxWrap").height()) + "px"
					})
				})
				$("#minWrap").mouseleave(function(){
					$("#maxWrap").hide();
					$("#slider").hide();
				})
		
	}
});