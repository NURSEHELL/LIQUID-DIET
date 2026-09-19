// Enemy array. ["NAME", "Images/img_src", HP, [Attack Pattern (6 turns)], Drop, Drop Type, [Dialogues (specify if none)]]
const Enemies = [
	// Normal Enemies (0 - 3)
    ["PATHETIC DUMMY", "Images/Enemy_PATHETIC_DUMMY.png", 3, [1, 0, 1, 0, 1, 0], 1, 0, ['<i>The enemy has nothing to say... </i> <br>']],
    ["PITIFUL DUMMY", "Images/Enemy_PATHETIC_DUMMY.png", 3, [0, 1, 0, 1, 0, 1], 2, 0, ['<i>"if you decompile this game something bad will happen to you"</i> <br>', '<i>"spageti"</i> <br>', '<i>"test123"</i> <br>']],
    ["ANASTASIA'S CHIMERA", "Images/Enemy_ANASTASIA_CHIMERA.png", 2, [1, 1, 0, 0, 0, 1], 3, 0, ['<i>"Run"</i> <br>', '<i>"I\'ve been falling away..."</i> <br>', '<i>"buy my crypto"</i> <br>', '<i>"lalala... oh im thinking of my bounb!!"</i> <br>', '<i>"ooooooooooooooooooooooooooooooooooooo"</i> <br>']],
    ["MISS OBEAST", "Images/Enemy_MISS_OBEAST.png", 2, [1, 2, 0, 0, 0, 1], 1, 1, ['<i>"Special Mode Unlocked! kidding"</i> <br>', '<i>"lalala... oh im thinking of my bounb!!"</i> <br>']],
	
	// Special Enemies (4 - 4)
	["CHAPELLE D'OR", "Images/PLACEHOLDER.png", 48, [0, 0, 0, 0, 0, 0], 0, 2, ['<i>"Oh? A new visitor? Welcome to the hospital!"</i> <br>', '<i>"Say, are you lost?"</i> <br>', '<i>"There\'s nothing in this part of the building."</i> <br>', '<i>The enemy is silent...</i> <br>', '<i>The enemy is silent...</i> <br>', '<i>The enemy is silent...</i> <br>', '<i>The enemy is silent...</i> <br>', '<i>"Scream for help if you\'re still able. Letting you live won\'t delay your death. Hahaha..."</i>']], // Appears on Round 48
];

// ATTACK TYPE 0 = Wait / 1 = Attack 1HP / 2 = Heal self 2HP
// DROP TYPE 0 = Item / 1 = Weapon / 2 = Nothing

// Item array. ["NAME", "Images/img_src", Utility, Utility Specifics]
const Items = [
	// No Items (0)
    ["Empty", "Images/Item_Empty.png", itemNull, 0],
	
	// Normal items (1 - 4)
    ["Energy Drink", "Images/Item_Energy.png", itemHeal, 1],
    ["Sludge", "Images/Item_Sludge.png", itemDMG, 2],
    ["Chimera Fetus", "Images/Item_Fetus.png", itemDMG, 1],
    ["Juicy Nectar", "Images/Item_Blood.png", itemHeal, 2], // True Heal value in itemHeal();
	
	// Fake items (5 - 6)
	["Electric Caress", "Images/Item_ObeastFur.png", itemHeal, -1], // Dropped by Round 10 boss
	["Piercing Gaze", "Imaes/Item_ChimEye.png", itemDMG, -2], // Dropped by Round 30 boss
];

// Weapon array. ["NAME", "Images/img_src", Damage, Accuracy, Special Effects (TBA)]
const Weapons = [
	// No weapon (0)
    ["None", "Images/Weapon_None.png", 1, 950],
	
	// Normal weapons (1 - 2)
    ["Letter Opener", "Images/Weapon_Letter.png", 2, 850],
	["Spiky Tails", "Images/Weapon_Tail.png", 3, 750],
	
	// Fake weapons (3 - 3)
	["Hand Puppet", "Images/Weapon_Dummy.png", -2, 950], // Dropped by Round 20 boss
];


// SETUP

debugmode = false;

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
	
	// Randomize and Boss/Special enemy setup

	switch (roundCounter) {
		case 10:
			randomEnemy = Enemies[3]; // BOSS 1 (Miss Obeast)
			
			enemyName = Enemies[3][0];
			
			document.getElementById("enemyName").innerHTML = Enemies[3][0];
			document.getElementById("enemyImg").src = Enemies[3][1];
			
			currentEnemyHP = Math.round(Enemies[3][2] + (currentWeapon[2] + (roundCounter / 10) - 1) * 2);
			document.getElementById("actionLog").innerHTML = '<span id="'+actionLine+'">' + "A strong <strong>" + enemyName + "</strong> comes your way...!<br></span>";
			
			// PLACEHOLDER DEBUG CONSOLE LOG
			console.log("Planned Enemy HP:", Enemies[3][2], "+ (", currentWeapon[2], "+ (", roundCounter, "/ 10 ) - 1 ) * 2 =", Math.round(Enemies[3][2] + (currentWeapon[2] + (roundCounter / 10) - 1) * 2), "// currentEnemyHP =", currentEnemyHP, "(BOSSFIGHT)");
			
			if (line >= Enemies[3][6].length) {
				talking.disabled = true;
			}
			else {
				talking.disabled = false;
			}
		break;
		
		case 20:
			randomEnemy = Enemies[0]; // BOSS 2 (Pathetic Dummy)
			
			enemyName = Enemies[0][0];
			
			document.getElementById("enemyName").innerHTML = Enemies[0][0];
			document.getElementById("enemyImg").src = Enemies[0][1];
			
			currentEnemyHP = Math.round(Enemies[0][2] + (currentWeapon[2] + (roundCounter / 10) - 1) * 2);
			document.getElementById("actionLog").innerHTML = '<span id="'+actionLine+'">' + "A strong <strong>" + enemyName + "</strong> comes your way...!<br></span>";
			
			// PLACEHOLDER DEBUG CONSOLE LOG
			console.log("Planned Enemy HP:", Enemies[0][2], "+ (", currentWeapon[2], "+ (", roundCounter, "/ 10 ) - 1 ) * 2 =", Math.round(Enemies[0][2] + (currentWeapon[2] + (roundCounter / 10) - 1) * 2), "// currentEnemyHP =", currentEnemyHP, "(BOSSFIGHT)");
			
			if (line >= Enemies[0][6].length) {
				talking.disabled = true;
			}
			else {
				talking.disabled = false;
			}
		break;
		
		case 30:
			randomEnemy = Enemies[2]; // BOSS 3 (Anastasia's Chimera)
			
			enemyName = Enemies[2][0];
			
			document.getElementById("enemyName").innerHTML = Enemies[2][0];
			document.getElementById("enemyImg").src = Enemies[2][1];
			
			currentEnemyHP = Math.round(Enemies[2][2] + (currentWeapon[2] + (roundCounter / 10) - 1) * 2);
			document.getElementById("actionLog").innerHTML = '<span id="'+actionLine+'">' + "A strong <strong>" + enemyName + "</strong> comes your way...!<br></span>";
			
			// PLACEHOLDER DEBUG CONSOLE LOG
			console.log("Planned Enemy HP:", Enemies[2][2], "+ (", currentWeapon[2], "+ (", roundCounter, "/ 10 ) - 1 ) * 2 =", Math.round(Enemies[2][2] + (currentWeapon[2] + (roundCounter / 10) - 1) * 2), "// currentEnemyHP =", currentEnemyHP, "(BOSSFIGHT)");
			
			if (line >= Enemies[2][6].length) {
				talking.disabled = true;
			}
			else {
				talking.disabled = false;
			}
		break;
		
		case 48:
			randomEnemy = Enemies[4]; // SPECIAL 1 (Chapelle d'Or)
			
			enemyName = Enemies[4][0];
			document.getElementById("enemyName").innerHTML = Enemies[4][0];
			document.getElementById("enemyImg").src = Enemies[4][1];
			
			alert("Where are you going?");
			currentEnemyHP = Enemies[4][2];
			document.getElementById("actionLog").innerHTML = '<span id="'+actionLine+'">' + "Where are you going?<br></span>";
			
			// PLACEHOLDER DEBUG CONSOLE LOG
			console.log("Planned Enemy HP:", Enemies[4][2], "// currentEnemyHP =", currentEnemyHP, "(SPECIAL ENCOUNTER)");
			
			if (line >= Enemies[4][6].length) {
				talking.disabled = true;
			}
			else {
				talking.disabled = false;
			}
		break;
		
		default:
			randomEnemy = Math.floor(Math.max(Math.random() * (Enemies.length-1), 0));
			console.log("randomEnemy should be", 0, "at min,", Enemies.length-1, "at max. | Enemy:", randomEnemy, "/ Enemies.length:", Enemies.length);
			
			enemyName = Enemies[randomEnemy][0];
			document.getElementById("enemyName").innerHTML = enemyName;
			document.getElementById("enemyImg").src = Enemies[randomEnemy][1];
			
			currentEnemyHP = Math.min(Math.round(Enemies[randomEnemy][2] + (currentWeapon[2] + (roundCounter / 10) - 1)), 20);
			document.getElementById("actionLog").innerHTML = '<span id="'+actionLine+'">' + "<strong>" + enemyName + "</strong> stares at you...<br></span>";
			
			// PLACEHOLDER DEBUG CONSOLE LOG
			console.log("Planned Enemy HP:", Enemies[randomEnemy][2], "+ (", currentWeapon[2], "+ (", roundCounter, "/ 10 ) - 1 ) =", Math.round(Enemies[randomEnemy][2] + (currentWeapon[2] + (roundCounter / 10) - 1)), "// currentEnemyHP =", currentEnemyHP);
			
			if (line >= Enemies[randomEnemy][6].length) {
				talking.disabled = true;
			}
			else {
				talking.disabled = false;
			}
		break;
	}
	
	if (itemSlot1 != Items[0] && itemSlot2 != Items[0] && itemSlot3 != Items[0]) {
		fullInv = true;
		
		// PLACEHOLDER DEBUG CONSOLE LOG
		console.log(" ");
		console.log("All item slots taken. fullInv is",fullInv);
		console.log(" ");
	}
	
	actionLine = 1;
	deleteLine = 1;
	console.log(actionLine, deleteLine);
	
	// HP Set for all types of Rounds
/*	switch (roundCounter) {
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
			console.log("Planned Enemy HP:", Enemies[randomEnemy][2], "+ (", currentWeapon[2], "+ (", roundCounter, "/ 10 ) - 1 ) * 2 =", Math.round(Enemies[randomEnemy][2] + (currentWeapon[2] + (roundCounter / 10) - 1) * 2), "// currentEnemyHP =", currentEnemyHP, "(BOSSFIGHT)");
		break;
		
		case 20:
			currentEnemyHP = Math.round(Enemies[randomEnemy][2] + (currentWeapon[2] + (roundCounter / 10) - 1) * 4);
			document.getElementById("actionLog").innerHTML = '<span id="'+actionLine+'">' + "A fearsome <strong>" + enemyName + "</strong> wants to fight!<br></span>";
			
			// PLACEHOLDER DEBUG CONSOLE LOG
			console.log("Planned Enemy HP:", Enemies[randomEnemy][2], "+ (", currentWeapon[2], "+ (", roundCounter, "/ 10 ) - 1 ) * 4 =", Math.round(Enemies[randomEnemy][2] + (currentWeapon[2] + (roundCounter / 10) - 1) * 4), "// currentEnemyHP =", currentEnemyHP, "(BOSSFIGHT)");
		break;
		
		case 30:
			currentEnemyHP = Math.round(Enemies[randomEnemy][2] + (currentWeapon[2] + (roundCounter / 10) - 1) * 6);
			document.getElementById("actionLog").innerHTML = '<span id="'+actionLine+'">' + "A terrifying <strong>" + enemyName + "</strong> rushes towards you!!<br></span>";
			
			// PLACEHOLDER DEBUG CONSOLE LOG
			console.log("Planned Enemy HP:", Enemies[randomEnemy][2], "+ (", currentWeapon[2], "+ (", roundCounter, "/ 10 ) - 1 ) * 6 =", Math.round(Enemies[randomEnemy][2] + (currentWeapon[2] + (roundCounter / 10) - 1) * 6), "// currentEnemyHP =", currentEnemyHP, "(BOSSFIGHT)");
		break;
		
		case 48:
			alert("Where are you going?");
			currentEnemyHP = Enemies[randomEnemy][2];
			document.getElementById("actionLog").innerHTML = '<span id="'+actionLine+'">' + "Where are you going?<br></span>";
			
			// PLACEHOLDER DEBUG CONSOLE LOG
			console.log("Planned Enemy HP:", Enemies[randomEnemy][2], "// currentEnemyHP =", currentEnemyHP, "(SPECIAL ENCOUNTER)");
    }*/

	// Set enemy HP
	currentEnemyMaxHP = currentEnemyHP;
    document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyHP + "/" + currentEnemyMaxHP + "</strong>";
	
	playerAttack.disabled = false;
	
/*	if (line >= Enemies[currentEnemy][6].length) {
		talking.disabled = true;
	}
	else {
		talking.disabled = false;
	}*/

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
    document.getElementById("playerHP").innerHTML = "<strong>" + currentPlayerHP + "/" + maxPlayerHP + "</strong>";
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

    document.getElementById("playerHP").innerHTML = "<strong>" + currentPlayerHP + "/" + maxPlayerHP + "</strong>";
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
	maxPlayerHP = 20;
	document.getElementById("playerStats").innerHTML = 'Your HP: <span id="playerHP"></span>';
    document.getElementById("playerHP").innerHTML = "<strong>" + currentPlayerHP + "/" + maxPlayerHP + "</strong>";
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
	document.getElementById("playerHP").innerHTML = "<strong>" + currentPlayerHP + "/" + maxPlayerHP + "</strong>";
	document.getElementById("playerWPN").innerHTML = "<strong>" + currentWeapon[0] + "</strong>";
	
	// PLACEHOLDER DEBUG CONSOLE LOG
	console.log("You should NOW have", currentWeapon[2], "ATK and", (currentWeapon[2] * 2), "on CRITs");
	
}

function weaponDiscard() {
	actionLine++;
	document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "You discarded the weapon...<br></span>";
    weaponEquipBtn.disabled = true;
    weaponDiscardBtn.disabled = true;
    setTimeout(() => { randomizeEnemy(); }, 2500);
    weaponMenu.style.visibility = "hidden";
	
	// PLACEHOLDER DEBUG CONSOLE LOG
	console.log("You should STILL have", currentWeapon[2], "ATK and", (currentWeapon[2] * 2), "on CRITs");
	
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
		console.log("OVERKILL!! Enemy died at", lastEnemyHP, "HP");
		console.log("juicyHeal should be one above & always positive:", juicyHeal);
		console.log(" ");
		
		if (enemyDrop[2] == itemNull) {
			document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong><u>OVERKILL!!</u> ITEM GOT!</strong> (" + enemyDrop[0] + ")<br></span>";
		}
		else if (enemyDrop[2] == itemDMG) {
			document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong><u>OVERKILL!!</u> ATTACK ITEM GOT!</strong> (" + enemyDrop[0] + ")<br></span>";
		}
		else if (enemyDrop[2] == itemHeal) {
			document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong><u>OVERKILL!!</u> HEALING ITEM GOT!</strong> (" + enemyDrop[0] + ")<br></span>";
		}
			
	}
	else {
		if (enemyDrop[2] == itemNull) {
			document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong>ITEM GOT!</strong> (" + enemyDrop[0] + ")<br></span>";
		}
		else if (enemyDrop[2] == itemDMG) {
			document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong>ATTACK ITEM GOT!</strong> (" + enemyDrop[0] + ")<br></span>";
		}
		else if (enemyDrop[2] == itemHeal) {
			document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong>HEALING ITEM GOT!</strong> (" + enemyDrop[0] + ")<br></span>";
		}
	}
	
	setTimeout(() => { randomizeEnemy(); }, 2500);
	return;
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
	return;
}


// GRANT WEAPON

function grantWeapon() {
	actionLine++;
	if (currentEnemyHP < 0) {
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
	

// ENEMY DEFEAT

function enemyDefeat() {
	disableAll();

    /*if (Enemies[randomEnemy][5] == 0) {
        enemyDrop = Items[Enemies[randomEnemy][4]];
    }

    else if (Enemies[randomEnemy][5] == 1) {
		if (currentWeapon != Weapons[1]) {
			enemyDrop = Weapons[Enemies[randomEnemy][4]];
		}
		else {
			enemyDrop = Items[Enemies[randomEnemy][4]];
		}
    }*/
	
	actionLine = 1;
	deleteLine = 1;
	
	document.getElementById("actionLog").innerHTML = '<span id="'+actionLine+'">' + "Enemy defeated! <strong>Round won!</strong><br></span>";
	enemyKilled = true;

	// MISS OBEAST WEAPON DROP
	/*if (Enemies[randomEnemy][5] == 1) {
		if (currentWeapon != Weapons[1]) {
			enemyDrop = Weapons[Enemies[randomEnemy][4]];
			grantWeapon();
		}
			
		if (anyItem == Items[0]) {
			enemyDrop = Items[5];
			grantDrop();
		}
		else {
			maxItems();
		}
	}*/

	// Randomize and Boss/Special enemy setup
	switch (roundCounter) {
		default:
			if (Enemies[randomEnemy][5] == 0) {
				enemyDrop = Items[Enemies[randomEnemy][4]];
				grantDrop();
			}

			else if (Enemies[randomEnemy][5] == 1) {
				if (Enemies[randomEnemy][0] == "MISS OBEAST") {
					if (currentWeapon != Weapons[1]) {
						enemyDrop = Weapons[Enemies[randomEnemy][4]];
						grantWeapon();
					}
					else {
						setTimeout(() => { randomizeEnemy(); }, 2500);
					}
				}
			}
			
			else if (Enemies[randomEnemy][5] == 2) { 
				setTimeout(() => { randomizeEnemy(); }, 2500);
			}
		break;
		
		case 10:
			enemyDrop = Items[5]; // BOSS 1 (Electric Caress, ITEM)
			grantDrop();
		break;
		
		case 20:
			enemyDrop = Weapons[3]; // BOSS 2 (Hand Puppet, WPN)
			grantDrop();
		break;
		
		case 30:
			enemyDrop = Items[6]; // BOSS 3 (Piercing Gaze, ITEM)
			grantDrop();
		break;
		
		case 48: // SPECIAL 1 (Nothing)
		break;
	}

    // Check for Overkill
	if (currentEnemyHP < 0) {
		lastEnemyHP = currentEnemyHP;
		document.getElementById("enemyHP").innerHTML = "<strong>" + 0 + "/" + currentEnemyMaxHP + "</strong>";
		
		enemyDrop = Items[4];
		
		if (Enemies[randomEnemy][0] == "ANASTASIA'S CHIMERA" && currentWeapon != Weapons[2]) {
			enemyDrop = Weapons[2];
			grantWeapon();
		}
		
		// Overkill Bonus Item
		if (anyItem == Items[0] && fullInv == false) {
			enemyDrop = Items[4];
			grantDrop();
		}
		else {
			maxItems();
		}
		
		return;
	}
	
	// NORMAL DROP
/*	if (Enemies[randomEnemy][5] == 0) {
		if (anyItem == Items[0] && fullInv == false) {
				grantDrop();
		}
		else {
			maxItems();
		}
		
		return;
	}
	
	// NO DROP
	if (Enemies[randomEnemy][5] == 2) {
		setTimeout(() => { randomizeEnemy(); }, 2500);
	}*/
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
		
		// Check if heal-attack
		if (currentEnemyHP > currentEnemyMaxHP) {
			currentEnemyMaxHP = currentEnemyHP;
			actionLine++
			document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong>CRITICAL HIT!!</strong> You tear into the enemy! Yet it heals them...<br></span>";
			document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyHP + "/" + currentEnemyMaxHP + "</strong>";
		}
		else {
			actionLine++;
			document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong>CRITICAL HIT!!</strong> You tear into the enemy!<br></span>";
			document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyHP + "/" + currentEnemyMaxHP + "</strong>";
		}
    }
	
    else if (hitRNG <= hitRate) {
        currentEnemyHP -= currentWeapon[2];
		
		// Check if heal-attack
		if (currentEnemyHP > currentEnemyMaxHP) {
			currentEnemyMaxHP = currentEnemyHP;
			actionLine++
			document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "You attack the enemy! Strangely, it heals them...<br></span>";
			document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyHP + "/" + currentEnemyMaxHP + "</strong>";
		}
		else {
			actionLine++;
			document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "You attack the enemy!<br></span>";
			document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyHP + "/" + currentEnemyMaxHP + "</strong>";
		}
    }
		
    else {
		actionLine++;
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "You missed...<br></span>";
    }

    // Player HP min/max
    if (currentPlayerHP < 0) {
        currentPlayerHP = 0;
        document.getElementById("playerHP").innerHTML = "<strong>" + 0 + "/" + maxPlayerHP + "</strong>";
    }
    if (currentPlayerHP > maxPlayerHP) {
        currentPlayerHP = maxPlayerHP;
        document.getElementById("playerHP").innerHTML = "<strong>" + maxPlayerHP + "/" + maxPlayerHP + "</strong>";
    }
	
	// Enemy HP minimum (visually)
	if (currentEnemyHP < 0) {
		document.getElementById("enemyHP").innerHTML = "<strong>" + 0 + "/" + currentEnemyMaxHP + "</strong>";
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
		console.log("runRNG =", runRNG, "( Off by", (runOffLimit-runRNG), ")");
		
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
	itemUsed = itemSlot1;
	item1Used = true;
	fullInv = false;
	
	// PLACEHOLDER DEBUG CONSOLE LOG
	console.log("Using Item 1. fullInv is", fullInv);
	console.log(" ");
}

function useItem2() {
	itemUsed = itemSlot2;
	item2Used = true;
	fullInv = false;
	
	// PLACEHOLDER DEBUG CONSOLE LOG
	console.log("Using Item 2. fullInv is", fullInv);
	console.log(" ");
}

function useItem3() {
	itemUsed = itemSlot3;
	item3Used = true;
	fullInv = false;
	
	// PLACEHOLDER DEBUG CONSOLE LOG
	console.log("Using Item 3. fullInv is", fullInv);
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
		
		// No-heal / Un-heal items
		if (itemUsed[3] == 0) {
			actionLine++;
			document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "You used the <strong>" + itemUsed[0] + "</strong>... but it had no effect.<br><span>";
		}
		else if (itemUsed[3] < 0) {
			actionLine++;
			document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "You used the <strong>" + itemUsed[0] + "</strong>... Ouch! You lost <strong>" + Math.abs(itemUsed[3]) + "HP!</strong><br><span>";
		}
		else {
			actionLine++;
			document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "You used the <strong>" + itemUsed[0] + "</strong> and regained <strong>" + itemUsed[3] + "HP!</strong><br></span>";
		}
	}
	
	document.getElementById("playerHP").innerHTML = "<strong>" + currentPlayerHP + "/" + maxPlayerHP + "</strong>";
	
	if (item1Used == true) {
		itemSlot1 = Items[0];
		inventory1.disabled = true;
		document.getElementById("inventory1").innerHTML = itemSlot1[0];
		item1Used = false;
	}
	
	if (item2Used == true) {
		itemSlot2 = Items[0];
		inventory2.disabled = true;
		document.getElementById("inventory2").innerHTML = itemSlot2[0];
		item2Used = false;
	}
	
	if (item3Used == true) {
		itemSlot3 = Items[0];
		inventory3.disabled = true;
		document.getElementById("inventory3").innerHTML = itemSlot3[0];
		item3Used = false;
	}
}

function itemDMG() {
    currentEnemyHP -= itemUsed[3];
    document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyHP + "/" + currentEnemyMaxHP + "</strong>";
	
	// No-hurt / Un-hurt items
	if (itemUsed[3] == 0) {
		actionLine++;
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "You used the <strong>" + itemUsed[0] + "</strong>... but it had no effect.<br><span>";
	}
	else if (itemUsed[3] < 0) {
		actionLine++;
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "You used the <strong>" + itemUsed[0] + "</strong>... Uh-oh! The enemy regained <strong>" + Math.abs(itemUsed[3]) + "HP!</strong><br><span>";
	}
	else {
		actionLine++;
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "You used the <strong>" + itemUsed[0] + "</strong> and inflicted <strong>" + itemUsed[3] + "HP!</strong><br></span>";
	}
	
	if (item1Used == true) {
		itemSlot1 = Items[0];
		inventory1.disabled = true;
		document.getElementById("inventory1").innerHTML = itemSlot1[0];
		item1Used = false;
	}
	
	if (item2Used == true) {
		itemSlot2 = Items[0];
		inventory2.disabled = true;
		document.getElementById("inventory2").innerHTML = itemSlot2[0];
		item2Used = false;
	}
	
	if (item3Used == true) {
		itemSlot3 = Items[0];
		inventory3.disabled = true;
		document.getElementById("inventory3").innerHTML = itemSlot3[0];
		item3Used = false;
	}
	
	// Check for HP in case of Overkill/Unhurt
    if (currentEnemyHP <= 0) {
		disableAll();
		document.getElementById("enemyHP").innerHTML = "<strong>" + 0 + "/" + currentEnemyMaxHP + "</strong>";
        
		setTimeout(() => { enemyDefeat(); }, 2000);
    }
	else if (currentEnemyHP > currentEnemyMaxHP) {
		currentEnemyMaxHP = currentEnemyHP;
		document.getElementById("enemyHP").innerHTML = "<strong>" + 0 + "/" + currentEnemyMaxHP + "</strong>";
	}
}

function itemNull() {
    return;
}


// DEBUG MODE

if (debugmode == true) {
	
	var STAT = 0;
	var CHOICE = undefined;
	
	console.log("DEBUG MODE ACTIVE - INSTRUCTIONS:");
	console.log("Press RIGHT to edit Attack DMG. Press RIGHT TWICE to edit Enemy HP.")
	console.log("Press LEFT to edit Player HP. Press LEFT TWICE to edit Max HP.");
	console.log("Press UP to Raise Stat. Press DOWN to Lower Stat.");
	console.log("Press R to Reroll Enemy (doesn't reset stats). Press K to Reset Run (resets stats).");
	console.log("Press P to Pass Round (doesn't reset stats). Press H to read instructions again.");
	console.log("####################################################################################################");
	
	document.addEventListener("keyup", function(event) {
		
		// INSTRUCTIONS
		if (event.keyCode == 72) {
			console.log("####################################################################################################");
			console.log("Press RIGHT to edit Attack DMG. Press RIGHT TWICE to edit Enemy HP.")
			console.log("Press LEFT to edit Player HP. Press LEFT TWICE to edit Max HP.");
			console.log("Press UP to Raise Stat. Press DOWN to Lower Stat.");
			console.log("Press R to Reroll Enemy (doesn't reset stats). Press K to Reset Run (resets stats).");
			console.log("Press P to Pass Round (brings enemy to 0HP). Press H to read instructions again.");
			console.log("####################################################################################################");
			return;
		}
		
		// RESET RUN
		else if (event.keyCode == 75) {
			console.log("####################################################################################################");
			playerRevive();
			console.log("DEBUG MODE: Run reset successfully.");
			return;
		}
		
		// PASS ROUND
		else if (event.keyCode == 80) {
			document.getElementById("enemyHP").innerHTML = "<strong>" + 0 + "/" + currentEnemyMaxHP + "</strong>";
			console.log("####################################################################################################");
			enemyKilled = true;
			enemyDefeat();
			console.log("DEBUG MODE: Enemy killed successfully.");
			console.log("/!\\ PLEASE WAIT UNTIL NEXT ENEMY BEFORE USING DEBUG AGAIN.");
			return;
		}
		
		// REROLL ENEMY
		else if (event.keyCode == 82) {
			console.log("####################################################################################################");
			randomizeEnemy();
			console.log("DEBUG MODE: Enemy rerolled successfully.");
			console.log("INFO: The enemy might look the same, but it isn't.");
			return;
		}
		
		// RAISE STAT
        else if (event.key == "ArrowUp") {
			
			if (CHOICE === undefined) {
				console.log("DEBUG MODE: Nothing is selected! Press H (or read above) for instructions!");
				return;
			}
			
			STAT++;
			
			if (CHOICE === "Enemy HP") {
				currentEnemyHP = STAT;
				currentEnemyMaxHP = STAT;
				document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyHP + "/" + currentEnemyMaxHP + "</strong>";
				console.log(CHOICE, "raised to", STAT);
				return;
			}
			else if (CHOICE === "Attack DMG") {
				currentWeapon[2] = STAT;
			}
			else if (CHOICE === "Player HP") {
				currentPlayerHP = STAT;
				
				if (currentPlayerHP > maxPlayerHP) {
					maxPlayerHP = currentPlayerHP;
				}
				
				document.getElementById("playerHP").innerHTML = "<strong>" + currentPlayerHP + "/" + maxPlayerHP + "</strong>";
			}
			else if (CHOICE === "Max HP") {
				maxPlayerHP = STAT;
				document.getElementById("playerHP").innerHTML = "<strong>" + currentPlayerHP + "/" + maxPlayerHP + "</strong>";
			}
			
			console.log(CHOICE, "raised to", STAT);
		}
		
		// LOWER STAT
		else if (event.key == "ArrowDown") {
			
			if (CHOICE === undefined) {
				console.log("DEBUG MODE: Nothing is selected! Press H (or read above) for instructions!");
				return;
			}
			
			STAT--;
			
			if (CHOICE === "Enemy HP") {
				currentEnemyHP = STAT;
				document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyHP + "/" + currentEnemyMaxHP + "</strong>";
				
				if (currentEnemyHP <= 0) {
					enemyDefeat();
					console.log("/!\\ PLEASE WAIT UNTIL NEXT ENEMY BEFORE USING DEBUG AGAIN.");
					return;
				}
			}
            else if (CHOICE === "Attack DMG") {
				currentWeapon[2] = STAT;
			}
			else if (CHOICE === "Player HP") {
				currentPlayerHP = STAT;
				document.getElementById("playerHP").innerHTML = "<strong>" + currentPlayerHP + "/" + maxPlayerHP + "</strong>";
				
				if (currentPlayerHP <= 0) {
					playerDefeat();
					console.log("/!\\ PLEASE RESET RUN BEFORE USING DEBUG AGAIN.");
					return;
				}
			}
			else if (CHOICE === "Max HP") {
				maxPlayerHP = STAT;
				
				if (maxPlayerHP < currentPlayerHP) {
					currentPlayerHP = maxPlayerHP;
				}
				
				document.getElementById("playerHP").innerHTML = "<strong>" + currentPlayerHP + "/" + maxPlayerHP + "</strong>";
				
				if (currentPlayerHP <= 0) {
					playerDefeat();
					console.log("/!\\ PLEASE RESET RUN BEFORE USING DEBUG AGAIN.");
					return;
				}
			}
			
			console.log(CHOICE, "lowered to", STAT);
		}
		
		// SWITCH LEFT (Enemy HP -> Attack DMG -> Player HP -> Max HP)
		else if (event.key == "ArrowLeft") {
			if (CHOICE === "Enemy HP") {
				CHOICE = "Attack DMG";
				STAT = currentWeapon[2];
				console.log("####################################################################################################");
				console.log("DEBUG MODE: Now editing", CHOICE, "// Currently at", currentWeapon[2]);
				console.log("INFO: Enemy HP scales with your Attack DMG.");
				return;
			}
			if (CHOICE === "Attack DMG" || CHOICE === undefined) {
				CHOICE = "Player HP";
				STAT = currentPlayerHP;
				console.log("####################################################################################################");
				console.log("DEBUG MODE: Now editing", CHOICE, "// Currently at", currentPlayerHP);
				console.log("INFO: Raising past Max HP will ALSO raise Max HP. Lowering to 0 will kill you.");
				return;
			}
			else if (CHOICE === "Player HP") {
				CHOICE = "Max HP";
				STAT = maxPlayerHP;
				console.log("####################################################################################################");
				console.log("DEBUG MODE: Now editing", CHOICE, "// Currently at", maxPlayerHP);
				console.log("INFO: Lowering below Player HP will ALSO lower Player HP.");
			}
			else if (CHOICE === "Max HP") {
				console.log("DEBUG MODE: Nothing past " + CHOICE + ". Press RIGHT to switch.");
				return;
			}
		}
		
		// SWITCH RIGHT (Max HP -> Player HP -> Attack DMG -> Enemy HP)
		else if (event.key == "ArrowRight") {
			if (CHOICE === "Max HP") {
				CHOICE = "Player HP";
				STAT = currentPlayerHP;
				console.log("####################################################################################################");
				console.log("DEBUG MODE: Now editing", CHOICE, "// Currently at", currentPlayerHP);
				console.log("INFO: Raising past Max HP will ALSO raise Max HP. Lowering to 0 will kill you.");
				return;
			}
			else if (CHOICE === "Player HP" || CHOICE === undefined) {
				CHOICE = "Attack DMG";
				STAT = currentWeapon[2];
				console.log("####################################################################################################");
				console.log("DEBUG MODE: Now editing", CHOICE, "// Currently at", currentWeapon[2]);
				console.log("INFO: Enemy HP scales with your Attack DMG.");
				return;
			}
			else if (CHOICE === "Attack DMG") {
				CHOICE = "Enemy HP";
				STAT = currentEnemyHP;
				console.log("####################################################################################################");
				console.log("DEBUG MODE: Now editing", CHOICE, "// Currently at", currentEnemyHP);
				console.log("INFO: Raising will ALSO raise the enemy's Max HP. Lowering to 0 will kill it.");
				return;
			}
			else if (CHOICE === "Enemy HP") {
				console.log("DEBUG MODE: Nothing past " + CHOICE + ". Press LEFT to switch.")
				return;
			}
		}
	});
}