
var input, filter, table, tr, td, ssi, txtValue;
// 创建搜索功能所需变量 
var y = document.cookie; 
// 创建变量“y”并赋值cookie



setInterval("span()","1000");



function span(){
var aqyxd = new Date();
var aqyxn = aqyxd.getFullYear() - 2023;
var aqyxm = aqyxd.getMonth() - 7;
var aqyxr = aqyxd.getUTCDate() - 17;
var aqyxh=aqyxd.getHours()-13;

var aqyxmin = aqyxd.getMinutes()-55;
var aqyxs=aqyxd.getSeconds();
if(aqyxmin<0){
aqyxh=aqyxh-1;
aqyxmin=aqyxmin+60;
}
if(aqyxh<0){
aqyxr=aqyxr-1;
aqyxh=aqyxh+24;
}
if(aqyxr<0){
aqyxm=aqyxm-1;
aqyxr=aqyxr+30;
}
if(aqyxm < 0){
aqyxn=aqyxn-1;
aqyxm=aqyxm+12;
}

document.getElementById("aqyx-span").innerHTML=aqyxn+"年"+aqyxm+"月"+aqyxr+"日"+aqyxh+"时"+aqyxmin+"分"+aqyxs+"秒";
}

var a=1;
var b=1;
var c=1;
var t=1;
var y1=1;
var I=1;
var Ic=1;
var s=1;
var sb=1;
var sc=1;
// 创建变量

setInterval("time()","1000");
// 时钟
var time1=1;
function time(){
var now = new Date();
var time = now.getMinutes();
var timeh = now.getHours();
var timeyear = now.getFullYear()-2023;
document.getElementById("book_a_p").innerHTML=timeyear;
if(time1==1){
document.getElementById("time-small").innerHTML="" ;
if(timeh < 10){
var timeh ="0"+ now.getHours();
}

if(time < 10){
var time ="0"+ now.getMinutes();
}
}else{

if(time < 10){
var time ="0"+ now.getMinutes();
}

if(timeh > 12){
var timeh = timeh-12;
document.getElementById("time-small").innerHTML="下午" ;
}else{
document.getElementById("time-small").innerHTML="上午" ;
}
if(timeh < 10){
var timeh ="0"+ timeh;
}
}
document.getElementById("time").innerHTML=timeh+":"+ time ;
document.getElementById("tim").innerHTML= now ;
}

function yue(){

 y1=y1+1;
 if(y1==3){
 y1=1;
 }
 if(y1==2){
document.cookie="y=2";
document.getElementById("szblack").disabled = false;
var ssb = document.getElementById('ssb');ssb.style.transition = "0s"; ssb.style.background = "#565656";
 var ssa = document.getElementById('ssa');ssa.style.transition = "0s"; ssa.style.background = "#565656";

  var sz = document.getElementById('sz');sz.style.transition = "0s"; sz.style.background = "#565656";

   
   
 var A = document.getElementById('divB');A.style.transition = "0s"; A.style.background = "#565656";
  var F = document.getElementById('divF');F.style.transition = "0s"; F.style.background = "#565656";
 var IED = document.getElementById('IED');IED.style.transition = "0s"; IED.style.background = "#565656";
 var B = document.getElementById('divC');B.style.transition = "0s"; B.style.background = "#565656";
 var CF = document.getElementById('CF');CF.style.transition = "0s"; CF.style.background = "#565656";







    
    
  var D = document.getElementById('divE');D.style.transition = "0s"; D.style.background = "#565656";
 var DD = document.getElementById('DD');DD.style.transition = "0s"; DD.style.background = "#565656";
  var EF = document.getElementById('EF');EF.style.transition = "0s"; EF.style.background = "#565656";
   var G = document.getElementById('divG');G.style.transition = "0s"; G.style.background = "#565656";
  var GF = document.getElementById('GF');GF.style.transition = "0s"; GF.style.background = "#565656";
  var blackdiv = document.getElementById('black-div');blackdiv.style.transition = "0s"; blackdiv.style.background = "black";
  var FF = document.getElementById('FF');FF.style.transition = "0s"; FF.style.background = "#565656";
    var dq = document.getElementById('background');dq.style.transition = "0s"; dq.style.background = "#565656";
 var yuea=document.getElementById("yuea");

  yuea.setAttribute("src","yan.svg");
  if (screen.width > 640) { 
    document.body.style.transition = "1s";document.body.style.backgroundImage = "url(bj2b.jpg)";
    var dq = document.getElementById('dq');dq.style.transition = "0s"; dq.style.background = "#565656";
   } 

 }
 if(y1==1){
var ssb = document.getElementById('ssb');ssb.style.transition = "0s"; ssb.style.background = "white";
var ssa = document.getElementById('ssa');ssa.style.transition = "0s"; ssa.style.background = "white";
 document.cookie="y=1";
document.getElementById("szblack").disabled = true;
    
   var FF = document.getElementById('FF');FF.style.transition = "0s"; FF.style.background = "white";
     var F = document.getElementById('divF');F.style.transition = "0s"; F.style.background = "white";
var dq = document.getElementById('background');dq.style.transition = "0s"; dq.style.background = "white";
 var A = document.getElementById('divB');A.style.transition = "0s"; A.style.background = "white";
 var sz = document.getElementById('sz');sz.style.transition = "0s"; sz.style.background = "white";
var IED = document.getElementById('IED');IED.style.transition = "0s"; IED.style.background = "white";
  var B = document.getElementById('divC');B.style.transition = "0s"; B.style.background = "white";

    var D = document.getElementById('divE');D.style.transition = "0s"; D.style.background = "white";
 var DD = document.getElementById('DD');DD.style.transition = "0s"; DD.style.background = "white";
  var CF = document.getElementById('CF');CF.style.transition = "0s"; CF.style.background = "white";
    var EF = document.getElementById('EF');EF.style.transition = "0s"; EF.style.background = "white";
     var G = document.getElementById('divG');G.style.transition = "0s"; G.style.background = "white";
  var GF = document.getElementById('GF');GF.style.transition = "0s"; GF.style.background = "white";
  var blackdiv = document.getElementById('black-div');blackdiv.style.transition = "0s"; blackdiv.style.background = "none";
  
  var yuea=document.getElementById("yuea");

  yuea.setAttribute("src","yue.svg");
    if (screen.width > 640) { 
    document.body.style.transition = "1s";document.body.style.backgroundImage = "url(bj2.jpg)";
    var dq = document.getElementById('dq');dq.style.transition = "0s"; dq.style.background = "white";
   } 
 }
}
function ks(){


var musicname=localStorage.music;
bmusic=document.querySelector('.bmusic');
amusic= document.querySelector('.amusic');
bmusic.pause();
bmusic.load();

switch(musicname)
{
    case "1":
        amusic.src="rionos - ウィアートル (旅人).mp3";
            gc();
    break;
    case "2":
     amusic.src="ZAQ - Sparkling Daydream.mp3" ;
    break;
    case "3":
     amusic.src="鈴木雅之、伊原六花 - ラブ・ドラマティック (Love Dramatic).mp3";
        break;
    case "4":
      amusic.src="昆夏美 - 虹のかけら.mp3";
        break;
    case "5":
     amusic.src="平野绫、加藤英美里、福原香織、远藤綾 - もってけ！セーラーふく (拿去吧！水手服).mp3";
        break;
    case "6":
    amusic.src="放課後ティータイム - ふわふわ時間 (轻飘飘时间) (轻飘飘时间) (Single Version).mp3";
    gca();
        break;
    case "7":
    amusic.src="μ's - 愛してるばんざーい! (喜欢你万岁!).mp3";
        break;
        case "8":
        amusic.src="阿澄佳奈、松来未祐、大坪由佳 - 太陽曰く燃えよカオス (太阳说燃烧吧混沌).mp3";
        if(amusic.src!=""){
        
        gce();
        }
        break;
        default:
        break;
        }



bmusic.currentTime=localStorage.time;
	
    bmusic.play();
document.documentElement.scrollTop = localStorage.go;
localStorage.setItem("go",0);
localStorage.setItem("top",0);
localStorage.removeItem("time");
document.getElementById("szblack").disabled = true;
var blackdiv = document.getElementById('black-div');blackdiv.style.transition = "0s"; blackdiv.style.opacity = localStorage.black;
document.getElementById("szblack").value=localStorage.black*110;
if(y=="y=1"){
y1=2;
yue();
}
if(y=="y=2"){
y1=1;
yue();
}
}
function wx(){

 a=a+1;
 if(a==3){
 a=1;
 }
 if(a==2){
 var divr = document.getElementById('divr');divr.style.transition = "1s"; divr.style.opacity= "1";
 }
 if(a==1){
 var divr = document.getElementById('divr');divr.style.transition = "1s"; divr.style.opacity= "0";
 }
 }
 
 function qq(){
 b=b+1;
 if(b==3){
 b=1;
 }
 if(b==2){
 var divs = document.getElementById('divs');divs.style.transition = "1s"; divs.style.opacity= "1";
 }
 if(b==1){
 var divs = document.getElementById('divs');divs.style.transition = "1s"; divs.style.opacity= "0";
 }
 }
 
  function bb(){
 t=t+1;
 if(t==3){
 t=1;
 }
 if(t==2){
 var divx = document.getElementById('divx');divx.style.transition = "1s"; divx.style.opacity= "1";
 }
 if(t==1){
 var divx = document.getElementById('divx');divx.style.transition = "1s"; divx.style.opacity= "0";
 }
 }
   function tx(){
   c=c+1;
 if(c==3){
 c=1;
 }
 if(c==2){
 var butw = document.getElementById('butw');butw.style.transition = "2s"; butw.style.transform = "rotate(360deg)";
 }
 if(c==1){
var butw = document.getElementById('butw');butw.style.transition = "2s"; butw.style.transform = "rotate(-0deg)";
 }
 }


    
    
    
    bmusic=document.querySelector('.bmusic');
amusic= document.querySelector('.amusic');

function AA(){
	bmusic.pause();
	amusic.src="rionos - ウィアートル (旅人).mp3";
	localStorage.setItem("music",1);
	bmusic.load();
    bmusic.play();
    gc();
    
}
function AB(){
	bmusic.pause();
	amusic.src="ZAQ - Sparkling Daydream.mp3";
	localStorage.setItem("music",2);
	bmusic.load();
    bmusic.play();
          document.getElementById("musicp").innerHTML="";
}
function AC(){
	bmusic.pause();
	amusic.src="鈴木雅之、伊原六花 - ラブ・ドラマティック (Love Dramatic).mp3";
	localStorage.setItem("music",3);
	bmusic.load();
    bmusic.play();
          document.getElementById("musicp").innerHTML="";
}
function AD(){
	bmusic.pause();
	amusic.src="昆夏美 - 虹のかけら.mp3";
	localStorage.setItem("music",4);
	bmusic.load();
    bmusic.play();
          document.getElementById("musicp").innerHTML="";
}
function AE(){
	bmusic.pause();
	amusic.src="平野绫、加藤英美里、福原香織、远藤綾 - もってけ！セーラーふく (拿去吧！水手服).mp3";
	localStorage.setItem("music",5);
	bmusic.load();
    bmusic.play();
          document.getElementById("musicp").innerHTML="";
}
function AF(){
	bmusic.pause();
	amusic.src="放課後ティータイム - ふわふわ時間 (轻飘飘时间) (轻飘飘时间) (Single Version).mp3";
	localStorage.setItem("music",6);
	bmusic.load();
    bmusic.play();
    gca();
}
function AG(){
	bmusic.pause();
	amusic.src="μ's - 愛してるばんざーい! (喜欢你万岁!).mp3";
	localStorage.setItem("music",7);
	bmusic.load();
    bmusic.play();
          document.getElementById("musicp").innerHTML="";
}
function AL(){
	bmusic.pause();
	amusic.src="阿澄佳奈、松来未祐、大坪由佳 - 太陽曰く燃えよカオス (太阳说燃烧吧混沌).mp3";
	localStorage.setItem("music",8);
	bmusic.load();
    bmusic.play();
    gce();
}
window.onscroll = function() {scrollFunction()};
var topno = 0;
function scrollFunction() {console.log(121);
        
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    var no = document.getElementById('no');no.style.transition = "0.5s"; no.style.display = "inline";
document.getElementById("no").innerHTML="&#8743;";
        
    } 
    
    else {
    if(topno==0){
      var no = document.getElementById('no');no.style.transition = "0.5s"; no.style.display = "none";
      }
      document.getElementById("no").innerHTML="&#8744;";
    }
}
var notop;
function non() {


if(document.body.scrollTop!=0){
notop = document.documentElement.scrollTop;
 document.documentElement.scrollTop=0;
 
 
 topno = 1;
     var no = document.getElementById('no');no.style.transition = "0.5s"; no.style.diplay = "inline";
               document.getElementById("no").innerHTML="&#8744;";
  }else{


  document.documentElement.scrollTop=notop; 
  
 topno = 0;
     var no = document.getElementById('no');no.style.transition = "0.5s"; no.style.display = "inline";
               document.getElementById("no").innerHTML="&#8743;";
  }   

 }   


let lo=null;
function IE(){
clearTimeout(lo);
lo=setTimeout(function(){
   I=I+1;
 if(I==3){
 I=1;
 }
 if(I==2){
 var IED = document.getElementById('IED');IED.style.transition = "1s"; IED.style.marginLeft = "85%";
 
 var cb= document.getElementById('c-b');cb.style.transition = "0.5s"; cb.style.marginTop= "-5%";
var ca = document.getElementById('c-a');ca.style.transition = "0.5s"; ca.style.marginTop= "35%";
var cc = document.getElementById('c-c');cc.style.transition = "0.5s"; cc.style.marginTop= "-5%";
 setTimeout(function(){
var cc= document.getElementById('c-c');cc.style.transition = "0.5s"; cc.style.transform = "rotate(-45deg)";
var cb= document.getElementById('c-b');cb.style.transition = "0.5s"; cb.style.display= "none";
var ca= document.getElementById('c-a');ca.style.transition = "0.5s"; ca.style.transform = "rotate(45deg)";
},500)

 }
 if(I==1){
var IED = document.getElementById('IED');IED.style.transition = "1s"; IED.style.marginLeft = "0%";
var cc= document.getElementById('c-c');cc.style.transition = "0.5s"; cc.style.transform = "rotate(0deg)";

var ca= document.getElementById('c-a');ca.style.transition = "0.5s"; ca.style.transform = "rotate(0deg)";

 setTimeout(function(){
 var cb= document.getElementById('c-b');cb.style.transition = "0.1s"; cb.style.display= "inline";
 setTimeout(function(){
 var cb = document.getElementById('c-b');cb.style.transition = "0.5s"; cb.style.marginTop= "10%";
var ca = document.getElementById('c-a');ca.style.transition = "0.5s"; ca.style.marginTop= "20%";
var cc = document.getElementById('c-c');cc.style.transition = "0.5s"; cc.style.marginTop= "10%";
},100)
},500)
 }
 },500)
 }
 function lp(){
 clearTimeout(lo);
document.getElementById("tsb").innerHTML="✎...请不要连续点击！！！！";
var tsb = document.getElementById('tsb');tsb.style.display= "inline";
var ts = document.getElementById('ts');ts.style.display= "inline";
 var ts = document.getElementById('ts');ts.style.transition = "1s"; ts.style.height= "8vh";
 setTimeout(function(){
var ts = document.getElementById('ts');ts.style.transition = "0.2s"; ts.style.height= "0px";
var tsb = document.getElementById('tsb');tsb.style.display= "none";
setTimeout(function(){
var ts = document.getElementById('ts');ts.style.display= "none";
},200);
}, 3000);
function ts(){
var ts = document.getElementById('ts');ts.style.transition = "0.2s"; ts.style.height= "0px";
var tsb = document.getElementById('tsb');tsb.style.display= "none";
setTimeout(function(){
var ts = document.getElementById('ts');ts.style.display= "none";
},200);
}
 }
    function IETX(){
   Ic=Ic+1;
 if(Ic==3){
 Ic=1;
 }
 if(Ic==2){
 var IETX = document.getElementById('IETX');IETX.style.transition = "2s"; IETX.style.transform = "rotate(360deg)";
 }
 if(Ic==1){
var IETX = document.getElementById('IETX');IETX.style.transition = "2s"; IETX.style.transform = "rotate(-0deg)";
 }
 }
 function divB(){
 // 打开文章1
 localStorage.setItem("top", document.documentElement.scrollTop);
 
 bmusic=document.querySelector('.bmusic');
 bmusic.pause();
 localStorage.setItem("time",bmusic.currentTime);
 window.location.assign("1.html")
 }
  function yx(){
  // 打开意见反馈
   localStorage.setItem("top", document.documentElement.scrollTop);
 
 bmusic=document.querySelector('.bmusic');
 bmusic.pause();
 localStorage.setItem("time",bmusic.currentTime);
window.location.assign("n.html")
var audio=document.getElementById("audio");
}
  function bq(){
 var bqq = document.getElementById('bqq');bqq.style.transition = "1s"; bqq.style.marginLeft = "-100vw";
document.body.style.overflow = 'auto';
 }
function divC(){
// 打开文章2
localStorage.setItem("top", document.documentElement.scrollTop);
bmusic=document.querySelector('.bmusic');

bmusic.pause();
 localStorage.setItem("time",bmusic.currentTime);
window.location.assign("2.html")
 }
  function abq(){
 var abqq = document.getElementById('abqq');abqq.style.transition = "1s"; abqq.style.marginLeft = "-100vw";
document.body.style.overflow = 'auto';
 }
 function divE(){
 // 打开文章3
 localStorage.setItem("top", document.documentElement.scrollTop);
 bmusic=document.querySelector('.bmusic');
 bmusic.pause();
 localStorage.setItem("time",bmusic.currentTime);
 window.location.assign("3.html")
 }
  function bbq(){
 var bbqq = document.getElementById('bbqq');bbqq.style.transition = "1s"; bbqq.style.marginLeft = "-100vw";
document.body.style.overflow = 'auto';
 }
  function divF(){
  // 打开文章5
  localStorage.setItem("top", document.documentElement.scrollTop);
  bmusic=document.querySelector('.bmusic');
  bmusic.pause();
 localStorage.setItem("time",bmusic.currentTime);
window.location.assign("5.html")
 }
  function dbq(){
 var dbqq = document.getElementById('dbqq');dbqq.style.transition = "1s"; dbqq.style.marginLeft = "-100vw";
document.body.style.overflow = 'auto';
 }
 function divD(){
 // 打开文章4
 localStorage.setItem("top", document.documentElement.scrollTop);
 bmusic=document.querySelector('.bmusic');
 bmusic.pause();
 localStorage.setItem("time",bmusic.currentTime);
 window.location.assign("4.html")
 }
  function cbq(){
 var cbqq = document.getElementById('cbqq');cbqq.style.transition = "1s"; cbqq.style.marginLeft = "-100vw";
document.body.style.overflow = 'auto';
 }
 function lia(){
 // 打开更多
 bmusic=document.querySelector('.bmusic');
 bmusic.pause();
 localStorage.setItem("time",bmusic.currentTime);
 window.location.assign("f.html")
 }
  function limy(){
  // 打开自我介绍
  bmusic=document.querySelector('.bmusic');
  bmusic.pause();
 localStorage.setItem("time",bmusic.currentTime);
 window.location.assign("my.html")

 }
   function libook(){
   // 打开备忘录
   bmusic=document.querySelector('.bmusic');
   bmusic.pause();
 localStorage.setItem("time",bmusic.currentTime);
 window.location.assign("book.html")
 }
  function fbq(){
 var fbqq = document.getElementById('fbqq');fbqq.style.transition = "1s"; fbqq.style.marginLeft = "-100vw";
document.body.style.overflow = 'auto';

 }
   function mybq(){
 var mybqq = document.getElementById('mybqq');mybqq.style.transition = "1s"; mybqq.style.marginLeft = "-100vw";
document.body.style.overflow = 'auto';

 }
  function sza(){
 s=s+1;
 if(s==3){
 s=1;
 }
 if(s==2){
 var szabutton = document.getElementById('szabutton');szabutton.style.transition = "0.2s"; szabutton.style.background = "white";
 var yuea = document.getElementById('yue');yuea.style.transition = "0.2s"; yuea.style.display = "none";
 }
 if(s==1){
 var szabutton = document.getElementById('szabutton');szabutton.style.transition = "0.2s"; szabutton.style.background = "#FF6699";
 var yuea = document.getElementById('yue');yuea.style.transition = "0.2s"; yuea.style.display = "inline";
 }
 }
 function szblack(){
 // 亮度的设置
 var szblack = document.getElementById("szblack").value;
 szblack=szblack/110;
 // 设置亮度的值为输入的值的110分之1
 var blackdiv = document.getElementById('black-div');blackdiv.style.transition = "0s"; blackdiv.style.opacity = szblack;
 // 设置亮度
localStorage.setItem("black",szblack);
// 用html5应用缓存 缓存亮度
 }
  function szb(){
 sb=sb+1;
 if(sb==3){
 sb=1;
 }
 if(sb==2){
 var szbbutton = document.getElementById('szbbutton');szbbutton.style.transition = "0.2s"; szbbutton.style.background = "white";
 var music = document.getElementById('music');music.style.transition = "0.2s"; music.style.display = "none";
 }
 if(sb==1){
 var szbbutton = document.getElementById('szbbutton');szbbutton.style.transition = "0.2s"; szbbutton.style.background = "#FF6699";
 var music = document.getElementById('music');music.style.transition = "0.2s"; music.style.display = "inline";
 }
 }
  function szc(){
 sc=sc+1;
 if(sc==3){
 sc=1;
 }
 if(sc==2){
 var szcbutton = document.getElementById('szcbutton');szcbutton.style.transition = "0.2s"; szcbutton.style.background = "white";
  time1=2;
 }
 if(sc==1){
 var szcbutton = document.getElementById('szcbutton');szcbutton.style.transition = "0.2s"; szcbutton.style.background = "#FF6699";
  time1=1;
 }
 }

function szno(){
 var sz = document.getElementById('sz');sz.style.transition = "1s"; sz.style.marginLeft = "-100vw";
document.body.style.overflow = 'auto';
}
 function lib(){
 var sz = document.getElementById('sz');sz.style.transition = "1s"; sz.style.marginLeft = "100vw";
 I=I+1;
 if(I==3){
 I=1;
 }
 setTimeout(function(){
var IED = document.getElementById('IED');IED.style.transition = "0.2s"; IED.style.marginLeft = "0%";
var cc= document.getElementById('c-c');cc.style.transition = "0.2s"; cc.style.transform = "rotate(0deg)";

var ca= document.getElementById('c-a');ca.style.transition = "0.2s"; ca.style.transform = "rotate(0deg)";

 setTimeout(function(){
 var cb= document.getElementById('c-b');cb.style.transition = "0.2s"; cb.style.display= "inline";
 setTimeout(function(){
 var cb = document.getElementById('c-b');cb.style.transition = "0.2s"; cb.style.marginTop= "10%";
var ca = document.getElementById('c-a');ca.style.transition = "0.2s"; ca.style.marginTop= "20%";
var cc = document.getElementById('c-c');cc.style.transition = "0.2s"; cc.style.marginTop= "10%";
},100)
},200)
 
 },200)
 document.body.style.overflow = 'hidden';
 }

function ssclean(){

var clean=confirm("确定要清理缓存！！！！\n清理后不能恢复！！！！\n清理范围包括备忘录内容");
if (clean ==true)
{
var musicc = document.getElementById("audio");
if(musicc.paused){

localStorage.clear();
	bmusic.pause();
	amusic.src="";
	bmusic.load();
    bmusic.play();
 document.getElementById("musicp").innerHTML="";
setTimeout(function(){
alert("清理成功！");
},2000);
}else{
alert("清理失败！\n原因：因为音乐正在播放\n请改变音乐后再试");
}
}
}
var ssn=1;
function ssno(){
ssn=ssn+1;
if(ssn==3){
ssn=1;
}
if(ssn==2){

var ssdiv = document.getElementById('ss-div');ssdiv.style.transition = "0.5s"; ssdiv.style.marginTop = "100px";
}

if(ssn==1){

var ssdiv = document.getElementById('ss-div');ssdiv.style.transition = "0.5s"; ssdiv.style.marginTop = "0px";
}
}

function ss() {
var ssb = document.getElementById('ssb');ssb.style.display = "block";
 

  input = document.getElementById("ssa");
  filter = input.value.toUpperCase();
  table = document.getElementById("ssb");
  tr = table.getElementsByTagName("tr");
  if(filter==""){
  var ssb = document.getElementById('ssb');ssb.style.display = "none";
  }

  for (ssi = 0; ssi < tr.length; ssi++) {
    td = tr[ssi].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[ssi].style.display = "block";
      } else {
        tr[ssi].style.display = "none";
        
      }
    }
  }
}

