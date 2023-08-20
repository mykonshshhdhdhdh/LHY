document.documentElement.scrollTop = 0;

var a=1;
var b=1;
var c=1;
var t=1;
var y=1;
function yue(){
 y=y+1;
 if(y==3){
 y=1;
 }
 if(y==2){
 var dq = document.getElementById('dq');dq.style.transition = "1s"; dq.style.background = "#565656";
 
 var B = document.getElementById('divC');B.style.transition = "1s"; B.style.background = "#565656";
 var CF = document.getElementById('CF');CF.style.transition = "1s"; CF.style.background = "#565656";

  var D = document.getElementById('divE');D.style.transition = "1s"; D.style.background = "#565656";
 var DD = document.getElementById('DD');DD.style.transition = "1s"; DD.style.background = "#565656";
  var EF = document.getElementById('EF');EF.style.transition = "1s"; EF.style.background = "#565656";
   var G = document.getElementById('divG');G.style.transition = "1s"; G.style.background = "#565656";
  var GF = document.getElementById('GF');GF.style.transition = "1s"; GF.style.background = "#565656";
 var yuea=document.getElementById("yuea");

  yuea.setAttribute("src","yan.svg");
 }
 if(y==1){
 var dq = document.getElementById('dq');dq.style.transition = "1s"; dq.style.background = "white";

  var B = document.getElementById('divC');B.style.transition = "1s"; B.style.background = "white";
  
    var D = document.getElementById('divE');D.style.transition = "1s"; D.style.background = "white";
 var DD = document.getElementById('DD');DD.style.transition = "1s"; DD.style.background = "white";
  var CF = document.getElementById('CF');CF.style.transition = "1s"; CF.style.background = "white";
    var EF = document.getElementById('EF');EF.style.transition = "1s"; EF.style.background = "white";
     var G = document.getElementById('divG');G.style.transition = "1s"; G.style.background = "white";
  var GF = document.getElementById('GF');GF.style.transition = "1s"; GF.style.background = "white";
  var yuea=document.getElementById("yuea");

  yuea.setAttribute("src","yue.svg");
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
 var x;
	var r=confirm("我的邮箱是\n2528197707@qq.com\n现在要前往QQ邮箱，请您确认");
	if (r==true){
		x="你按下了\"确定\"按钮!";
		window.open("https://wap.mail.qq.com");
	}
	else{
		x="你按下了\"取消\"按钮!";
	}
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
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
