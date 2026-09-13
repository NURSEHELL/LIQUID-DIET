// Enemy array. "NAME", "Images/img_src", HP, [Attack Pattern (6 turns), Item Drop]
const Enemies = [
    ["PATHETIC DUMMY", "Images/Enemy_PATHETIC_DUMMY.png", 3, [1, 0, 1, 0, 1, 0], 1 ],
    ["PITIFUL DUMMY", "Images/Enemy_PATHETIC_DUMMY.png", 3, [0, 1, 0, 1, 0, 1], 2 ],
]
// 0 = Wait / 1 = Attack 1HP

// Item array. "NAME", "Images/img_src", Utility, Utility Specifics]
const Items = [
    ["Empty", "Images/Item_Empty.png", itemNull, null],
    ["Energy Drink", "Images/Item_Energy.png", itemHeal, 1],
    ["Sludge", "Images/Item_Sludge.png", itemDMG, 2],
]

// Item Utility
function itemNull() {}

    function itemExhaust() {
        document.getElementById("itemSlot").addEventListener("click", Items[0][2]);
        itemChoose = Items[0];
    }

function itemHeal() {
    currentPlayerHP += Items[Enemies[randomEnemy][4]][3]
    document.getElementById("playerHP").innerHTML = currentPlayerHP;

itemExhaust();
}

function itemDMG() {
    currentEnemyHP -= Items[Enemies[randomEnemy][4]][3]
    document.getElementById("enemyHP").innerHTML = currentEnemyHP;

itemExhaust();
}

//

// Discard Item

function itemDiscard() {
itemExhaust();
randomizeEnemy();
}

var currentPlayerHP = 3;
document.getElementById("playerHP").innerHTML = currentPlayerHP;
discardItem.disabled = true;

// ON LOAD
itemChoose = Items[0];
document.getElementById("itemSlot").addEventListener ("click", pickItem);
document.getElementById("itemSlot").addEventListener ("click", useItem);
window.onload = function() {
randomizeEnemy();
};

function randomizeEnemy() {
    playerAttack.disabled = false;
    discardItem.disabled = true;
    document.getElementById("actionLog").innerHTML = " ";
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
//

    // ENEMY TURN
function enemyTurn() {
discardItem.disabled = true

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
itemDrop();
}

function itemDrop() {
itemChoose = Items[Enemies[randomEnemy][4]];
document.getElementById("actionLog").innerHTML += "ITEM GOT! " + itemChoose[0] + "<br>";
document.getElementById("actionLog").innerHTML += "Choose an item to replace. <br>";
discardItem.disabled = false;
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
