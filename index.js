
var name1= prompt("Enter player 1 Name");
document.querySelectorAll("p")[0].innerHTML=name1;
var name2=prompt("Enter player 2 name");
document.querySelectorAll("p")[1].innerHTML=name2;
function rollDice(){

var randomNumber1 =Math.floor(Math.random()*6)+1;
var diceImage="images/dice"+randomNumber1+".jpg";
var image=document.querySelector("img.img1");
image.setAttribute("src",diceImage);
var randomNumber2 =Math.floor(Math.random()*6)+1;
var diceImage="images/dice"+randomNumber2+".jpg";
var image=document.querySelector("img.img2");
image.setAttribute("src",diceImage);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩"+name1+" Won";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML="🚩" +name2+ " Won";
}
else{
document.querySelector("h1").innerHTML="🏴‍☠️Draw";
}
}
