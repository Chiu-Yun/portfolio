
/* --------------------------------------
 * 版頭背景動畫
 * -------------------------------------- */
//滑動觸發-背景

gsap.registerPlugin(ScrollTrigger);

var is_forPC = document.body.clientWidth > 767; //forPC 


function gsap_bgtop(){
	gsap.set('.pc_bgtop01', {

		scale:2,
	
	  });
	
	  
  gsap.to('.pc_bgtop01', {
	duration:1,
	scale:1,

  });

	
	gsap.set('.pc_bgtop02', {

		opacity:0,
	
	  });
	
	  
  gsap.set('.pc_bgtop03', {

	y:-50,

  });

  
  gsap.set('.pc_bgtop04', {

	opacity:0,

  });

  gsap.to('.pc_bgtop02 ', {
	opacity:1,
	duration:1,
	delay:1,
  });
  gsap.to('.pc_bgtop03 ', {
	opacity:1,
	y:0,
	duration:7,
	repeat:-1,
	yoyo:true,
  });

  gsap.to('.pc_bgtop03,.pc_bgtop04 ', {
	opacity:1,
	duration:1,
	delay:.5,
  });

  gsap.to('.pc_bgtop04L ', {
	x:850,
	duration:3,
	delay:2,
	repeat:-1,
	opacity:0,
  });

  gsap.set('.pc_bgtop05 ', {
	y:20,

  });

  gsap.to('.pc_bgtop05 ', {
	y:0,
	duration:1,
	delay:1,
	yoyo:true,
	ease: "elastic.out(1,0.3)",
  });

  

  gsap.set('.pc_bgtopre ', {
	y:150,

  });

  gsap.to('.pc_bgtopre', {
	y:0,
	duration:5,
	delay:1,
	yoyo:true,
	repeat:-1,

  });
	 
//   gsap.to('.ab_bg ', {
	
// 	scrollTrigger: {
  
// 	  trigger: ".WRAPPER ",  //觸發區塊
// 	  start: "top+=2000 bottom", 
// 	  end: "bottom", 	//結束位置
// 	  scrub: 2 , //延遲位移
// 	},

// 	y:-600,
// 	});



var falling = true;

TweenLite.set("#container",{perspective:600})
TweenLite.set("svg",{xPercent:"-50%",yPercent:"-50%"})

var total = 30;
var container = document.getElementById("container"),	w = window.innerWidth , h = window.innerHeight;
 
 for (i=0; i<total; i++){ 
   var Div = document.createElement('div');
   TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
   container.appendChild(Div);
   animm(Div);
 }
 
 function animm(elm){   
   TweenMax.to(elm,R(10,30),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
   TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
   TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
   TweenMax.set(elm, {alpha:R(0.2, 1)});
 };

function R(min,max) {return min+Math.random()*(max-min)}


	
			  
}

function m_gsap_bgtop(){


	var falling = true;

	TweenLite.set("#container2",{perspective:600})
	TweenLite.set("svg",{xPercent:"-50%",yPercent:"-50%"})
	
	var total = 30;
	var container2 = document.getElementById("container2"),	w = window.innerWidth , h = window.innerHeight;
	 
	 for (i=0; i<total; i++){ 
	   var Div = document.createElement('div');
	   TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
	   container2.appendChild(Div);
	   animm(Div);
	 }
	 
	 function animm(elm){   
	   TweenMax.to(elm,R(10,30),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
	   TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
	   TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
	   TweenMax.set(elm, {alpha:R(0.2, 1)});
	 };
	
	function R(min,max) {return min+Math.random()*(max-min)}
	
	
  
	gsap.set('.mb_01-1', {

		scale:2,
	
	  });
	
	  
  gsap.to('.mb_01-1', {
	duration:1,
	scale:1,

  });

	
	gsap.set('.mb_02', {

		opacity:0,
	
	  });
	
	  
  gsap.set('.mb_03', {

	y:-50,

  });

  
  gsap.set('.mb_04', {

	opacity:0,

  });

  gsap.to('.mb_02 ', {
	opacity:1,
	duration:1,
	delay:1,
  });
  gsap.to('.mb_03 ', {
	opacity:1,
	y:0,
	duration:7,
	repeat:-1,
	yoyo:true,
  });

  gsap.to('.mb_03,.mb_04 ', {
	opacity:1,
	duration:1,
	delay:.5,
  });

  gsap.to('.mb_04L ', {
	x:350,
	duration:4,
	delay:2,
	repeat:-1,
	opacity:0,
  });

  gsap.set('.mb_05 ', {
	y:10,

  });

  gsap.to('.mb_05 ', {
	y:0,
	duration:1,
	delay:1,
	yoyo:true,
	ease: "elastic.out(1,0.3)",
  });

  gsap.set('.mb_re02 ', {
	y:100,

  });

  gsap.to('.mb_re02', {
	y:0,
	duration:5,
	delay:1,
	yoyo:true,
	repeat:-1,

  });
	  
}

if(is_forPC){
  gsap_bgtop();
} else {
  m_gsap_bgtop();
}


//載入完成後執行
$(window).on('load',function(){
});
