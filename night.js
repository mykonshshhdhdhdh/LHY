var n=0;
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
}
if(n==2){
document.cookie="y=1";
  var yuea=document.getElementById("yuea");

  yuea.setAttribute("src","yue.svg");
  document.body.style.background= "white";
}
}