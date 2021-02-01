(function(doc,win){
			var docEl = doc.documentElement,resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
			recalc = function(){
				var clientWidth = docEl.clientWidth;
				if(!clientWidth) return;
				if(clientWidth>=640){
					docEl.style.fontSize = '100px'; //1rem  = 100px
					// document.documentElement.style.fontSize = "100px" 相当于根节点的字体大小
				}
				else{
					docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
					console.log(docEl.style.fontSize);
				}
			};
			if (!doc.addEventListener) return;
	        win.addEventListener(resizeEvt, recalc, false);
	        doc.addEventListener('DOMContentLoaded', recalc, false);
})(document,window);
  // 6.4rem 
// 100* 页面比例
// 匿名函数的调用： 
// ()()
// 1. 函数的调用：a) 
 //获取屏幕的宽度