
var randomvar=Math.floor((Math.random()*6))+1;
var randomvar2=Math.floor((Math.random()*6))+1;

document.querySelector("#img1").setAttribute("src","images/dicer"+randomvar+".png");
document.querySelector("#img2").setAttribute("src","images/dicer"+randomvar2+".png");
if(randomvar==randomvar2){
document.querySelector("h1").innerHTML="draw"

}
else if (randomvar>randomvar2){
    document.querySelector("h1").innerHTML="player1 winner"   
}
else{
    document.querySelector("h1").innerHTML="player2 winner" 
}

