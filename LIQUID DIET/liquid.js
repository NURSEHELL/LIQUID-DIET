// Enemy array.
// "NAME", "Images/img_src", HP, [Attack Pattern (6 turns)]

const Enemies = [
    ["PATHETIC DUMMY", "Images/Enemy_PATHETIC_DUMMY.png", 3, [1, 0, 1, 0, 1, 0] ],
    ["PITYFUL DUMMY", "Images/Enemy_PATHETIC_DUMMY.png", 3, [0, 1, 0, 1, 0, 1] ]
]

// 0 = Wait / 1 = Attack 1HP

var currentPlayerHP = 3;
document.getElementById("playerHP").innerHTML = currentPlayerHP;


window.onload = function() {
  randomizeEnemy();
};

function randomizeEnemy() {
elapsedTurns = 0;

// Randomize an enemy
randomEnemy = Math.floor(Math.random() * Enemies.length);

// Set enemy info
currentEnemyHP = Enemies[randomEnemy][2];
enemyName = Enemies[randomEnemy][0];


    document.getElementById("enemyHP").innerHTML = currentEnemyHP;
    document.getElementById("enemyName").innerHTML = enemyName;
    document.getElementById("enemyImg").src = Enemies[randomEnemy][1];
}

    // ENEMY TURN
function enemyTurn() {

// IF enemy waits (0)
if (Enemies[randomEnemy][3][elapsedTurns] == 0) {
document.getElementById("actionLog").innerHTML += "The enemy is waiting... <br>";
}

// IF enemy attacks (1)
if (Enemies[randomEnemy][3][elapsedTurns] == 1) {
document.getElementById("actionLog").innerHTML += "The enemy attacks! <br>";
currentPlayerHP -= 1;
}

document.getElementById("playerHP").innerHTML = currentPlayerHP;
playerAttack.disabled = false;


}

// Enemy Defeat
function enemyDefeat() {
document.getElementById("actionLog").innerHTML += "Enemy defeated! You win! <br>";
    document.getElementById("enemyImg").src = "Images/PLACEHOLDER.png";
    setTimeout(() => { randomizeEnemy(); playerAttack.disabled = false;}, 2000);
}


// Player Attack

function Attack() {
playerAttack.disabled = true


currentEnemyHP -= 1;
document.getElementById("actionLog").innerHTML += "You attack the enemy! <br>";
document.getElementById("enemyHP").innerHTML = currentEnemyHP;
    
setTimeout(() => {

elapsedTurns += 1;
if (elapsedTurns >= 6) {
    elapsedTurns = 0
}

if (currentEnemyHP >= 1) {
  enemyTurn();
 }

  else {
  enemyDefeat();
  };
  
}, 1000);

}