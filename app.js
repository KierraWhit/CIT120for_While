var ele =document.body.querySelector(".looper");
var user_damage=0;
var dragon_damage=0;
var winner
var loser

while (user_damage<5 && dragon_damage<10) {
    var question = Number(prompt("Enter a number to hit the dragon! Limit is 5: "));
    if (question > 5) {
        dragon_damage += 1;
    } else {
        dragon_damage = (Math.floor(Math.Random) * question) + 1


    }
    if (dragon_damage >= 10 && user_damage < 5) {
        ele.innerHTML = "You win"
        winner = "User"
        loser = "Dragon"
    } else if (dragon_damage < 10 && user_damage >= 5) {
        ele.innerHTML = "You lose"
        winner = "Dragon"
        loser = "User"
    }


}













