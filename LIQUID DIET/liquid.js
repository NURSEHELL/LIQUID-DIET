// Enemy array. "NAME", "Images/img_src", HP, [Attack Pattern (6 turns)], Drop, Drop Type, [Dialogues]]
const Enemies = [
    ["PATHETIC DUMMY", "Images/Enemy_PATHETIC_DUMMY.png", 3, [1, 0, 1, 0, 1, 0], 1, 0, ['<i>"goofy goober"</i> <br>']],
    ["PITIFUL DUMMY", "Images/Enemy_PATHETIC_DUMMY.png", 3, [0, 1, 0, 1, 0, 1], 2, 0, ['<i>"if you decompile this game something bad will happen to you"</i> <br>', '<i>"spageti"</i> <br>', '<i>"test123"</i> <br>']],
    ["ANASTASIA'S CHIMERA", "Images/Enemy_ANASTASIA_CHIMERA.png", 2, [1, 1, 0, 0, 0, 1], 3, 0, ['<i>"Run"</i> <br>', '<i>"I\'ve been falling away..."</i> <br>', '<i>"buy my crypto"</i> <br>', '<i>"lalala... oh im thinking of my bounb!!"</i> <br>', '<i>"ooooooooooooooooooooooooooooooooooooo"</i> <br>']],
    ["MISS OBEAST", "Images/Enemy_MISS_OBEAST.png", 2, [1, 2, 0, 0, 0, 1], 1, 1, ['<i>"Special Mode Unlocked! kidding"</i> <br>', '<i>"lalala... oh im thinking of my bounb!!"</i> <br>']],
];

// ATTACK TYPE 0 = Wait / 1 = Attack 1HP / 2 = Heal self 2HP
// DROP TYPE 0 = Item / 1 = Weapon

// Item array. "NAME", "Images/img_src", Utility, Utility Specifics]
const Items = [
    ["Empty", "Images/Item_Empty.png", itemNull, 0],
    ["Energy Drink", "Images/Item_Energy.png", itemHeal, 1],
    ["Sludge", "Images/Item_Sludge.png", itemDMG, 2],
    ["Chimera Fetus", "Images/Item_Fetus.png", itemDMG, 1],
    ["Juicy Nectar", "Images/Item_Blood.png", itemHeal, 2 /*Real value in itemHeal*/],
];

// Weapon array. "NAME", "Images/img_src", Damage, Accuracy, Special Effects (TBA)]
const Weapons = [
    ["None", "Images/Weapon_None.png", 1, 950],
    ["Letter Opener", "Images/Weapon_Letter.png", 2, 850],
	["Spiky Tails", "Images/Weapon_Tail.png", 3, 750],
];


// SETUP

debugtest = false;

lastEnemyHP = 0;
juicyHeal = 2;
enemyKilled = false;
ranOff = false;
runFail = false;
line = 0;
actionLine = 1;
deleteLine = 1;
maxLines = 11;
currentEnemyHP = 3;

maxPlayerHP = 20;
currentPlayerHP = 5;
roundCounter = 1;

weaponMenu.style.visibility = "hidden";
weaponEquipBtn.disabled = true;
weaponDiscardBtn.disabled = true;
document.getElementById("weaponEquipBtn").addEventListener("click", weaponEquip);
document.getElementById("weaponDiscardBtn").addEventListener("click", weaponDiscard);

item1Used = false;
item2Used = false;
item3Used = false;
itemSlot1 = Items[0];
itemSlot2 = Items[0];
itemSlot3 = Items[0];
anyItem = itemSlot1 || itemSlot2 || itemSlot3;
fullInv = false;
itemUsed = undefined;

function disableActs() {
	playerAttack.disabled = true;
	talking.disabled = true;
	runAway.disabled = true;
}

function disableInvs() {
	inventory1.disabled = true;
	inventory2.disabled = true;
	inventory3.disabled = true;
}

function disableAll() {
	playerAttack.disabled = true;
	talking.disabled = true;
	runAway.disabled = true;
	inventory1.disabled = true;
	inventory2.disabled = true;
	inventory3.disabled = true;
}

function enableActs() {
	playerAttack.disabled = false;
	talking.disabled = false;
	runAway.disabled = false;
}

function enableInvs() {
	inventory1.disabled = false;
	inventory2.disabled = false;
	inventory3.disabled = false;
}

function enableAll() {
	playerAttack.disabled = false;
	talking.disabled = false;
	runAway.disabled = false;
	inventory1.disabled = false;
	inventory2.disabled = false;
	inventory3.disabled = false;
}

enemyDrop = Items[0];
currentWeapon = Weapons[0];


// RANDOM ENEMY

function randomizeEnemy() {
	
	// Randomize (needs to be here for line check)
    randomEnemy = Math.floor(Math.random() * Enemies.length);
	
    elapsedTurns = 0;
	line = 0;
	
	// Round up if ran away
	if (ranOff == true) {
		ranOff = false;
		roundCounter++;
		document.getElementById("roundNum").innerHTML = "<u>Round: " + roundCounter + "</u>";
	}
	
	if (enemyKilled == true) {
		enemyKilled = false;
		// Up Round Counter by 1
		roundCounter++;
		document.getElementById("roundNum").innerHTML = "<u>Round: " + roundCounter + "</u>";
	}
	
	if (itemSlot1 != Items[0] && itemSlot2 != Items[0] && itemSlot3 != Items[0]) {
		fullInv = true;
		
		// PLACEHOLDER DEBUG CONSOLE LOG
		console.log(" ");
		console.log("All item slots taken. fullInv is now",fullInv);
		console.log(" ");
	}
	
	actionLine = 1;
	deleteLine = 1;

    // Set enemy info
	enemyName = Enemies[randomEnemy][0];
    document.getElementById("enemyName").innerHTML = enemyName;
    document.getElementById("enemyImg").src = Enemies[randomEnemy][1];
	
	// Encounters, Bosses & Special Encounters (currently only HP change)
	switch (roundCounter) {
		default:
			currentEnemyHP = Math.min(Math.round(Enemies[randomEnemy][2] + (currentWeapon[2] + (roundCounter / 10) - 1)), 20);
			document.getElementById("actionLog").innerHTML = '<span id="'+actionLine+'">' + "<strong>" + enemyName + "</strong> stares at you...<br></span>";
			
			// PLACEHOLDER DEBUG CONSOLE LOG
			console.log("Planned Enemy HP:", Enemies[randomEnemy][2], "+ (", currentWeapon[2], "+ (", roundCounter, "/ 10 ) - 1 ) =", Math.round(Enemies[randomEnemy][2] + (currentWeapon[2] + (roundCounter / 10) - 1)), "// currentEnemyHP =", currentEnemyHP);
		break;
		
		case 10:
			currentEnemyHP = Math.round(Enemies[randomEnemy][2] + (currentWeapon[2] + (roundCounter / 10) - 1) * 2);
			document.getElementById("actionLog").innerHTML = '<span id="'+actionLine+'">' + "A strong <strong>" + enemyName + "</strong> comes your way...!<br></span>";
			
			// PLACEHOLDER DEBUG CONSOLE LOG
			console.log("Planned Enemy HP:", Enemies[randomEnemy][2], "+ (", currentWeapon[2], "+ (", roundCounter, "/ 10 ) - 1 ) * 2 =", Math.round(Enemies[randomEnemy][2] + (currentWeapon[2] + (roundCounter / 10) - 1) * 2), "// currentEnemyHP =", currentEnemyHP + " (BOSSFIGHT)");
		break;
		
		case 20:
			currentEnemyHP = Math.round(Enemies[randomEnemy][2] + (currentWeapon[2] + (roundCounter / 10) - 1) * 4);
			document.getElementById("actionLog").innerHTML = '<span id="'+actionLine+'">' + "A fearsome <strong>" + enemyName + "</strong> wants to fight!<br></span>";
			
			// PLACEHOLDER DEBUG CONSOLE LOG
			console.log("Planned Enemy HP:", Enemies[randomEnemy][2], "+ (", currentWeapon[2], "+ (", roundCounter, "/ 10 ) - 1 ) * 4 =", Math.round(Enemies[randomEnemy][2] + (currentWeapon[2] + (roundCounter / 10) - 1) * 4), "// currentEnemyHP =", currentEnemyHP + " (BOSSFIGHT)");
		break;
		
		case 30:
			currentEnemyHP = Math.round(Enemies[randomEnemy][2] + (currentWeapon[2] + (roundCounter / 10) - 1) * 6);
			document.getElementById("actionLog").innerHTML = '<span id="'+actionLine+'">' + "A terrifying <strong>" + enemyName + "</strong> rushes towards you!!<br></span>";
			
			// PLACEHOLDER DEBUG CONSOLE LOG
			console.log("Planned Enemy HP:", Enemies[randomEnemy][2], "+ (", currentWeapon[2], "+ (", roundCounter, "/ 10 ) - 1 ) * 6 =", Math.round(Enemies[randomEnemy][2] + (currentWeapon[2] + (roundCounter / 10) - 1) * 6), "// currentEnemyHP =", currentEnemyHP + " (BOSSFIGHT)");
		break;
    }

	// Set enemy HP
	currentEnemyMaxHP = currentEnemyHP;
    document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyHP + "/" + currentEnemyMaxHP + "</strong>";
	
	playerAttack.disabled = false;
	
	if (line >= Enemies[randomEnemy][6].length) {
		talking.disabled = true;
	}
	else {
		talking.disabled = false;
	}

    if (itemSlot1 == Items[0]) {
        inventory1.disabled = true;
    }
    else {
        inventory1.disabled = false;
    }

    if (itemSlot2 == Items[0]) {
        inventory2.disabled = true;
    }
    else {
        inventory2.disabled = false;
    }

    if (itemSlot3 == Items[0]) {
        inventory3.disabled = true;
    }
    else {
        inventory3.disabled = false;
    }
	
	runAway.disabled = false;
	runFail = false;
	
	return;
}

// ON PAGE LOAD

window.onload = function () {
    document.getElementById("playerHP").innerHTML = "<strong>" + currentPlayerHP + "/20</strong>";
    disableInvs();
    document.getElementById("roundNum").innerHTML = "<u>Round: " + roundCounter + "</u>";
    randomizeEnemy();
};


// TALKING TO ENEMIES

function talkTo() {
	
	// PLACEHOLDER DEBUG CONSOLE LOG
	console.log("Dialogue", (line+1), "/", Enemies[randomEnemy][6].length);
	
	actionLine++;
	document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + Enemies[randomEnemy][6][line] + '</span>';
	line++;
	talking.disabled = true;
	
	if (line >= Enemies[randomEnemy][6].length) {
		talking.disabled = true;
	}
	
	// Actionlog Autoscroll

	if (actionLine >= maxLines) {
		const firstLine = document.getElementById(deleteLine);
		firstLine.remove();
		deleteLine++;
	
		// PLACEHOLDER DEBUG CONSOLE LOG
		console.log("Earliest line deleted. Onto line", deleteLine);
	}
}


// ENEMY TURN

function enemyTurn() {

	// IF enemy waits (0)
    if (Enemies[randomEnemy][3][elapsedTurns] == 0) {
	
	actionLine++;
	document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "The enemy is waiting... <br></span>";
    }

    // IF enemy attacks (1)
    if (Enemies[randomEnemy][3][elapsedTurns] == 1) {
	
		actionLine++;
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "The enemy attacks! <br></span>";
        currentPlayerHP--;
    }

	// IF enemy heals (2)
    if (Enemies[randomEnemy][3][elapsedTurns] == 2) {
	
		actionLine++;
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "The enemy heals itself! <br></span>";
        currentEnemyHP += 2;
		
		// Check to avoid overhealing
		if (currentEnemyHP > currentEnemyMaxHP) {
			currentEnemyHP = currentEnemyMaxHP;
		}
		
        document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyHP + "/" + currentEnemyMaxHP + "</strong>";
    }

    elapsedTurns++;
    if (elapsedTurns >= 6) {
        elapsedTurns = 0;
    }

    document.getElementById("playerHP").innerHTML = "<strong>" + currentPlayerHP + "/20</strong>";
    playerAttack.disabled = false;
	
	if (line >= Enemies[randomEnemy][6].length) {
		talking.disabled = true;
	}
	else {
		talking.disabled = false;
	}

    if (itemSlot1 == Items[0]) {
        inventory1.disabled = true;
    }
    else {
        inventory1.disabled = false;
    }

    if (itemSlot2 == Items[0]) {
        inventory2.disabled = true;
    }
    else {
        inventory2.disabled = false;
    }

    if (itemSlot3 == Items[0]) {
        inventory3.disabled = true;
    }
    else {
        inventory3.disabled = false;
    }
	
	if (runFail == false) {
		runAway.disabled = false;
	}
	
	// Actionlog Autoscroll

	if (actionLine >= maxLines) {
		const firstLine = document.getElementById(deleteLine);
		firstLine.remove();
		deleteLine++;
	
		// PLACEHOLDER DEBUG CONSOLE LOG
		console.log("Earliest line deleted. Onto line", deleteLine);
	}
}

// PLAYER DEFEAT

function playerDefeat() {
    disableAll();
	actionLine = 1;
	deleteLine = 1;
	
	document.getElementById("actionLog").innerHTML = '<span id="'+actionLine+'">' + "You died. <strong>The end.</strong> <br> <h2 style='cursor: pointer;'><u>Try again?</u></h2></span>";
    
    // Check to avoid accidental resets
    if (currentPlayerHP <= 0) {
        document.getElementById("actionLog").addEventListener("click", playerRevive);
    }
}


// PLAYER REVIVE (Full Reset)

function playerRevive() {
	line = 0;
    currentPlayerHP = 5;
	document.getElementById("playerStats").innerHTML = 'Your HP: <span id="playerHP"></span>';
    document.getElementById("playerHP").innerHTML = "<strong>" + currentPlayerHP + "/20</strong>";
	itemSlot1 = Items[0];
	itemSlot2 = Items[0];
	itemSlot3 = Items[0];
	fullInv = false;
    enemyDrop = Items[0];
    document.getElementById("inventory1").innerHTML = itemSlot1[0];
    document.getElementById("inventory2").innerHTML = itemSlot2[0];
    document.getElementById("inventory3").innerHTML = itemSlot3[0];
    disableInvs();
	currentWeapon = Weapons[0];
    roundCounter = 1;
    document.getElementById("roundNum").innerHTML = "<u>Round: " + roundCounter + "</u>";
    randomizeEnemy();
    enableActs();
}


// WEAPON MENU

function weaponEquip() {
	
	if (Enemies[randomEnemy][5] == 1) {
		currentWeapon = Weapons[Enemies[randomEnemy][4]];
	}
	else if (Enemies[randomEnemy][0] == "ANASTASIA'S CHIMERA") {
		currentWeapon = Weapons[2];
	}
	
	actionLine++;
	document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "You equipped the <strong>" + currentWeapon[0] + "</strong>.<br></span>";
    weaponEquipBtn.disabled = true;
    weaponDiscardBtn.disabled = true;
    setTimeout(() => { randomizeEnemy(); }, 2500);
    weaponMenu.style.visibility = "hidden";
	
	document.getElementById("playerStats").innerHTML = 'Your HP: <span id="playerHP"></span> | Your Weapon: <span id="playerWPN"></span>';
	document.getElementById("playerHP").innerHTML = "<strong>" + currentPlayerHP + "/20</strong>";
	document.getElementById("playerWPN").innerHTML = "<strong>" + currentWeapon[0] + "</strong>";
	
	// PLACEHOLDER DEBUG CONSOLE LOG
	console.log("You should now have", currentWeapon[2] + "ATK and", (currentWeapon[2] * 2) + " on CRITs");
	
}

function weaponDiscard() {
	actionLine++;
	document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "You discarded the weapon...<br></span>";
    weaponEquipBtn.disabled = true;
    weaponDiscardBtn.disabled = true;
    setTimeout(() => { randomizeEnemy(); }, 2500);
    weaponMenu.style.visibility = "hidden";
	
	// PLACEHOLDER DEBUG CONSOLE LOG
	console.log("You should still have", currentWeapon[2] + "ATK and", (currentWeapon[2] * 2) + " on CRITs)");
	
}


// GRANT DROP

function grantDrop() {
	if (itemSlot1 == Items[0]) {
			itemSlot1 = enemyDrop;
			document.getElementById("inventory1").innerHTML = enemyDrop[0];
			document.getElementById("inventory1").addEventListener("click", enemyDrop[2], { once: true });
	}
		
	else if (itemSlot1 != Items[0] && itemSlot2 == Items[0]) {
			itemSlot2 = enemyDrop;
			document.getElementById("inventory2").innerHTML = enemyDrop[0];
			document.getElementById("inventory2").addEventListener("click", enemyDrop[2], { once: true });
	}
		
	else if (itemSlot1 != Items[0] && itemSlot2 != Items[0] && itemSlot3 == Items[0]) {
			itemSlot3 = enemyDrop;
			document.getElementById("inventory3").innerHTML = enemyDrop[0];
			document.getElementById("inventory3").addEventListener("click", enemyDrop[2], { once: true });
	}
	
	actionLine++;
		
	if (currentEnemyHP < 0) {
		
		juicyHeal = Math.abs((lastEnemyHP)-1);
		
		// PLACEHOLDER DEBUG CONSOLE LOG
		console.log(" ");
		console.log("OVERKILL!! Enemy died at ", lastEnemyHP + "HP");
		console.log("juicyHeal should be one above & always positive:", juicyHeal);
		console.log(" ");
		
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong><u>OVERKILL!!</u> ITEM GOT!</strong> (" + enemyDrop[0] + ")<br></span>";
	}
	else {
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong>ITEM GOT!</strong> (" + enemyDrop[0] + ")<br></span>";
	}
	
	setTimeout(() => { randomizeEnemy(); }, 2500);
}

function maxItems() {
	actionLine++;
	
	if (currentEnemyHP < 0) {
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong><u>OVERKILL!!</u></strong> Your bag is full...<br></span>";
	}
	else {
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "Your bag is full...<br></span>";
	}
	
	setTimeout(() => { randomizeEnemy(); }, 2500);
}
	

// ENEMY DEFEAT

function enemyDefeat() {
	disableAll();
	
	if (currentEnemyHP < 0) {
		lastEnemyHP = currentEnemyHP;
		document.getElementById("enemyHP").innerHTML = "<strong>" + 0 + "/" + currentEnemyMaxHP + "</strong>";
	}

    if (Enemies[randomEnemy][5] == 0) {
        enemyDrop = Items[Enemies[randomEnemy][4]];
    }

    else if (Enemies[randomEnemy][5] == 1) {
		if (currentWeapon != Weapons[1]) {
			enemyDrop = Weapons[Enemies[randomEnemy][4]];
		}
		else {
			enemyDrop = Items[Enemies[randomEnemy][4]];
		}
    }
	
	actionLine = 1;
	deleteLine = 1;
	
	document.getElementById("actionLog").innerHTML = '<span id="'+actionLine+'">' + "Enemy defeated! <strong>Round won!</strong><br></span>";
	enemyKilled = true;

	// MISS OBEAST WEAPON DROP
	if (Enemies[randomEnemy][5] == 1) {
		
		if (currentWeapon != Weapons[1]) {
			enemyDrop = Weapons[Enemies[randomEnemy][4]];
			actionLine++;
			if (lastEnemyHP < 0) {
				document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong><u>OVERKILL!!</u> WEAPON GOT!</strong> (" + enemyDrop[0] + ")<br></span>";
			}
			else {
				document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong>WEAPON GOT!</strong> (" + enemyDrop[0] + ")<br></span>";
			}
			weaponMenu.style.visibility = "visible";
			weaponDiscardBtn.disabled = false;
			weaponEquipBtn.disabled = false;
			return;
		}
			
		if (anyItem == Items[0]) {
			enemyDrop = Items[4];
			grantDrop();
			return;
		}
		else {
			maxItems();
			return;
		}
	}

    // Check for Overkill
	if (currentEnemyHP < 0) {
		
		document.getElementById("enemyHP").innerHTML = "<strong>" + 0 + "/" + currentEnemyMaxHP + "</strong>";
		
		enemyDrop = Items[4];
		
		if (Enemies[randomEnemy][0] == "ANASTASIA'S CHIMERA") {
			if (currentWeapon != Weapons[2] && currentEnemyHP < 0) {
				enemyDrop = Weapons[2];
				actionLine++;
				document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong><u>OVERKILL!!</u> WEAPON GOT!</strong> (" + enemyDrop[0] + ")<br></span>";
				weaponMenu.style.visibility = "visible";
				weaponDiscardBtn.disabled = false;
				weaponEquipBtn.disabled = false;
				return;
			}
		}
		
		// Overkill Bonus Item
		if (anyItem == Items[0]) {
			enemyDrop = Items[4];
			grantDrop();
			return;
		}
		else {
			maxItems();
			return;
		}
	}
	
	// NORMAL DROP
	if (Enemies[randomEnemy][5] == 0) {
		if (anyItem == Items[0]) {
			if (fullInv == false) {
				grantDrop();
				return;
			}
			else {
				maxItems();
				return;
			}
		}
	}
}


// PLAYER ATTACK

function Attack() {

	disableAll();

	critNum = currentWeapon[2] * 2;
    hitRate = currentWeapon[3];
	critRate = Math.floor((Math.PI / currentWeapon[3]) * 10000);

    var hitRNG = Math.floor((Math.random() * 1000) + 1);
	
	// PLACEHOLDER DEBUG CONSOLE LOG
	console.log("(MISS AREA) " + hitRate + " |", hitRNG, "| " + critRate + " (CRIT AREA)");
	
	if (hitRNG <= critRate) {
		currentEnemyHP -= critNum;
		actionLine++;
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong>CRITICAL HIT!!</strong> You tear into the enemy!<br></span>";
		document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyHP + "/" + currentEnemyMaxHP + "</strong>";
		
		if (currentEnemyHP < 0) {
			document.getElementById("enemyHP").innerHTML = "<strong>" + 0 + "/" + currentEnemyMaxHP + "</strong>";
		}
    }
	
    else if (hitRNG <= hitRate) {
        currentEnemyHP -= currentWeapon[2];
		actionLine++;
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "You attack the enemy!<br></span>";
        document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyHP + "/" + currentEnemyMaxHP + "</strong>";
		
		if (currentEnemyHP < 0) {
			document.getElementById("enemyHP").innerHTML = "<strong>" + 0 + "/" + currentEnemyMaxHP + "</strong>";
		}
    }
		
    else {
		actionLine++;
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "You missed...<br></span>";
    }

    // Player HP min/max
    if (currentPlayerHP < 0) {
        currentPlayerHP = 0;
        document.getElementById("playerHP").innerHTML = "<strong>" + 0 + "/20</strong>";
    }
    if (currentPlayerHP > maxPlayerHP) {
        currentPlayerHP = 20;
        document.getElementById("playerHP").innerHTML = "<strong>" + 20 + "/20</strong>";
    }

    setTimeout(() => {

        if (currentEnemyHP >= 1) {
            enemyTurn();
        }

        else {
			setTimeout(() => { enemyDefeat(); }, 1000);
        }

        if (currentPlayerHP <= 0) {
			playerDefeat();
        }

    }, 1000);

	// Actionlog Autoscroll

	if (actionLine >= maxLines) {
		const firstLine = document.getElementById(deleteLine);
		firstLine.remove();
		deleteLine++;
	
		// PLACEHOLDER DEBUG CONSOLE LOG
		console.log("Earliest line deleted. Onto line", deleteLine);
	}

}


// PLAYER FLEEING

function Run() {
	var runRNG = Math.floor((Math.random() * 100) + 1);
	var runOffLimit = 85;
	
	if (runRNG >= runOffLimit) {
		
		// PLACEHOLDER DEBUG CONSOLE LOG
		console.log("runRNG =", runRNG, "(Should be enough)");
		
		ranOff = true;
		disableAll();
		actionLine = 1;
		deleteLine = 1;
	
		document.getElementById("actionLog").innerHTML = '<span id="'+actionLine+'">' + "You managed to escape... <br></span>";
		setTimeout(() => { randomizeEnemy(); }, 2500);
	}
	else {
		
		// PLACEHOLDER DEBUG CONSOLE LOG
		console.log("runRNG =", runRNG, "(Off by", (runOffLimit-runRNG) + ")");
		
		runFail = true;
		actionLine++;
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong>Can't flee!</strong> The enemy has you cornered...<br></span>";
		disableAll();
		setTimeout(() => { enemyTurn(); }, 1000);
		
		// Actionlog Autoscroll

		if (actionLine >= maxLines) {
			const firstLine = document.getElementById(deleteLine);
			firstLine.remove();
			deleteLine++;
	
			// PLACEHOLDER DEBUG CONSOLE LOG
			console.log("Earliest line deleted. Onto line", deleteLine);
		}

	}
}


// ITEMS (Use & Details)

function useItem1() {
	item1Used = true;
	fullInv = false;
	itemUsed = itemSlot1;
	
	// PLACEHOLDER DEBUG CONSOLE LOG
	console.log(" ");
	console.log("Using Item 1. fullInv is now", fullInv);
	console.log(" ");
}

function useItem2() {
	item2Used = true;
	fullInv = false;
	itemUsed = itemSlot2;
	
	// PLACEHOLDER DEBUG CONSOLE LOG
	console.log(" ");
	console.log("Using Item 2. fullInv is now", fullInv);
	console.log(" ");
}

function useItem3() {
	item3Used = true;
	fullInv = false;
	itemUsed = itemSlot3;
	
	// PLACEHOLDER DEBUG CONSOLE LOG
	console.log(" ");
	console.log("Using Item 3. fullInv is now", fullInv);
	console.log(" ");
}

function itemHeal() {
	if (currentPlayerHP >= maxPlayerHP) {
		actionLine++;
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "You're already at Max HP!<br></span>";
	}
	
	if (itemUsed == Items[4]) {
		var healedHP = Math.min(juicyHeal, (maxPlayerHP-currentPlayerHP));
		
		// PLACEHOLDER DEBUG CONSOLE LOG
		console.log(" ");
		console.log("Juicy Heal: LOWEST BETWEEN ... absolute of lastEnemyHP - 1 ... OR ... maxPlayerHP - currentPlayerHP");
		console.log("FORMER: abs ( (", lastEnemyHP, ") - 1 ) =", Math.floor(Math.abs((lastEnemyHP)-1)));
		console.log("LATTER:", maxPlayerHP, "-", currentPlayerHP, "=", (maxPlayerHP-currentPlayerHP));
		console.log(" ");
	
		currentPlayerHP += healedHP;
		actionLine++;
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "You used the <strong>" + itemUsed[0] + "</strong> and regained <strong>" + healedHP + "HP!</strong><br></span>";
	}
	else {
		currentPlayerHP += itemUsed[3];
		actionLine++;
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "You used the <strong>" + itemUsed[0] + "</strong> and regained <strong>" + itemUsed[3] + "HP!</strong><br></span>";
	}
	
	document.getElementById("playerHP").innerHTML = "<strong>" + currentPlayerHP + "/20</strong>";
	
	switch (itemUsed) {
		case itemSlot1:
			itemSlot1 = Items[0];
			inventory1.disabled = true;
			document.getElementById("inventory1").innerHTML = itemSlot1[0];
			item1Used = false;
		break;
		
		case itemSlot2:
			itemSlot2 = Items[0];
			inventory2.disabled = true;
			document.getElementById("inventory2").innerHTML = itemSlot2[0];
			item2Used = false;
		break;
		
		case itemSlot3:
			itemSlot3 = Items[0];
			inventory3.disabled = true;
			document.getElementById("inventory3").innerHTML = itemSlot3[0];
			item3Used = false;
		break;
	}
}

function itemDMG() {
    currentEnemyHP -= itemUsed[3];
    document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyHP + "/" + currentEnemyMaxHP + "</strong>";
		actionLine++;
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "You used the <strong>" + itemUsed[0] + "</strong> and inflicted <strong>" + itemUsed[3] + "DMG!</strong><br></span>";
	
	switch (itemUsed) {
		case itemSlot1:
			itemSlot1 = Items[0];
			inventory1.disabled = true;
			document.getElementById("inventory1").innerHTML = itemSlot1[0];
			item1Used = false;
		break;
		
		case itemSlot2:
			itemSlot2 = Items[0];
			inventory2.disabled = true;
			document.getElementById("inventory2").innerHTML = itemSlot2[0];
			item2Used = false;
		break;
		
		case itemSlot3:
			itemSlot3 = Items[0];
			inventory3.disabled = true;
			document.getElementById("inventory3").innerHTML = itemSlot3[0];
			item3Used = false;
		break;
	}
	
	// Check for HP in case of Overkill
    if (currentEnemyHP <= 0) {
		disableActs();
		document.getElementById("enemyHP").innerHTML = "<strong>" + 0 + "/" + currentEnemyMaxHP + "</strong>";
        
		setTimeout(() => { enemyDefeat(); }, 2000);
    }

    else {
        return;
    }
}

function itemNull() {
    return;
}


// DEBUG TEST

if (debugtest == true) {
	currentPlayerHP = maxPlayerHP;
	
	const ATK = currentWeapon[2];
	const HPS = currentPlayerHP;
	let STAT = ATK;
	
	console.log("DEBUGTEST: ATK currently at", currentWeapon[2]);
	console.log("DEBUGTEST: Currently editing ATK.")
	console.log("DEBUGTEST: Press Left to change HP. Press Right to get back to ATK.");
	console.log("DEBUGTEST: Press Up to raise, Down to lower.");
	console.log(" ");
	
	document.addEventListener("keyup", function(event) {
		
        if (event.key == "ArrowUp") {
			STAT++;
			if (STAT == ATK) {
				currentWeapon[2] = STAT;
				console.log("DEBUGTEST: ATK raised to", STAT);
			}
			else if (STAT == HPS) {
				currentPlayerHP = STAT;
				console.log("DEBUGTEST: HP raised to", STAT);
			}

            console.log("DEBUGTEST: ATK raised to", STAT);
        }
		else if (event.key == "ArrowDown") {
			STAT--;
            if (STAT == ATK) {
				currentWeapon[2] = STAT;
				console.log("DEBUGTEST: ATK lowered to", STAT);
			}
			else if (STAT == HPS) {
				currentPlayerHP = STAT;
				console.log("DEBUGTEST: HP lowered to", STAT);
			}
        }
		else if (event.key == "ArrowLeft") {
			if (STAT != HPS)
			{
				STAT = HPS;
				
				console.log("DEBUGTEST: Switched to HP editing");
			}
		}
		else if (event.key == "ArrowRight") {
			if (STAT != ATK)
			{
				STAT = ATK;
				
				console.log("DEBUGTEST: Switched to ATK editing");
			}
		}
    });
}