var ele =document.body.querySelector(".looper");
var user_damage;
var dragon_damage;
var conditions = true;
var dragon = 10;
var user = 5;
var question_2;



while (conditions) {
    var question = Number(prompt("Enter a number to hit the dragon! Limit is 5: "));
    if ( question > 5 ) {
        user = question - dragon_damage;
        conditions = false;
    }
    while (conditions) {
        question_2 = Math.random() * 10;
        dragon = question_2 - user_damage;
        if (dragon_damage === dragon | dragon_damage > dragon | dragon_damage < dragon);
            conditions = false;

    }
for (user_damage = user; user_damage>dragon_damage; user++)
        ele.innerHTML = "You lose"
for (user_damage>user; user_damage<dragon_damage; user++)
        ele.innerHTML = "You win"
}












