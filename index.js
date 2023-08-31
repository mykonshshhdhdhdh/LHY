document.documentElement.scrollTop = 0;

 
 
 

var a=1;
var b=1;
var c=1;
var t=1;
var y=1;
var I=1;
var Ic=1;
var s=1;
var sb=1;
var sc=1;


setInterval("time()","1000");
var time1=1;
function time(){
var now = new Date();
var time = now.getMinutes();
var timeh = now.getHours();
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
 y=y+1;
 if(y==3){
 y=1;
 }
 if(y==2){
document.cookie="y=2";
 var bq = document.getElementById('bq');bq.style.transition = "1s"; bq.style.background = "#565656";
 
 var abq = document.getElementById('abq');abq.style.transition = "1s"; abq.style.background = "#565656";
 var bbq = document.getElementById('bbq');bbq.style.transition = "1s"; bbq.style.background = "#565656";
  var sz = document.getElementById('sz');sz.style.transition = "1s"; sz.style.background = "#565656";
 var cbq = document.getElementById('cbq');cbq.style.transition = "1s"; cbq.style.background = "#565656";
  var fbq = document.getElementById('fbq');fbq.style.transition = "1s"; fbq.style.background = "#565656";
var mybq = document.getElementById('mybq');mybq.style.transition = "1s"; mybq.style.background = "#565656";
  
   var dbq = document.getElementById('dbq');dbq.style.transition = "1s"; dbq.style.background = "#565656";
   
   
 var A = document.getElementById('divB');A.style.transition = "1s"; A.style.background = "#565656";
  var F = document.getElementById('divF');F.style.transition = "1s"; F.style.background = "#565656";
 var IED = document.getElementById('IED');IED.style.transition = "1s"; IED.style.background = "#565656";
 var B = document.getElementById('divC');B.style.transition = "1s"; B.style.background = "#565656";
 var CF = document.getElementById('CF');CF.style.transition = "1s"; CF.style.background = "#565656";

  var D = document.getElementById('divE');D.style.transition = "1s"; D.style.background = "#565656";
 var DD = document.getElementById('DD');DD.style.transition = "1s"; DD.style.background = "#565656";
  var EF = document.getElementById('EF');EF.style.transition = "1s"; EF.style.background = "#565656";
   var G = document.getElementById('divG');G.style.transition = "1s"; G.style.background = "#565656";
  var GF = document.getElementById('GF');GF.style.transition = "1s"; GF.style.background = "#565656";
  var FF = document.getElementById('FF');FF.style.transition = "1s"; FF.style.background = "#565656";
 var yuea=document.getElementById("yuea");

  yuea.setAttribute("src","yan.svg");
  if (screen.width > 640) { 
    document.body.style.transition = "1s";document.body.style.backgroundImage = "url(bj2b.jpg)";
    var dq = document.getElementById('dq');dq.style.transition = "1s"; dq.style.background = "#565656";
   } 
 }
 if(y==1){

 document.cookie="y=1";
    var dbq = document.getElementById('dbq');dbq.style.transition = "1s"; dbq.style.background = "white";
    
   var FF = document.getElementById('FF');FF.style.transition = "1s"; FF.style.background = "white";
     var F = document.getElementById('divF');F.style.transition = "1s"; F.style.background = "white";
  var bq = document.getElementById('bq');bq.style.transition = "1s"; bq.style.background = "white";
 var A = document.getElementById('divB');A.style.transition = "1s"; A.style.background = "white";
 var sz = document.getElementById('sz');sz.style.transition = "1s"; sz.style.background = "white";
var IED = document.getElementById('IED');IED.style.transition = "1s"; IED.style.background = "white";
  var B = document.getElementById('divC');B.style.transition = "1s"; B.style.background = "white";
   var fbq = document.getElementById('fbq');fbq.style.transition = "1s"; fbq.style.background = "white"; 
   var abq = document.getElementById('abq');abq.style.transition = "1s"; abq.style.background = "white";
 var bbq = document.getElementById('bbq');bbq.style.transition = "1s"; bbq.style.background = "white";
 var cbq = document.getElementById('cbq');cbq.style.transition = "1s"; cbq.style.background = "white";
  var mybq = document.getElementById('mybq');mybq.style.transition = "1s"; mybq.style.background = "white";
    var D = document.getElementById('divE');D.style.transition = "1s"; D.style.background = "white";
 var DD = document.getElementById('DD');DD.style.transition = "1s"; DD.style.background = "white";
  var CF = document.getElementById('CF');CF.style.transition = "1s"; CF.style.background = "white";
    var EF = document.getElementById('EF');EF.style.transition = "1s"; EF.style.background = "white";
     var G = document.getElementById('divG');G.style.transition = "1s"; G.style.background = "white";
  var GF = document.getElementById('GF');GF.style.transition = "1s"; GF.style.background = "white";
  var yuea=document.getElementById("yuea");

  yuea.setAttribute("src","yue.svg");
    if (screen.width > 640) { 
    document.body.style.transition = "1s";document.body.style.backgroundImage = "url(bj2.jpg)";
    var dq = document.getElementById('dq');dq.style.transition = "1s"; dq.style.background = "white";
   } 
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
 var butw = document.getElementById('butw');butw.style.transition = "4s"; butw.style.transform = "rotate(360deg)";
 }
 if(c==1){
var butw = document.getElementById('butw');butw.style.transition = "4s"; butw.style.transform = "rotate(-0deg)";
 }
 }
 function yx(){
window.open('n.html');
var audio=document.getElementById("audio");
document.cookie="a=audio.duration;";
}

    
    
    
    bmusic=document.querySelector('.bmusic')
amusic= document.querySelector('.amusic')

function AA(){
	bmusic.pause()
	amusic.src="rionos - ウィアートル (旅人).mp3"
	bmusic.load()
    bmusic.play()
}
function AB(){
	bmusic.pause()
	amusic.src="ZAQ - Sparkling Daydream.mp3"
	bmusic.load()
    bmusic.play()
}
function AC(){
	bmusic.pause()
	amusic.src="鈴木雅之、伊原六花 - ラブ・ドラマティック (Love Dramatic).mp3"
	bmusic.load()
    bmusic.play()
}
function AD(){
	bmusic.pause()
	amusic.src="昆夏美 - 虹のかけら.mp3"
	bmusic.load()
    bmusic.play()
}
function AE(){
	bmusic.pause()
	amusic.src="平野绫、加藤英美里、福原香織、远藤綾 - もってけ！セーラーふく (拿去吧！水手服).mp3"
	bmusic.load()
    bmusic.play()
}
function AF(){
	bmusic.pause()
	amusic.src="放課後ティータイム - ふわふわ時間 (轻飘飘时间) (轻飘飘时间) (Single Version).mp3"
	bmusic.load()
    bmusic.play()
}
function AG(){
	bmusic.pause()
	amusic.src="μ's - 愛してるばんざーい! (喜欢你万岁!).mp3"
	bmusic.load()
    bmusic.play()
}
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {console.log(121);
        
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    var no = document.getElementById('no');no.style.transition = "0.5s"; no.style.opacity = "1";

                
        
    } 
    
    else {
      var no = document.getElementById('no');no.style.transition = "0.5s"; no.style.opacity = "0";
      
    }
}
function non() {

   var ssn= setInterval(function(){ 
   if(document.documentElement.scrollTop>20){nntop();
   }else{
   clearInterval(ssn);
   }
    }, 10);
 
    
    
}
function nntop(){

var nn = document.documentElement.scrollTop;
    document.body.scrollTop = nn-51 ;
    document.documentElement.scrollTop = nn-51 ;

    }
function IE(){
   I=I+1;
 if(I==3){
 I=1;
 }
 if(I==2){
 var IED = document.getElementById('IED');IED.style.transition = "1s"; IED.style.marginLeft = "85%";
 var ca= document.getElementById('c-a');ca.style.transition = "1s"; ca.style.transform = "rotate(30deg)";
var cb = document.getElementById('c-b');cb.style.transition = "1s"; cb.style.opacity= "0";
var cc= document.getElementById('c-c');cc.style.transition = "1s"; cc.style.transform = "rotate(-30deg)";
 }
 if(I==1){
var IED = document.getElementById('IED');IED.style.transition = "1s"; IED.style.marginLeft = "0%";
var ca= document.getElementById('c-a');ca.style.transition = "1s"; ca.style.transform = "rotate(0deg)";
var cb = document.getElementById('c-b');cb.style.transition = "1s"; cb.style.opacity= "1";
var cc= document.getElementById('c-c');cc.style.transition = "1s"; cc.style.transform = "rotate(0deg)";
 }
 }
    function IETX(){
   Ic=Ic+1;
 if(Ic==3){
 Ic=1;
 }
 if(Ic==2){
 var IETX = document.getElementById('IETX');IETX.style.transition = "4s"; IETX.style.transform = "rotate(360deg)";
 }
 if(Ic==1){
var IETX = document.getElementById('IETX');IETX.style.transition = "4s"; IETX.style.transform = "rotate(-0deg)";
 }
 }
 function divB(){
 var bqq = document.getElementById('bqq');bqq.style.transition = "1s"; bqq.style.marginLeft = "100vw";

 document.body.style.overflow = 'hidden';
 }
  function bq(){
 var bqq = document.getElementById('bqq');bqq.style.transition = "1s"; bqq.style.marginLeft = "-100vw";
document.body.style.overflow = 'auto';
 }
function divC(){
 var abqq = document.getElementById('abqq');abqq.style.transition = "1s"; abqq.style.marginLeft = "100vw";

 document.body.style.overflow = 'hidden';
 }
  function abq(){
 var abqq = document.getElementById('abqq');abqq.style.transition = "1s"; abqq.style.marginLeft = "-100vw";
document.body.style.overflow = 'auto';
 }
 function divE(){
 var bbqq = document.getElementById('bbqq');bbqq.style.transition = "1s"; bbqq.style.marginLeft = "100vw";

 document.body.style.overflow = 'hidden';
 }
  function bbq(){
 var bbqq = document.getElementById('bbqq');bbqq.style.transition = "1s"; bbqq.style.marginLeft = "-100vw";
document.body.style.overflow = 'auto';
 }
  function divF(){
 var dbqq = document.getElementById('dbqq');dbqq.style.transition = "1s"; dbqq.style.marginLeft = "100vw";

 document.body.style.overflow = 'hidden';
 }
  function dbq(){
 var dbqq = document.getElementById('dbqq');dbqq.style.transition = "1s"; dbqq.style.marginLeft = "-100vw";
document.body.style.overflow = 'auto';
 }
 function divD(){
 var cbqq = document.getElementById('cbqq');cbqq.style.transition = "1s"; cbqq.style.marginLeft = "100vw";

 document.body.style.overflow = 'hidden';
 }
  function cbq(){
 var cbqq = document.getElementById('cbqq');cbqq.style.transition = "1s"; cbqq.style.marginLeft = "-100vw";
document.body.style.overflow = 'auto';
 }
 function lia(){
 var fbqq = document.getElementById('fbqq');fbqq.style.transition = "1s"; fbqq.style.marginLeft = "100vw";
 I=I+1;
 if(I==3){
 I=1;
 }
var IED = document.getElementById('IED');IED.style.transition = "1s"; IED.style.marginLeft = "0%";
 document.body.style.overflow = 'hidden';
 }
  function limy(){
 var mybqq = document.getElementById('mybqq');mybqq.style.transition = "1s"; mybqq.style.marginLeft = "100vw";
 I=I+1;
 if(I==3){
 I=1;
 }
var IED = document.getElementById('IED');IED.style.transition = "1s"; IED.style.marginLeft = "0%";
 document.body.style.overflow = 'hidden';
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
 var szabutton = document.getElementById('szabutton');szabutton.style.transition = "0.2s"; szabutton.style.background = "#FF88B9";
 var yuea = document.getElementById('yue');yuea.style.transition = "0.2s"; yuea.style.display = "inline";
 }
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
 var szbbutton = document.getElementById('szbbutton');szbbutton.style.transition = "0.2s"; szbbutton.style.background = "#FF88B9";
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
 var szcbutton = document.getElementById('szcbutton');szcbutton.style.transition = "0.2s"; szcbutton.style.background = "#FF88B9";
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
 var IED = document.getElementById('IED');IED.style.transition = "1s"; IED.style.marginLeft = "0%";
 document.body.style.overflow = 'hidden';
 }
 function lic(){
window.open('pl.html');
 }


