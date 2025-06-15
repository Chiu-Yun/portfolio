
/* --------------------------------------
 * 版頭背景動畫
 * -------------------------------------- */
//滑動觸發-背景

gsap.registerPlugin(ScrollTrigger);

var is_forPC = document.body.clientWidth > 767; //forPC 


function gsap_bgtop(){





gsap.set('.pc_bgtop02', {
	transformOrigin:"1000px 621px",
	opacity:0,

	
  });
  gsap.to('.pc_bgtop02', {
	delay:.7,
	duration:1,
	opacity:1,
    scale:1,

  });

  gsap.set('.pc_bgtop03', {
	transformOrigin:"1000px 621px",
	opacity:0,
	y:50

  });
gsap.to('.pc_bgtop03', {
	delay:.2,
	duration:1,
	opacity:1,
    scale:1,
	y:0,
  });

  gsap.set('.pc_bgtop04', {
	transformOrigin:"1000px 621px",
	opacity:0,
	y:-50,

  });

  gsap.to('.pc_bgtop04', {
	delay:.5,
	duration:1,
	opacity:1,
    scale:1,
	y:0,
  });

// gsap.to('.pc_bgtopre', {
	
// 	scrollTrigger: {
  
// 	  trigger: ".WARRPER",  //觸發區塊
// 	  start: "top", //開始位置
// 	  end: "bottom", 	//結束位置
// 	  scrub: 2 , //延遲位移
// 	},
  
// 	y:-1000,
// 	});
  
}



function m_gsap_bgtop(){

	gsap.set('.mb_02', {
		transformOrigin:"1000px 621px",
		opacity:0,
	
		
	  });
	  gsap.to('.mb_02', {
		delay:.7,
		duration:1,
		opacity:1,
		scale:1,
	
	  });
	
	  gsap.set('.mb_03', {
		transformOrigin:"1000px 621px",
		opacity:0,
		y:50
	
	  });
	gsap.to('.mb_03', {
		delay:.2,
		duration:1,
		opacity:1,
		scale:1,
		y:0,
	  });
	
	  gsap.set('.mb_04', {
		transformOrigin:"1000px 621px",
		opacity:0,
		y:-50,
	
	  });
	
	  gsap.to('.mb_04', {
		delay:.5,
		duration:1,
		opacity:1,
		scale:1,
		y:0,
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
