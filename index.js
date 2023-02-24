window.onload = (event) =>{

function randomDice(){
   var x=Math.floor(Math.random() * 6) + 1;
   var y=Math.floor(Math.random() * 6) + 1;
   document.getElementById("first").src=`figures/Dice_${x}.png`;
   document.getElementById("second").src=`figures/Dice_${y}.png`;
   var emoji = document.createElement("img");
   emoji.src='figures/emoji.png';
     if (x > y) {
        document.getElementById("faceLeft").appendChild(emoji); 
        document.getElementById("header").innerHTML = "Player 1 Wins!";
        
     } else if (y > x) {
        document.getElementById("header").innerHTML = "Player 2 Wins!";
        document.getElementById("faceRight").appendChild(emoji); 
     } else {
        document.getElementById("header").innerHTML = "Draw!";
     }
    

    
}
randomDice();

}; 