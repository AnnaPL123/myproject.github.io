w=document.documentElement.clientWidth-b1.width;
h=document.documentElement.clientHeight-b1.height;

var plx=(w/2)-50;
var ply=h+70;
var shtraf=0;
var ball=0;
plt.style.left=plx+"px";
plt.style.top=ply+"px";
x1=w/2;
b1.style.left=x1+"px";
y1=h-30;
b1.style.top=y1+"px";
dx1=Math.floor(Math.random()*10-5);
dy1=-Math.floor(Math.random()*5+1);
if(dx1==0){dx1=3;}
if(dy1==0){dy1=-3;}

var iscollusion=function(){
    if((x1>plx-100)&&(x1<plx+200)&&(y1>ply-100)){
        ball++;
        priz.innerHTML="Отбитые мячи: "+ball
        if(ball>=10){
            priz.innerHTML="Вы победили!";
            clearInterval(interval1);
            document.removeEventListener('keydown', move_platform);
        }
        return true;
    }else{
        return false;
    }
}
function move_ball1(){
    if(x1<=0||x1>=w){dx1=-dx1;}
    if(y1<=0||y1>=h){dy1=-dy1;}
    if(iscollusion()){dy1=-dy1;}
    x1=x1+dx1;
    y1=y1+dy1;
    b1.style.left=x1+"px";
    b1.style.top=y1+"px";
    if(y1>=h){
        shtraf++;
        itog.innerHTML="Штрафные баллы: "+shtraf;
        if(shtraf>=10){
            itog.innerHTML="Вы проиграли!";
            clearInterval(interval1);
            document.removeEventListener('keydown', move_platform);
        }
    }

}
interval1=setInterval(move_ball1,10)
function move_platform(event) {
    switch (event.key) {
        case "ArrowLeft":
            plx = plx - 10;
            break;
        case "ArrowRight":
            plx = plx + 10;
            break;
    }
    plt.style.left = plx + "px";
}
document.addEventListener('keydown', move_platform)