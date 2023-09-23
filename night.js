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
}
if(n==2){
document.cookie="y=1";
  var yuea=document.getElementById("yuea");

  yuea.setAttribute("src","yue.svg");
  document.body.style.background= "white";
}
}