document.documentElement.style.fontSize = window.innerWidth/375*50+"px";
var swiper = new Swiper(".swiper-container",{
	pagination:".swiper-pagination",
	loop:"loop",
	autoplay:2000
})
var scroll1 = new IScroll(".main1");
var scroll1 = new IScroll(".main2");
var scroll1 = new IScroll(".main3");

//切换页面
var swiper1 = new Swiper(".swiper-container1",{
	onSlideChangeStart:function(swiper){
		$(".h_uls li").eq(swiper.activeIndex).addClass("on").siblings().removeClass("on");
	}
})

function fn(ind){
	swiper1.slideTo(ind);
}
//头部高亮
$(".h_uls li").on("click",function(){
	$(this).addClass("on").siblings().removeClass("on");
})

//点击搜索框
$(".texts").on("focus",function(){
	$(".spn").hide();
})
$(".texts").on("blur",function(){
	$(".spn").show();
})
//点击出现侧边栏
$(".navs").on("click",function(){
	$(".box").animate({"left":"80%"},400);
	$(".aside").animate({"left":"0"},400);
})
$(".wrap").on("click",function(){
	$(".box").animate({"left":"0%"},400);
	$(this).parent().animate({"left":"-100%"},400);
})
// 点击按钮
var flag = true;
$(".b_n").on("click",function(){
	if(flag){
		$(this).animate({"transform":"translate3d(0.5rem,0,0)"});
		$(this).css({"background":"#fff"})
		$(this).parent().css({"background":"#24cb7b"});
		flag = false;
	}else{
		$(this).animate({"transform":"translate3d(0rem,0,0)"});
		$(this).css({"background":"#fff"})
		$(this).parent().css({"background":"#fff"});
		flag = true;
	}
})
