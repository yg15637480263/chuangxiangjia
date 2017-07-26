var flag1=true,flag2=true,flag3=true,flag4=true,flag5=true,flag6=true;
var mySwiper=new Swiper(".swiper-container",{
		initialSlide : 0,
		freeMode: false,
	 	direction : 'vertical',
	 	autoplayDisableOnInteraction:false,
	 	grabCursor : true,
	    onInit: function(swiper){ 
		    swiperAnimateCache(swiper);  
		    swiperAnimate(swiper);
	    }, 
	    onSlideChangeEnd: function(swiper){ 
	        swiperAnimate(swiper);
	     
	         if (swiper.activeIndex==6) {
//	        	alert("你好");
	        	function hpj(){
				$(".slider7-12").animate({
					height:'8rem'
					
				},3000)
				
			}
	        	hpj();
	        }
	         if(swiper.activeIndex == 4){
		  			$(".p2").css("display","none");
		  			$(".page5 p").eq(0).addClass("a");
					$(".p2").css("display","block");
					
					$(".p9").css("display","none");
		  			$(".page5 p").eq(8).addClass("i");
					$(".p9").css("display","block");
					
					$(".p8").css("display","none");
		  			$(".page5 p").eq(7).addClass("h");
					$(".p8").css("display","block");
					
					$(".p10").css("display","none");
		  			$(".page5 p").eq(9).addClass("j");
					$(".p10").css("display","block");
					
					$(".p7").css("display","none");
		  			$(".page5 p").eq(6).addClass("g");
					$(".p7").css("display","block");
					
					$(".p6").css("display","none");
		  			$(".page5 p").eq(5).addClass("f");
					$(".p6").css("display","block");
					
					$(".p5").css("display","none");
		  			$(".page5 p").eq(4).addClass("e");
					$(".p5").css("display","block");
					
					$(".p4").css("display","none");
		  			$(".page5 p").eq(3).addClass("d");
					$(".p4").css("display","block");
					
					$(".p1").css("display","none");
		  			$(".page5 p").eq(1).addClass("b");
					$(".p1").css("display","block");
					
					$(".p3").css("display","none");
		  			$(".page5 p").eq(2).addClass("c");
		  			$(".p3").css("display","block");
		  			
		  			
		  			$(".page5 .Img").click(function(){
		  				$(".page5>.cover div").eq($(this).index()-13).fadeIn(1000).siblings().fadeOut(1000);
		  				$(".page5>.cover div").css("zIndex","2");
		  				$(".page5 h4").css("zIndex","3");
		  				$(".page5 h4").fadeIn(1000);
		  				$(".page5 h4").click(function(){
			  				$(".page5 .cover div").fadeOut(1000);
			  				$(".page5>.cover>h4").fadeOut(10);
		  				})
		  			})
		  			
  			
			  		}else{
			  			$(".p2").css("display","none");
			  			$(".page5 p").eq(0).removeClass("a");
						$(".p2").css("display","block");
						
						$(".p9").css("display","none");
			  			$(".page5 p").eq(8).removeClass("i");
						$(".p9").css("display","block");
						
						$(".p8").css("display","none");
			  			$(".page5 p").eq(7).removeClass("h");
						$(".p8").css("display","block");
						
						$(".p10").css("display","none");
			  			$(".page5 p").eq(9).removeClass("j");
						$(".p10").css("display","block");
						
						$(".p7").css("display","none");
			  			$(".page5 p").eq(6).removeClass("g");
						$(".p7").css("display","block");
						
						$(".p6").css("display","none");
			  			$(".page5 p").eq(5).removeClass("f");
						$(".p6").css("display","block");
						
						$(".p5").css("display","none");
			  			$(".page5 p").eq(4).removeClass("e");
						$(".p5").css("display","block");
						
						$(".p4").css("display","none");
			  			$(".page5 p").eq(3).removeClass("d");
						$(".p4").css("display","block");
						
						$(".p1").css("display","none");
			  			$(".page5 p").eq(1).removeClass("b");
						$(".p1").css("display","block");
						
						$(".p3").css("display","none");
			  			$(".page5 p").eq(2).removeClass("c");
			  			$(".p3").css("display","block");
			  			
			  		}
    				swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画  		         
	         
	    		if(swiper.activeIndex == 8){
	    			
	    			var flag = true;
					$(".slider9-8 p").on("click", function() {
						if(flag) {
							$(".slider9 form").animate({
								opacity: 1,
							});
							$(".slider9-8 p").html("支付");
							$(".slider9-3 img").css({
								display:"none"
							})
						} else {
							$(".slider9 form").animate({
								opacity: 0,
							});
							$(".slider9-8 p").html("点击抢票");
						}
						flag = !flag;
					});
	    		}
	    	 if (swiper.activeIndex==3) {
	    	 	
	    	 	$(".slider4 p").on("click", function() {
					var index = $(this).index();
					$(".slider4 p").animate({
						width: "0.5rem",
						height: "0.5rem",
					}, 1000);
					$(".slider4 p img").css({
						display: "none",
					})
					$(".slider4 .dif1").css({
						display: "none"
					}).next().css({
						display: "none"
					});
					$(".slider4>.outer div").eq(20).css({
						display: "none"
					}).next().css({
						display: "none",
					});
					$(".slider4 .dis").show();
					var swiper2 = new Swiper('.swiper2', {
						loop: true,
						initialSlide: index,
						// 如果需要前进后退按钮
						nextButton: '.swiper-button-next',
						prevButton: '.swiper-button-prev',
					})
				});
				$(".slider4>.dis>.c").on("click", function() {
					$(".slider4 .dis").hide();
					$(".slider4 p").animate({
						width: '1.54rem',
						height: "1.54rem"
					}, 1000)
					$(".slider4 p img").css({
						display: "block",
					})
				})
					    	 	
	    	 	
	    	 }
	    
	    }
});
