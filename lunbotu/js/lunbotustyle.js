// 当前图片标识
var dangqian_tubs = 1;
// 是否倒循环
var is_dao = 1;
// 最大图片数 
var tup_max = 5;
// 最小图片数
var tup_min = 1;
// 自动播放时间
var zd_time = 3000;
// 用户拖拽标识
var yh_tupz = 0;
// 
var time = 2000;

// 刷新图片标识
function shauxin_tubs(){
	$('.lunbotu input,.lunbotu input').each(function(){
        var val=$(this);
        if(val['context']['checked']==true){
        	dangqian_tubs = parseInt($(this).attr('data-is'));
        }else{
        }
    });

}

// 显示知道标识图片
function xianshi_tp_yc(bs){
	// console.log(is_dao+'|'+bs);
	$('.lunbotu input,.lunbotu input').each(function(){
        var val=$(this);
        var is_bs = $(this).attr('data-is');
        if(is_bs == bs){
        	val['context']['checked'] = true;
        }else{
        }
    });
}

// 自动播放方法
function zidongbuf(){
	if(is_dao == 1 ){
		dangqian_tubs = dangqian_tubs+1;
		if(dangqian_tubs == tup_max+1){
			is_dao = 2;
		}else{
			xianshi_tp_yc(dangqian_tubs);
		}
		
		
	}
	if(is_dao == 2){
		dangqian_tubs = dangqian_tubs-1;
		if(dangqian_tubs == 5){dangqian_tubs = dangqian_tubs-1;}
		if(dangqian_tubs == tup_min-1){
			is_dao = 1;
		}else{
			xianshi_tp_yc(dangqian_tubs);
		}
	}
}

// 调用自动播放
function diaoyon_zidbf(){
	if(zd_time == 0){
		if(yh_tupz == 1){yh_tupz = 0;time = 5000;}
		zidongbuf();
		shauxin_tubs(); // 刷新标识
		zd_time = 3000;
	}else{
		zd_time = zd_time-1000;
	}
}

// 判断是否自动播放
function is_zdbuf(){
	if(yh_tupz == 1){
		if(time == 0){
			diaoyon_zidbf();
		}else{
			time = time-1000;
		}
	}else{
		diaoyon_zidbf();
	}
}
setInterval(is_zdbuf,1000);


function _touch(){
      var startx;//让startx在touch事件函数里是全局性变量。
      var endx;
       var el=document.getElementById('tupian');
      function cons(){   //独立封装这个事件可以保证执行顺序，从而能够访问得到应该访问的数据。
             // console.log(starty,endy);
             if(startx>endx){  //判断左右移动程序
             	if(dangqian_tubs <= tup_max){
             		is_dao = 1;
             		yh_tupz = 1;
             		dangqian_tubs = dangqian_tubs+1;
             		xianshi_tp_yc(dangqian_tubs);
             	}
              }else{
                if(dangqian_tubs >= tup_min){
                	is_dao = 2;
                	yh_tupz = 1;
             		dangqian_tubs = dangqian_tubs-1;
             		xianshi_tp_yc(dangqian_tubs);
             	}
             }
       }
       el.addEventListener('touchstart',function(e){
               var touch=e.changedTouches;
             startx=touch[0].clientX;
            starty=touch[0].clientY;
    });
     el.addEventListener('touchend',function(e){
         var touch=e.changedTouches;
             endx=touch[0].clientX;
              endy=touch[0].clientY;
              cons();
   });
}
_touch()