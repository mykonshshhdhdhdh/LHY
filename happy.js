
var d = new Date();
var x = d.getUTCDate();
var y = d.getMonth();
var r = d.getFullYear() - 2023;
var h = d.getHours();
// 0=1月，1=2月
// x是日期，y是月份

if(x==27&&y==9){
document.getElementById("tsb").innerHTML="✿松来未祐一路走好";
var l=document.getElementById('ts');l.style.transitionl="0s";l.style.filter="grayscale(100%)";
}else{
var l=document.getElementById('ts');l.style.transitionl="0s";l.style.filter="grayscale(0%)";
}
if(x==18&&y==8){
document.getElementById("tsb").innerHTML="✎...祝站长生日快乐！！！";
}
if(x==1&&y==9){
document.getElementById("tsb").innerHTML="✎...国庆节快乐！！！";
}
if(x==17&&y==7){
document.getElementById("tsb").innerHTML="✎...今天是建站第"+r+"周年！！！";



}
if(x==14&&y==9){
document.getElementById("tsb").innerHTML="✎...祝五月七日茴香学姐生日快乐！！！";
} 
if(x==21&&y==9){
document.getElementById("tsb").innerHTML="✎...祝绘里学姐生日快乐！！！";
} 
if(x==11&&y==10){
document.getElementById("tsb").innerHTML="✎...祝阿梓喵生日快乐！！！";
} 
if(x==27&&y==10){
document.getElementById("tsb").innerHTML="✎...祝平泽唯生日快乐！！！";
} 
if(x==26&&y==12){
document.getElementById("tsb").innerHTML="✎...祝真锅和生日快乐！！！";
}
if(x==15&&y==0){
document.getElementById("tsb").innerHTML="✎...祝mio生日快乐！！！";
}
if(x==22&&y==1){
document.getElementById("tsb").innerHTML="✎...祝平泽优生日快乐！！！";
} 
if(x==19&&y==3){
document.getElementById("tsb").innerHTML="✎...祝真姬生日快乐！！！";
} 
if(h >22||h<3){
document.getElementById("tsb").innerHTML=`<spen style="font-size:1.3em;">Z</spen>Zz...夜深了，早点入睡吧！！！`;
var l=document.getElementById('ts');l.style.transitionl="0s";l.style.background="#ffdd71";
}else{
var l=document.getElementById('ts');l.style.transitionl="0s";l.style.background="#ffdd71";
}