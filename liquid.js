// Enemy array. "NAME", "Images/img_src", HP, [Attack Pattern (6 turns), Item Drop]
const Enemies = [
    ["PATHETIC DUMMY", "Images/Enemy_PATHETIC_DUMMY.png", 3, [1, 0, 1, 0, 1, 0], 1],
    ["PITIFUL DUMMY", "Images/Enemy_PATHETIC_DUMMY.png", 3, [0, 1, 0, 1, 0, 1], 2],
]
// 0 = Wait / 1 = Attack 1HP

// Item array. "NAME", "Images/img_src", Utility, Utility Specifics]
const Items = [
    ["Empty", "Images/Item_Empty.png", itemNull, 0],
    ["Energy Drink", "Images/Item_Energy.png", itemHeal, 1],
    ["Sludge", "Images/Item_Sludge.png", itemDMG, 2],
]


itemSlot1 = Items[0]
enemyItemDrop = Items[0]
currentPlayerHP = 3

function itemHeal() {
    currentPlayerHP += itemSlot1[3];
    document.getElementById("playerHP").innerHTML = currentPlayerHP;
    useItem()
}

function itemDMG() {
    currentEnemyHP -= itemSlot1[3];
    document.getElementById("enemyHP").innerHTML = currentEnemyHP;
    useItem()
}

function itemNull() {
    document.getElementById("actionLog").innerHTML += "There is no item in this slot... <br>";
}

function useItem() {
        document.getElementById("actionLog").innerHTML += "You used the " + itemSlot1[0] + ". <br>";
        itemSlot1 = Items[0];
        document.getElementById("inventory1").innerHTML = itemSlot1[0];
		
		// Disables inventory until Attack
		inventory1.disabled = true;
		
		// Check for enemy HP in case of Sludge-Kill
		if (currentEnemyHP >= 1) {
            return;
        }
		
        else {
            enemyDefeat();
        };
}

// ON PAGE LOAD
window.onload = function () {
    document.getElementById("playerHP").innerHTML = currentPlayerHP;
    document.getElementById("inventory1").innerHTML = itemSlot1[0];
    randomizeEnemy();

};

// RANDOM ENEMY

function randomizeEnemy() {
    elapsedTurns = 0;
    playerAttack.disabled = false;
	inventory1.disabled = false;

    // Randomize
    randomEnemy = Math.floor(Math.random() * Enemies.length);

    // Set enemy info
    currentEnemyHP = Enemies[randomEnemy][2];
    enemyName = Enemies[randomEnemy][0];
    document.getElementById("enemyHP").innerHTML = currentEnemyHP;
    document.getElementById("enemyName").innerHTML = enemyName;
    document.getElementById("enemyImg").src = Enemies[randomEnemy][1];
	
	// Clear log (Battle intro)
    document.getElementById("actionLog").innerHTML = enemyName + " is here... <br>";
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

    if (Enemies[randomEnemy][3][elapsedTurns] == 2) {
        document.getElementById("actionLog").innerHTML += "The enemy heals itself! <br>";
        currentEnemyHP += 2;
    }

    document.getElementById("playerHP").innerHTML = currentPlayerHP;
    playerAttack.disabled = false;
	inventory1.disabled = false;


}

// Player Defeat
function playerDefeat() {
	playerAttack.disabled = true;
	inventory1.disabled = true;
	document.getElementById("actionLog").innerHTML += "You have died. The end.";
    setTimeout(() => { playerRevive(); playerAttack.disabled = false;}, 2000);
}

// Player Revive
function playerRevive() {
	currentPlayerHP = 3;
	document.getElementById("playerHP").innerHTML = currentPlayerHP;
	document.getElementById("actionLog").innerHTML = " ";
	itemSlot1 = Items[0]
	enemyItemDrop = Items[0]
    document.getElementById("inventory1").innerHTML = itemSlot1[0];
	randomizeEnemy();
}

// Enemy Defeat
function enemyDefeat() {
    enemyItemDrop = Items[Enemies[randomEnemy][4]];

if (itemSlot1 = Items[0]) {
        document.getElementById("inventory1").innerHTML = enemyItemDrop[0];
        document.getElementById("inventory1").addEventListener("click", enemyItemDrop[2], { once: true });
        itemSlot1 = enemyItemDrop;
}

    document.getElementById("actionLog").innerHTML += "Enemy defeated! You win! <br>";
    document.getElementById("enemyImg").src = "Images/Enemy_DEFEATED.png";
    document.getElementById("actionLog").innerHTML += "ITEM GOT! " + enemyItemDrop[0] + "<br>";

    // Next Enemy
    setTimeout(() => { randomizeEnemy() }, 2500);
}

// Item Systems

//

// PLAYER ATTACK

function Attack() {
    playerAttack.disabled = true
	inventory1.disabled = true


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
		
		if (currentPlayerHP <= 0) {
			playerDefeat();
		}

    }, 1000);

}


