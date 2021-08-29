var Player1 = prompt("Please enter first Player's Name:");
var Player2 = prompt("Please enter second Player's Name:");

if(Player1==null){
    Player1="Player1";
}
if(Player2==null){
    Player2="Player2";
}
document.querySelector(".p1").innerHTML= Player1;
document.querySelector(".p2").innerHTML= Player2;

var randomNumber1=Math.floor(6*Math.random())+1;
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");

var randomNumber2=Math.floor(6*Math.random())+1;
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 " + Player1 + " Wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML= Player2 + " Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="🚩 Draw! 🚩";
}