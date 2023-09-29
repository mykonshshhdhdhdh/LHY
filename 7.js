
var cara=new Array();
cara[1]="00:00";
cara[2]=" 作词 : riya";
cara[3]="00:01";
cara[4]=" 作曲 : rionos";
cara[5]="00:27";
cara[6]="ちっぽけな星よ";
cara[7]="00:34";
cara[8]="まわり続けて";
cara[9]="00:42";
cara[10]="あふれそうに輝いて";
cara[11]="00:49";
cara[12]="流れて行く";
cara[13]="00:53";
cara[14]="綺麗なままで";
cara[15]="01:24";
cara[16]="歩き出す愛を連れて";
cara[17]="01:33";
cara[18]="奏でるように";
cara[19]="01:39";
cara[20]="信じてるどんな形でも";
cara[21]="01:50";
cara[22]="太陽は昇るからきっと";
cara[23]="01:50";
cara[24]="☆music☆";
cara[25]="02:15";
cara[26]="ちっぽけな星に";
cara[27]="02:22";
cara[28]="落ちた涙は";
cara[29]="02:29";
cara[30]="あふれそうな優しさを";
cara[31]="02:36";
cara[32]="見せてくれる";
cara[33]="02:40";
cara[34]="もう一度笑って";
cara[35]="03:22";
cara[36]="その胸の中には何があるの?";
cara[37]="03:41";
cara[38]="歩き出す愛になって";
cara[39]="03:50";
cara[40]="光の中へ";
cara[41]="03:56";
cara[42]="大丈夫どんな未来でも";
cara[43]="04:07";
cara[44]="太陽は昇るからきっと";



bmusic=document.getElementById('audio');

 var v=0;
function gc(sou){

var so=setInterval(function(){ 
var musicname=localStorage.music;
switch(musicname)
{
    case "1":
          m();
    break;
    default:

    break;
        }

    }, 1000);

}

function m(){
var b=Math.trunc(bmusic.currentTime+0.3);
if(b>60){
var tm=Math.trunc(b/60);
var ta=tm*60;
var tc=b-ta;
if(tm<=9){
var tm="0"+tm;
}
if(tc<=9){
var tc="0"+tc;
}
var t=tm+":"+tc;


}else{
if(b>9){
var t="00:"+b;
}else{
var t="00:0"+b;
}
}

for(var c=0;c<=44;c++){
if(cara[v]==t){
v=v+1;
document.getElementById("musicp").innerHTML=cara[v];
break;
}else{
v=c;

}
}
}

