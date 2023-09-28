var y = document.cookie; 
if(y=="y=2")
{
 document.body.style.background= "#565656";

  var BC = document.getElementById('BC');BC.style.transition = "0s"; BC.style.color = "white";
  var BB = document.getElementById('BB');BB.style.transition = "0s"; BB.style.color = "white";
  var BE = document.getElementById('BE');BE.style.transition = "0s"; BE.style.color = "white
}
if(y=="y=1")
{
document.body.style.background= "white";
var BC = document.getElementById('BC');BC.style.transition = "0s"; BC.style.color = "#333333";
    var BB = document.getElementById('BB');BB.style.transition = "0s"; BB.style.color = "black";
    var BE = document.getElementById('BE');BE.style.transition = "0s"; BE.style.color = "black";
}
var n=0;

var y = document.cookie; 
if(y=="y=2"){
yuea.setAttribute("src","yan.svg");
n=1;


}else{
yuea.setAttribute("src","yue.svg");
n=2
}
function night(){
n=n+1;
if(n==3){
n=1;
}
if(n==1){
document.cookie="y=2";
  var yuea=document.getElementById("yuea");

  yuea.setAttribute("src","yan.svg");
  document.body.style.background= "#565656";
  var BC = document.getElementById('BC');BC.style.transition = "0s"; BC.style.color = "white";
  var BB = document.getElementById('BB');BB.style.transition = "0s"; BB.style.color = "white";
  var BE = document.getElementById('BE');BE.style.transition = "0s"; BE.style.color = "white";
}
if(n==2){
document.cookie="y=1";
  var yuea=document.getElementById("yuea");

  yuea.setAttribute("src","yue.svg");
  document.body.style.background= "white";
  var BC = document.getElementById('BC');BC.style.transition = "0s"; BC.style.color = "#333333";
    var BB = document.getElementById('BB');BB.style.transition = "0s"; BB.style.color = "black";
    var BE = document.getElementById('BE');BE.style.transition = "0s"; BE.style.color = "black";
}
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
function none(){
var black = document.getElementById('black');black.style.transition = "0s"; black.style.display = "none";
document.body.style.overflow = 'auto';
if (screen.width < 640) {
var blackA = document.getElementById('blackA');blackA.style.transition = "0.5s"; blackA.style.width = "100vw";
var blackA = document.getElementById('blackA');blackA.style.transition = "0.5s"; blackA.style.marginLeft = "0vw";
 ha=1;}
}
function blackA(){
document.body.style.overflow = 'hidden';
var black = document.getElementById('black');black.style.transition = "0s"; black.style.display = "inline";
}
function fh(){
window.history.back();

}
var ha=1;
function h(event){
if (screen.width < 640) {
ha=ha+1;
if(ha==3){
ha=1;
}
if(ha==2){

var blackA = document.getElementById('blackA');blackA.style.transition = "0.5s"; blackA.style.width = "150vw";
var e = event || window.event;
var x = e.screenX;
var y = document.body.scrollWidth/3;  
var ya=y+y;
var yb=ya+y;
if(x < y && x>0){
var blackA = document.getElementById('blackA');blackA.style.transition = "0.5s"; blackA.style.marginLeft = "0vw";
}
if(x > y && x < ya ){
var blackA = document.getElementById('blackA');blackA.style.transition = "0.5s"; blackA.style.marginLeft = "-20vw";
}
if(x > ya && x < yb ){
var blackA = document.getElementById('blackA');blackA.style.transition = "0.5s"; blackA.style.marginLeft = "-50vw";
}

}
if(ha==1){
var blackA = document.getElementById('blackA');blackA.style.transition = "0.5s"; blackA.style.width = "100vw";
var blackA = document.getElementById('blackA');blackA.style.transition = "0.5s"; blackA.style.marginLeft = "0vw";

}
}
}
function mybq(){

if(history.length==1){
localStorage.setItem("go",localStorage.top);
window.location.assign("index.html")
}else{
localStorage.setItem("go",localStorage.top);
window.history.go(-1)
}

}
