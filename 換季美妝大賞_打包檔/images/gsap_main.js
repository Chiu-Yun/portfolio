
/* --------------------------------------
 * 版頭背景動畫
 * -------------------------------------- */
//滑動觸發-背景

gsap.registerPlugin(ScrollTrigger);

var is_forPC = document.body.clientWidth > 767; //forPC 


function gsap_bgtop(){


	gsap.set('.logo', {
		y:-60,
		opacity:0,
		  });
		
		
		
		  gsap.to('.logo', {
	
			y:0,
			duration:1,
			opacity:1,
		  });
		

  
  gsap.set('.pc_bgtop02', {
	transformOrigin:"327px 735px",
	opacity:0,
    scale:0,
  });

  gsap.set('.pc_bgtop03', {
	transformOrigin:"1441px 434px",
	opacity:0,
    scale:0,
  });

  gsap.set('.pc_bgtop05', {
	transformOrigin:"1000px 550px",
	opacity:0,
    scale:0,
  });

  gsap.to('.pc_bgtop02 ,.pc_bgtop03 ,.pc_bgtop05', {
	opacity:1,
    scale:1,
	ease:Elastic.easeOut.config(1,0.3),
	stagger:.2,

  });

  gsap.set('.pc_bgtop06', {

	opacity:0,

  });
	  
  gsap.to('.pc_bgtop06', {
	delay:.8,
	duration:.5,
	opacity:1,

  });

  gsap.to('.pc_bgtop06', {
	delay:1.3,
	duration:20,
	y:-50,
	repeat:-1,
	yoyo:true,
  });
	  
  gsap.to('.pc_bgtop06', {
	delay:.8,
	opacity:1,

  });	

  gsap.set('.pc_bgtop07', {


	scale:2,
	opacity:0,
  });
	  
  gsap.to('.pc_bgtop07', {
	duration:1,
	delay:.8,
	opacity:1,
	scale:1,

  });	

  gsap.set('.pc_bgtop08', {
	transformOrigin:"637px 465px",
	opacity:0,
  });
  gsap.set('.pc_bgtop09', {
	transformOrigin:"588px 403px",
	opacity:0,
  });

  gsap.set('.pc_bgtop10', {
	transformOrigin:"1364px 394px",
	opacity:0,
  });

  gsap.to('.pc_bgtop08 ,.pc_bgtop09 ,.pc_bgtop10', {
	duration:1,
	delay:.8,
	opacity:1,
	rotation:360,
	repeat:-1
  });	

	 
  gsap.to('.ab_bg ', {
	
	scrollTrigger: {
  
	  trigger: ".WRAPPER ",  //觸發區塊
	  start: "top+=2000 bottom", 
	  end: "bottom", 	//結束位置
	  scrub: 2 , //延遲位移
	},

	y:-2000,
	});

	gsap.set('.bg_fade01 ', {
		scale:2,
		opacity:0,

		});

	gsap.to('.bg_fade01 ', {
	
		scrollTrigger: {
	  
		  trigger: ".Area02 ",  //觸發區塊
		  start: "top-=300 ", 
		  end: "top ", 	//結束位置
		  scrub: 1 , //延遲位移
		},
		opacity:1,	
		scale:1,
		});
	
			  
}

function m_gsap_bgtop(){



	

	gsap.set('.logo', {
		y:-60,
		opacity:0,
		  });
		
		
		
		  gsap.to('.logo', {
	
			y:0,
			duration:1,
			opacity:1,
		  });
		

  
  gsap.set('.mb_02,.mb_03', {

opacity:0,
scale:0,
  });



  gsap.to('.mb_02,.mb_03', {
	delay:.1,
	opacity:1,
    scale:1,
	ease:Elastic.easeOut.config(1,0.3),
	stagger:.3,
  });


  gsap.set('.mb_04', {

	opacity:0,

  });
	  
  gsap.to('.mb_04', {
	delay:.8,
	duration:.5,
	opacity:1,

  });

  gsap.to('.mb_04', {
	delay:1.3,
	duration:10,
	y:-10,
	repeat:-1,
	yoyo:true,
  });
	  
  gsap.to('.mb_04', {
	delay:.8,
	opacity:1,

  });	

  gsap.set('.mb_00', {

	opacity:0,
	scale:2,
  });
  gsap.to('.mb_00', {
	delay:.2,
	duration:1,
	opacity:1,
	scale:1,
  });	


  gsap.set('.mb_05', {
	transformOrigin:"8% 39%",
	opacity:0,
  });
  gsap.set('.mb_06', {
	transformOrigin:"14% 41%",
	opacity:0,
  });

  gsap.set('.mb_07', {
	transformOrigin:"84% 39%",
	opacity:0,
  });

  gsap.to('.mb_05 , .mb_06 ,.mb_07', {
	duration:1,
	delay:.8,
	opacity:1,
	rotation:360,
	repeat:-1
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
