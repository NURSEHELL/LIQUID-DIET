// Enemy array. "NAME", "Images/img_src", HP, [Attack Pattern (6 turns), Item Drop]
const Enemies = [
    ["PATHETIC DUMMY", "Images/Enemy_PATHETIC_DUMMY.png", 3, [1, 0, 1, 0, 1, 0], 1],
    ["PITIFUL DUMMY", "Images/Enemy_PATHETIC_DUMMY.png", 3, [0, 1, 0, 1, 0, 1], 2],
    ["ANASTASIA'S CHIMERA", "Images/Enemy_ANASTASIA_CHIMERA.png", 2, [1, 1, 0, 0, 0, 1], 3],
];
// 0 = Wait / 1 = Attack 1HP

// Item array. "NAME", "Images/img_src", Utility, Utility Specifics]
const Items = [
    ["Empty", "Images/Item_Empty.png", itemNull, 0],
    ["Energy Drink", "Images/Item_Energy.png", itemHeal, 1],
    ["Sludge", "Images/Item_Sludge.png", itemDMG, 2],
    ["Chimera Fetus", "Images/Item_Fetus.png", itemDMG, 1],
];


itemSlot1 = Items[0];
enemyItemDrop = Items[0];
currentPlayerHP = 3;
roundCounter = 1;

// ON PAGE LOAD

window.onload = function () {
    document.getElementById("playerHP").innerHTML = currentPlayerHP;
    //document.getElementById("inventory1").innerHTML = itemSlot1[0];
	inventory1.disabled = true;
    document.getElementById("roundNum").innerHTML = "<u>Round: " + roundCounter + "</u>";
    randomizeEnemy();
};

// RANDOM ENEMY

function randomizeEnemy() {
    elapsedTurns = 0;
    playerAttack.disabled = false;

	if (itemSlot1 == Items[0]) {
	inventory1.disabled = true;
	}
	
    // Randomize
    randomEnemy = Math.floor(Math.random() * Enemies.length);

    // Set enemy info
    currentEnemyHP = Enemies[randomEnemy][2];
    enemyName = Enemies[randomEnemy][0];
    document.getElementById("enemyHP").innerHTML = currentEnemyHP;
    document.getElementById("enemyName").innerHTML = enemyName;
    document.getElementById("enemyImg").src = Enemies[randomEnemy][1];
	
	// Clear log (Battle intro)
    document.getElementById("actionLog").innerHTML = "<strong>" + enemyName + "</strong> is here... <br>";
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
        currentPlayerHP--;
    }

    if (Enemies[randomEnemy][3][elapsedTurns] == 2) {
        document.getElementById("actionLog").innerHTML += "The enemy heals itself! <br>";
        currentEnemyHP += 2;
    }

    document.getElementById("playerHP").innerHTML = currentPlayerHP;
    playerAttack.disabled = false;
	
	if (itemSlot1 == Items[0]) {
	inventory1.disabled = true;
	}


}

// PLAYER DEFEAT

function playerDefeat() {
	playerAttack.disabled = true;
	inventory1.disabled = true;
	document.getElementById("actionLog").innerHTML += "You have died. <strong>The end.</strong> <br> <h2 style='cursor: pointer;'><u>Try again?</u></h2>";
	
	// Check to avoid accidental resets
	if (currentPlayerHP <= 0) {
		document.getElementById("actionLog").addEventListener("click", playerRevive);
	}
	
    // Old Reset Timer
	// setTimeout(() => { playerRevive(); playerAttack.disabled = false;}, 2000);
}

// PLAYER REVIVE (Full Reset)

function playerRevive() {
	currentPlayerHP = 3;
	document.getElementById("playerHP").innerHTML = currentPlayerHP;
	document.getElementById("actionLog").innerHTML = "";
	itemSlot1 = Items[0];
	enemyItemDrop = Items[0];
    document.getElementById("inventory1").innerHTML = itemSlot1[0];
	inventory1.disabled = true;
	roundCounter = 1;
    document.getElementById("roundNum").innerHTML = "<u>Round: " + roundCounter + "</u>";
	randomizeEnemy();
	playerAttack.disabled = false;
}

// ENEMY DEFEAT

function enemyDefeat() {
	// Disabling attack/inv so player can't lower to -1HP
	playerAttack.disabled = true;
	inventory1.disabled = true;
	
    enemyItemDrop = Items[Enemies[randomEnemy][4]];
    document.getElementById("actionLog").innerHTML += "Enemy defeated! <strong>You win!</strong> <br>";
	
	// Different Death Pic (there's no doubt a better way to check than using the name)
	switch (enemyName) {
		case "PATHETIC DUMMY":
		case "PITIFUL DUMMY":
		document.getElementById("enemyImg").src = "Images/Enemy_DEFEATED_DUMMY.png";
		break;
		
		case "ANASTASIA'S CHIMERA":
		document.getElementById("enemyImg").src = "Images/Enemy_DEFEATED_CHIMERA.png";
		break;
	}
	
	// Up Round Counter by 1
	roundCounter++;
    document.getElementById("roundNum").innerHTML = "<u>Round: " + roundCounter + "</u>";

	// Check for Overkill
    if (currentEnemyHP < 0) {
        currentEnemyHP = 0;
        document.getElementById("enemyHP").innerHTML = 0;
    }

	// Grant Item
	if (itemSlot1 == Items[0]) {
        document.getElementById("inventory1").innerHTML = enemyItemDrop[0];
        document.getElementById("inventory1").addEventListener("click", enemyItemDrop[2], { once: true });
        itemSlot1 = enemyItemDrop;
    document.getElementById("actionLog").innerHTML += "<strong>ITEM GOT!</strong> " + enemyItemDrop[0] + "<br>";
        setTimeout(() => { randomizeEnemy(); }, 2500);
	}
	else {
	    setTimeout(() => { randomizeEnemy(); }, 2500);
	}
}

// Item Systems

//

// PLAYER ATTACK

function Attack() {
    playerAttack.disabled = true;
	inventory1.disabled = true;


    currentEnemyHP -= 1;
    document.getElementById("actionLog").innerHTML += "You attack the enemy! <br>";
    document.getElementById("enemyHP").innerHTML = currentEnemyHP;

	// Player HP minimum
    if (currentPlayerHP < 0) {
        currentPlayerHP = 0;
        document.getElementById("playerHP").innerHTML = 0;
    }

    setTimeout(() => {

        elapsedTurns += 1;
        if (elapsedTurns >= 6) {
            elapsedTurns = 0;
        }

        if (currentEnemyHP >= 1) {
            enemyTurn();
        }

        else {
            enemyDefeat();
        }
		
		if (currentPlayerHP <= 0) {
			playerDefeat();
		}

    }, 1000);

}

// ITEMS

function itemHeal() {
    currentPlayerHP += itemSlot1[3];
    document.getElementById("playerHP").innerHTML = currentPlayerHP;
    useItem();
}

function itemDMG() {
    currentEnemyHP -= itemSlot1[3];
    document.getElementById("enemyHP").innerHTML = currentEnemyHP;
    useItem();
}

// Commented-out for now cause I can't figure out why it only shows up once.

// function itemNull() {
//     document.getElementById("actionLog").innerHTML += "You have no items... <br>";
// }

function useItem() {
	
		document.getElementById("actionLog").innerHTML += "You used the " + itemSlot1[0] + ". <br>";
        itemSlot1 = Items[0];
        document.getElementById("inventory1").innerHTML = itemSlot1[0];
			
		// Disables inventory until Attack
		// inventory1.disabled = true;
			
		// Check for enemy HP in case of Sludge-Kill
		if (currentEnemyHP >= 1) {
            return;
        }
		
        else {
            enemyDefeat();
        }
}