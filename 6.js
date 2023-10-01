
var carb=new Array();
carb[1]="00:00";
carb[2]="作词 : 秋山澪";
carb[3]="00:01";
carb[4]="作曲 : 琴吹紬";
carb[5]="00:06";
carb[6]="編曲：琴吹紬";
carb[7]="00:11";
carb[8]="キミを見てるといつもハートDoKi☆DoKi<br>每次看到你的样子我的心总是砰砰直跳";
carb[9]="00:16";
carb[10]="揺れる思いはマシュマロみたいにふわ☆ふわ<br>我微微颤动的思念像棉花糖般轻轻飘飘";
carb[11]="00:21";
carb[12]="いつもがんばるキミの横顔<br>看着你的侧脸 总是那么努力";
carb[13]="00:26";
carb[14]="ずっと見てても気づかないよね<br>对你注视再久 你也不会留意";
carb[15]="00:32";
carb[16]="夢の中なら二人の距離縮められるのにな<br>要是在梦里该多好那样我就能拉近你我之间的距离";
carb[17]="00:43";
carb[18]="あぁ カミサマお願い<br>啊 神啊求求你";
carb[19]="00:46";
carb[20]="二人だけのDream Timeください☆<br>赐予我一段 与你独处的美梦时光";
carb[21]="00:54";
carb[22]="お気に入りのうさちゃん抱いて今夜もオヤスミ<br>我要抱着我心爱的小兔希望今夜早早步入梦乡";
carb[23]="01:04";
carb[24]="ふわふわtime ふわふわtime ふわふわtime<br>轻飘飘时间～轻飘飘时间～轻飘飘时间～";
carb[25]="01:13";
carb[26]="ふとした仕草に今日もハートZuKi★ZuKi<br>你不经意间的举动今天又让我阵阵心痛";
carb[27]="01:19";
carb[28]="さりげな笑顔を深読みしすぎてOver heat！<br>你漫不经心的笑容总是会让我兴奋过度";
carb[29]="01:23";
carb[30]="いつか目にしたキミのマジ顔<br>曾何几时 见过你认真的神情";
carb[31]="01:28";
carb[32]="瞳閉じても浮(ふ)かんでくるよ<br>闭上双眼 也会浮现在我眼前";
carb[33]="01:33";
carb[34]="夢でいいから二人だけの<br>即使是一场梦也好<br>Sweet time欲しいの<br>好想要一段 属于我们的甜蜜时光";
carb[35]="01:45";
carb[36]="あぁ カミサマどうして<br>啊 神啊为什么";
carb[37]="01:47";
carb[38]="好きになるほどDream nightせつないの<br>喜欢得越深 夜晚的梦境就越伤心";
carb[39]="01:55";
carb[40]="とっておきのくまちゃん出したし今夜は大丈夫かな？<br>我已找出了珍藏的小熊不知今夜是否还会一样？";
carb[41]="02:33";
carb[42]="もすこし勇気ふるって<br>要是能够拿出些勇气";
carb[43]="02:38";
carb[44]="自然に話せば<br>自然而然地和你说说话";
carb[45]="02:44";
carb[46]="何かが変わるのかな？<br>或许就会有一点点改变？";
carb[47]="02:49";
carb[48]="そんな気するけど<br>我一直有这样的预感";
carb[49]="02:57";
carb[50]="だけどそれが一番難しいのよ<br>可是这一点偏偏就是最难的啊";
carb[51]="02:60";
carb[52]="話のきっかけとかどうしよ<br>不知该找什么话题来开口";
carb[53]="03:02";
carb[54]="てか段取り考えてる時点で全然自然じゃないよね<br>而且像这样考虑好再开口根本就不能叫做自然而然嘛";
carb[55]="03:08";
carb[56]="あぁもういいや寝ちゃお寝ちゃお寝ちゃお--っ！<br>唉算了还是洗洗睡吧洗洗睡吧";
carb[57]="03:13";
carb[58]="あぁ カミサマお願い<br>啊 神啊求求你";
carb[59]="03:15";
carb[60]="一度だけのMiracle Timeください！<br>赐予我一次 一生一度的奇迹时光";
carb[61]="03:23";
carb[62]="もしすんなり話せればその後は···どうにかなるよね<br>若是和你交谈顺利的话 以后的事情···总会有办法";
carb[63]="03:33";
carb[64]="ふわふわtime ふわふわtime ふわふわtime<br>轻飘飘时间～轻飘飘时间～轻飘飘时间～";
carb[65]="03:43";
carb[66]="";



bmusic=document.getElementById('audio');

 var v=0;
 function gca(){
 
var soa=setInterval(function(){ 
var musicname=localStorage.music;
switch(musicname)
{

        case "6":
        
    ma();
        break;
        default:
        break;
        }

    }, 1000);

}
function ma(){

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

for(var c=0;c<=66;c++){
if(carb[v]==t){
v=v+1;

document.getElementById("musicp").innerHTML=carb[v];
break;
}else{
v=c;

}
}
}

