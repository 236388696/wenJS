function mouseWheel(obj,fn){
	evObj=obj||window.event;
	 var fff=window.navigator.userAgent.indexOf("Firefox");
             if(fff !=-1){
            obj.addEventListener("DOMMouseScroll",wheel,false);
            }else{
            	obj.onmousewheel=wheel;
            }
            function wheel(ev){
            	 var evObj=ev||window.event;
            	 var down=true;
            	 if(evObj.datail){
               	dowm=evObj.detail<0;
               }
            	 else{
               	dowm=evObj.wheelDelta>0;
               }
               //回调函数，把值回传给调用处
               fn(dowm,ev);
               
               //取消默认事件
               if(ev.preventDefault){
               	 ev.preventDefault();
               }
               return false;
            }
}
