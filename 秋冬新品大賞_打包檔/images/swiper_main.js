

function sw() { 
 
	
 /* -------品類頁籤輪播---------*/
	
 var Area05_li = $('.Area04 .layout_page2 ul li');
 var Area05 = new Swiper('.Area04 .box', {

   //排版
   slidesPerView: 1, //顯示幾個
   spaceBetween: 50, //間距
   autoHeight: true, //自動高度 
   
////    //★5.2.1★自動撥放
//    autoplay: true,
//    autoplay: {
//      delay: 3500,
//      disableOnInteraction: false, //觸擊後不再自動輪播
//      //stopOnLastSlide: true, //切換到最後時停止自動切換
//      //reverseDirection: true, //反向自動輪播
//    },
   
 //★5.2.1★切換特效(淡化)
   effect: 'fade',     //切換特效 fade(淡化) cube(立方體) coverflow(3D) flip(翻牌)
   fadeEffect: {
     crossFade: true //打開自動淡出
   },

   noSwiping : true, //禁止切換
   noSwipingClass: 'tab_swiper-no-swiping', //禁止切換Class命名

   //特殊
   // mousewheelControl: true,	//滑鼠滾輪功能
   /*watchSlidesProgress: true,	//啟動過程3 2 1 0 -1 -2 -3	*/
   //★5.2.1★↓動作↓
   on: {
     //初始化
     init: function() {
       Area05_li.eq(this.activeIndex).addClass('cate-hover');
       console.log(this);

     },
     //輪播開始時觸發
     transitionStart: function() {
       //高亮
       Area05_li.removeClass('cate-hover').eq(this.activeIndex).addClass('cate-hover');

     },
   }, //↑動作↑		
   
 }); 
 //  /*點選單時*/
 Area05_li.click(function(e){
   var i = $(this).index();
   Area05.slideTo(i , 300); //移動到點擊卡
 })  
  /* -------8品公版輪播(線上入稿)---------*/

 $('.Area04 .box .layout_pd ul').addClass('swiper-wrapper');
 $('.Area04 .box .layout_pd ul > li').addClass('swiper-slide');
 
 var Area05_box1 = new Swiper('.Area04 .box .layout_pd ', {
  
   
   //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
   pagination: {
     el: '.Area04 .layout_pd .swiper-pagination',
     clickable: true, //觸擊切換
   },
   //★5.2.1★左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black  
   navigation:{
     nextEl: '.Area04 .box .layout_pd .swiper-button-next',
     prevEl: '.Area04 .box .layout_pd .swiper-button-prev',
   },
   //★5.2.1★RWD(換成大於)
   breakpoints: {
     0: {
       //手機版
       slidesPerView: 2.1,
       spaceBetween: 5,

       slidesPerColumn: 1, //一次顯示幾行

     },
     768: {
       //電腦版
       slidesPerView:4.5,
       spaceBetween: 10,
       slidesPerGroup:1, //一次切換幾個
     },
   },

 });	



 var Area05_box1 = new Swiper('.sw', {
  
  // autoplay: {
  //   delay: 3000,
  // },
  //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
  pagination: {
    el: '.sw  .swiper-pagination',
    clickable: true, //觸擊切換
  },
  //★5.2.1★左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black  
  navigation:{
    nextEl: '.sw  .swiper-button-next',
    prevEl: '.sw  .swiper-button-prev',
  },
  //★5.2.1★RWD(換成大於)
  breakpoints: {
    0: {
      //手機版
      slidesPerView: 1,
      spaceBetween: 5,

      slidesPerColumn: 1, //一次顯示幾行

    },
    768: {
      //電腦版
      slidesPerView:1,
      spaceBetween: 10,
      slidesPerGroup:1, //一次切換幾個
    },
  },

});	


};
    




//載入完成後執行
$(window).on('load',function(){
  sw()
});