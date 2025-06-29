// JavaScript Document
/* 回版頭 */
jQuery(function(){
	jQuery("#gotop").click(function(){
		jQuery("html,body").stop(true,false).animate({scrollTop:0},700); //設定回頁面頂端
		return false;	
	});
    jQuery(window).scroll(function() {
        if ( jQuery(this).scrollTop() >300){ //設定大於300px才顯示浮層
            jQuery('#gotop').stop(true,true).fadeIn("fast");
        } else {
            jQuery('#gotop').stop(true,true).fadeOut("fast");
        }
    });
});

/* 滑動的GOTO */
function goTop(val) {
	if($(window).width() > 767 ){
		var gotop_i = 150;
	} else {
		var gotop_i = 100;
	}
	jQuery('html,body').animate({scrollTop: jQuery(val).offset().top - gotop_i },700);
}



/*開關PC黏人精*/
$(function(){
	var $fixed_Area = $('.fixed_Area');
	//預設進場
	setTimeout( function(){ $fixed_Area.toggleClass('fixed_Area_hide') } ,1500)
	//點擊切換
	$fixed_Area.find('.js-fixed_Area_hide').click(function(){
		$fixed_Area.toggleClass('fixed_Area_hide');
	})
});






/* 浮層*/
function agree(val) {
	$(val).fadeIn();
	var winST =  jQuery(window).scrollTop(); //目前位置
	var winH =  jQuery(window).height(); //裝置高度
	//浮層高度
	$(val).find('.agreeArea .txtArea').css('height', winH * 70 / 100 );
	var this_agreeH = $(val).find('.agreeArea').height();
	//浮層top定位
	$('.agreeArea').css('top', winST + winH/2 - this_agreeH/2 );
	removeEditBtn()
}

$(function(){
	var blackBox = $(".blackBox");
	var blackBox_close = $(".blackBox .close , .blackBox .but-close");
	var blackBox_BOXclose = ".Boxclose , .fixedfooterArea_B ";
	//點按鈕關閉
	blackBox_close.delegate( "a" ,"touchstart click",function(e){
		$(blackBox).fadeOut();
		e.preventDefault();
	});
	//點黑區關閉
	blackBox.delegate( blackBox_BOXclose ,"touchstart click",function(e){
		$(blackBox).fadeOut();
		e.preventDefault();
	});
});







/*
 * Autumn
 * 指定時間開關物件 timeSwitch-v2.0.10
 *******************************************************************
 * 啟動器-精準時間  : style="display:none;" data-ts="{'mode':'show', 'start':'2021/1/1 00:00:00', 'end':'2021/1/9 23:59:59'}"
 * 啟動器-時間區間  : style="display:none;" data-ts="{'mode':'show', 'start':'2021/1/1 12:00:00', 'end':['1','時']}"
 * 啟動器-區間Class: data-ts="{'mode':'addclass', 'start':'2021/1/1 12:00:00', 'end':['1','時']}"
 * 測試時間: (1)網址&tstest="2020/1/20 00:00:00" 或 (2)<body data-ts-test="2020/1/20 00:00:00">
 * --------
 * 功能說明:
 * 'mode' :'show'                  開關模式 show=顯示 hide=隱藏 addclass=區間加Class【ts_pre=尚未開始 ts_ing=進行中 ts_end=已結束】
 * 'start':'2021/1/1 00:00:00'     開始時間 (00:00:00可不寫)
 * 'end'  :'2021/1/9 23:00:00'     結束時間 (23:59:59可不寫)
 * 'end'  :['1','天']              時間區間 [整數,區間] 區間=年/月/週/天/時/分/秒
 * -------
 * #自動更新: 精準時間=>每小時自動更新，
 * #自動更新: 時間區間=>【年/月/週/天/時->每整點更新,分->整分更新,秒->每秒更新】
 *******************************************************************
 */
$(function() {
  var is_EcmWriter = document.querySelectorAll('input[id^="eWriterBtn"]').length > 0; //ECM編輯模式
  var ts_now = new Date(),
      ts_now_M = ts_now.getMinutes(), //目前分
      ts_now_S = ts_now.getSeconds(), //目前秒
      ts_now_time;
  var domainQur = window.location.search.substring(1); // domainQur = npn=1vEK1psAv1Uo&n=1&code=3
  if(domainQur !== '' && (location.protocol).indexOf('http') !== 0){
    var params = JSON.parse('{"'+ decodeURI(domainQur).replace(/"/g, '\\"').replace(/=/g, '":"').replace(/&/g, '","') +'"}');// {npn: 1vEK1psAv1Uo , n : 1, code : 3}
    var tstest = params.tstest;
    if(tstest !== undefined) {
      if(tstest){ ts_now = new Date(tstest); alert('測試時間打開中，請注意!! ' + tstest)};
    }
  };
  var ts_test = $('[data-ts-test]').attr('data-ts-test');
  if(ts_test){ ts_now = new Date(ts_test); alert('測試時間打開中，請注意!! ' + ts_test)};
  //時間加減元件
  function DateAdd(interval, num, date) {
    switch (interval) {
      case '年': { date.setFullYear(date.getFullYear() + num); return date; break;}
      case '月': { date.setMonth(date.getMonth() + num);       return date; break;}
      case '週': { date.setDate(date.getDate() + num * 7);     return date; break;}
      case '天': { date.setDate(date.getDate() + num);         return date; break;}
      case '時': { date.setHours(date.getHours() + num);       return date; break;}
      case '分': { date.setMinutes(date.getMinutes() + num);   return date; break;}
      case '秒': { date.setSeconds(date.getSeconds() + num);   return date; break;}
      default: { date.setDate(date.getDate() + num);           return date; break;}
    }
  };
  //timeout的時間值
  function TimeOut(interval, ts_time){
    switch (interval) {
      case '年': { ts_time = 1000*60*60;  return ts_time;break;}  //時
      case '月': { ts_time = 1000*60*60;  return ts_time;break;}  //時
      case '週': { ts_time = 1000*60*60;  return ts_time;break;}  //時
      case '天': { ts_time = 1000*60*60;  return ts_time;break;}  //時
      case '時': { ts_time = 1000*60*60;  return ts_time;break;} //時
      case '分': { ts_time = 1000*60;     return ts_time;break;} //分
      case '秒': { ts_time = 1000;        return ts_time;break;} //秒
      default:  {  ts_time = 1000*60*60;   return ts_time;break;}//時
    }
  };
  //引號轉換
  function StrFy(val){
    var StrFy = JSON.stringify(val);
    StrFy = StrFy.replace(/(["])/g,"").replace(/(['])/g,'\"'); 
    return JSON.parse(StrFy)
  };
  //判斷結束時間格式
  function getTsEnd(val){
    var end   = val.end;
    var start = val.start;
    var num,interval,onesec;
    if( Array.isArray(end)){
      num = parseInt(end[0]);
      interval = end[1];
      (interval === '秒') ? onesec = 0 : onesec = 1000;
      end = new Date(start);
      end = new Date( DateAdd(interval, num, end) - onesec); //要扣1秒
      return [end,interval]
    }else{ 
      //一般結束時間
      ( end.length < 12) ? (end = new Date( end + ' 23:59:59')) : (end = new Date(end)); //結束時間沒填時間補上23:59:59
      return [end]
    }
  };
  //抓取[data-ts]屬性的物件
  $('[data-ts]').each(function(i) {
    var _this = $(this);
    if(is_EcmWriter){ _this.show(); return };         //ECM編輯模式時，全部顯示
    var ts_self  = StrFy(_this.attr('data-ts')),      //設定data
        ts_mode  = ts_self.mode,                      //模式
        ts_start = new Date(ts_self.start),           //開始時間
        Arr_ts_end = getTsEnd(ts_self),               //結束時間陣列
        ts_end   = Arr_ts_end[0],                     //結束時間
        interval = Arr_ts_end[1],                     //結束時間[區間單位]
        _ts_out, 
        ts_out   = TimeOut(interval, _ts_out);        //區間換算
    //時間模式主要功能
    function TimeSwitch(){
      if(ts_mode === 'show'){ //ts_mode = show 打開
        (ts_start <= ts_now && ts_now <= ts_end) ? (_this.show()) : (_this.remove());
      }
      if(ts_mode === 'hide'){ //ts_mode = hide 關閉
        (ts_start <= ts_now && ts_now <= ts_end) ? (_this.remove()) : (_this.show());
      }
      if( ts_mode === 'addclass'){ //ts_mode = addclass 新增Class
        (_this.hasClass('ts_pre')) && (_this.removeClass('ts_pre'));
        (_this.hasClass('ts_ing')) && (_this.removeClass('ts_ing'));
        (_this.hasClass('ts_end')) && (_this.removeClass('ts_end'));
        (ts_now < ts_start) && (_this.addClass('ts_pre'));                    //未開始
        (ts_start <= ts_now && ts_now < ts_end) && (_this.addClass('ts_ing'));//進行中
        (ts_now >= ts_end) && (_this.addClass('ts_end'));                     //已結束
      }
    };      
    //延遲啟動區間觸發(秒數歸零)
    function TsIntro(){
      ts_now_time = (interval === '分' || interval === '秒')? (60 - ts_now_S) : (59 - ts_now_M) * 60 + (60 - ts_now_S) //秒數歸零
      setTimeout(TimeOutCalc,ts_now_time*1000);
    };
    //區間觸發
    function TimeOutCalc(){
      ts_now = new Date(); //重抓最新時間
      into();
      if( ts_now > ts_end ) { return }
      setTimeout(TimeOutCalc,ts_out);
    };
    //初始化
    function into(){
      TimeSwitch();
    };
    into();
    TsIntro(interval);
  });   
});

//
///*倒數*/
//  var DifferenceHour = -1;
//  var DifferenceMinute = -1;
//  var DifferenceSecond = -1;
//  var Tday = new Date("2022/3/15 00:00:00");
//  var daysms = 24 * 60 * 60 * 1000;
//  var hoursms = 60 * 60 * 1000;
//  var Secondms = 60 * 1000;
//  var microsecond = 1000;
//  var msecms = 10;
//  function clock(){
//  var day = 1;
//  var time = new Date()
//  var hour = time.getHours()
//  var minute = time.getMinutes()
//  var second = time.getSeconds()
//  var msec = time.getMilliseconds()
//  var convertHour = DifferenceHour;
//  var convertMinute = DifferenceMinute;
//  var convertSecond = DifferenceSecond;
//  var Diffms = Tday.getTime() - time.getTime();
//  DifferenceHour = Math.floor(Diffms / daysms);
//  Diffms -= DifferenceHour * daysms;
//  DifferenceMinute = Math.floor(Diffms / hoursms);
//  Diffms -= DifferenceMinute * hoursms;
//  DifferenceSecond = Math.floor(Diffms / Secondms);
//  Diffms -= DifferenceSecond * Secondms
//  var dSecs = Math.floor(Diffms / microsecond)
//  var dMsec = Math.floor( Diffms / msecms % 100)
//  if(convertHour   != DifferenceHour  ) { DifferenceHour   = ( DifferenceHour   < 10 ) ?      DifferenceHour   : DifferenceHour  ; document.getElementById('DD').innerHTML = DifferenceHour; }
//  if(convertMinute != DifferenceMinute) { DifferenceMinute = ( DifferenceMinute < 10 ) ? "0"+ DifferenceMinute : DifferenceMinute; document.getElementById('HH').innerHTML = DifferenceMinute; }
//  if(convertSecond != DifferenceSecond) { DifferenceSecond = ( DifferenceSecond < 10 ) ? "0"+ DifferenceSecond : DifferenceSecond; document.getElementById('MM').innerHTML = DifferenceSecond; }
//  dSecs = ( dSecs < 10 ) ? "0"+ dSecs : dSecs; document.getElementById("SS").innerHTML = dSecs;
//  dMsec = ( dMsec < 10 ) ? "0"+ dMsec : dMsec; document.getElementById("MS").innerHTML = dMsec;
//  setTimeout("clock()",10)
//  };
//  clock();

// when animating on canvas, it is best to use requestAnimationFrame instead of setTimeout or setInterval
// not supported in all browsers though and sometimes needs a prefix, so we need a shim



const clickableButtons = document.querySelectorAll('.clickable-button');

clickableButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 移除已經被點擊的按鈕的 clicked 類
        document.querySelectorAll('.clickable-button.clicked').forEach(el => el.classList.remove('clicked'));

        // 添加 clicked 類以觸發變化
        button.classList.add('clicked');
    });
});



