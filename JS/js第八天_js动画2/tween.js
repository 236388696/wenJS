<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>tween动画</title>
		<style>
			#div1{
				width: 100px;
				height: 100px;
				background-color: red;
				position: absolute;
				left:0;
				top:0;
			}
		</style>
	</head>
	<body>
		<div id="div1"></div>
		
		<script src="js/tween.js" type="text/javascript" charset="utf-8"></script>
	    <script type="text/javascript">
		var div1=document.getElementById("div1");
		
		//tween动画函数里主要有4个参数：t、b、c、d
//		1.t——time:当前时间
//		2.b——beginning value:初始的位置
//		3.c——change in value:变化量
//		4.d——duration:持续的时间（终点的时间）

        var t=0;
        var b=div1.offsetWidth;
        var c=300-b;
        var d=100;
        var timer=setInterval(function(){
        	 t++;
        	 if(t>=d){
        	 	clearInterval(timer);
        	 }else{
        	 div1.style.left=Tween.Back.easeInOut(t,b,c,d)+"px";
        	 }
        },10);
//      div1.style.left=Tween.Back.easeOut()
	</script>
	</body>
</html>
