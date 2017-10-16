$.fn.extend({
	waterfull:function  () {
		var $this=this;
		var $li=$this;
		 var w=$li.outerWidth();
		 var number=Math.floor($(window).width()/w);
		 var arr=[];
		 $li.each(function(index,value) {
		 	   var h=$li.eq(index).outerHeight();
		 	   if (index<number){
                   arr[index]=h;
                   $(value).css({
                   	   "position":"absolute",
		 	   	   	    "top":0,
		 	   	   	    "left":index*w+"px", 
                   })
		 	   }else{
		 	   	   var minH=Math.min.apply(null,arr);
		 	   	   var minHIndex=$.inArray(minH,arr);
		 	   	   $(value).css({
		 	   	   	    "position":"absolute",
		 	   	   	    "top":minH+"px",
		 	   	   	    "left":minHIndex*w+"px",
		 	   	   }) 
		 	   arr[minHIndex]=arr[minHIndex]+$li.eq(index).outerHeight(); 
		 	   }
		 })
		 var $MaxH = Math.max.apply(null,arr);
		  $this.parent().css("height",$MaxH);
		  $this.parent().parent().css("height",$MaxH);
	}
})