
// Added all my buuuuullshiiiiiiiiiiiiiiiii  which is to say fixes, touchups and systems here and there.
// Thank YOU for being such a huge inspiration!! Enjoy your time on LD before I make you suffer through gamedev art hell when the tables turn
// I love you more >SEOKU

// =================================================================================================================================================
// ENEMY ARRAY ["NAME", "Images/img_src", Base HP, [Attack Pattern (6 turns)], [Drops (OG, Overk, Reskin)], [Drop Types (OG, Overk, Reskin)], [Dialogues]]
// =================================================================================================================================================

const Enemies = [

// Normal Enemies (0 - 6)

	// DEPTH 0 ENEMIES
	[
		["TRAINING DUMMY", "Images/Enemy_PATHETIC_DUMMY.png", 3, [0, 1, 0, 0, 0, 0], [2, 2, 3], [1, 1, 2], ['<i>The enemy has nothing to say, but... </i> <br>', '<i>It keeps looking at another enemy, then back at what it\'s holding... </i> <br>']],
		["MISS OBEAST", "Images/Enemy_MISS_OBEAST.png", 2, [1, 0, 0, 2, 0, 0], [1, 1, 5], [1, 2, 1], ['<i>"Meee- oh, my lucky charm. I\'d never give it away. You\'d have to steal it!"</i> <br>', '<i>"Maaa- oh, but if I\'m drunk, I might also, accidentally..."</i> <br>', ]],
	],
	// DEPTH 1 ENEMIES
	[
		["WILD ANGEL", "Images/PLACEHOLDER.png", 3, [1, 1, 0, 0, 1, 0], [1, 4, NaN], [1, 1, NaN], ['<i>"The weak-willed are not long for this world. They all play a part in a system."</i> <br>', '<i>"Predator and prey, it\'s the natural order of things."</i> <br>', '<i>"...But what would <strong> you </strong> understand about serving a higher purpose?"</i> <br>', '<i>The enemy\'s mouth is too full to speak.</i> <br>']],
		["PATHETIC DUMMY", "Images/Enemy_PATHETIC_DUMMY.png", 3, [0, 1, 0, 0, 1, 0], [1, 1, 3], [1, 3, 2], ['<i>"Looking for trouble? Huh?"</i> <br>', '<i>"You don\'t know what I got under there."</i> <br>', '<i>"Hahaha. Come and get it. IF YOU CAN REACH IT!"</i> <br>']],
	],
	// DEPTH 2 ENEMIES
	[
		["DEPTH 2 ENEMY", "Images/Enemy_PATHETIC_DUMMY.png", 3, [0, 1, 0, 0, 1, 1], [1, 4, NaN], [1, 1, NaN], ['<i>You cannot understand this enemy... </i> <br>']],
		["ANASTASIA'S CHIMERA", "Images/Enemy_ANASTASIA_CHIMERA.png", 4, [1, 0, 1, 0, 1, 0], [3, 2, 6], [1, 2, 1], ['<i>"My, what are you grabbing at? Haha~"</i> <br>', '<i>"Don\'t talk to my son or I will call the police."</i> <br>', '<i>"I only give myself to those strong enough to knock me out~"</i> <br>', '<i>"Who do you think you are? I\'m stronger than you will ever be."</i> <br>',]],
	],
	// DEPTH 3 ENEMIES
	[
		["DEPTH 3 ENEMY", "Images/Enemy_PATHETIC_DUMMY.png", 3, [1, 1, 2, 1, 1, 1], [1, 4, NaN], [1, 1, NaN], ['<i>The enemy speaks gibberish... </i> <br>']],
	],
	
	
// Special Enemies (7)

	// ROUND 48 ENEMY
	[
		["CHAPELLE D'OR", "Images/PLACEHOLDER.png", 48, [0, 2, 0, 0, 2, 0], [2, 2, NaN], [3, 3, NaN], ['<i>"Oh? A new visitor? Welcome to the hospital!"</i> <br>', '<i>"Say, are you lost?"</i> <br>', '<i>"There\'s nothing in this part of the building."</i> <br>', '<i>The enemy is silent...</i> <br>', '<i>The enemy is silent...</i> <br>', '<i>The enemy is silent...</i> <br>', '<i>The enemy is silent...</i> <br>', '<i>"Scream for help if you\'re still able. Letting you live won\'t delay your death. Hahaha..."</i> <br>']],
	],
];

// ATTACK TYPE: 0 = Wait / 1 = Attack / 2 = Heal self
// DROP TYPE: 0 = Nothing / 1 = Item / 2 = Weapon / 3 = Armor / NaN = No Reskin

// Enemies can be Normal, Special or Reskinned:
// Special enemies appear only on specific conditions.
// Reskinned enemies are not in this list (aside from their Drop/DType).
// Normal enemies spawn randomly on normal rounds.

// Enemies should always have one line. If there are none, copy-paste this in Dialogues: ['<i>The enemy has nothing to say... </i> <br>']
// You can also edit that line to make it more or less ominous.


// =======================================================================================
// ITEM ARRAY ["Name", "Images/img_src", Utility, Utility Specifics]
// =======================================================================================

const Items = [

	// Empty (0)
	["Empty", "Images/Item_Empty.png", itemNull, 0],

	// Positive Items (1 - 4)
	["Energy Drink", "Images/Item_Energy.png", itemHeal, 1],
	["Sludge", "Images/Item_Sludge.png", itemDMG, 2],
	["Chimera Fetus", "Images/Item_Fetus.png", itemDMG, 1],
	["Juicy Nectar", "Images/Item_Blood.png", itemHeal, 2], // True heal in itemHeal();

	// Negative Items (5 - 6)
	["Electric Caress", "Images/Item_ObeastFur.png", itemHeal, -1], // Round 10
	["Piercing Gaze", "Imaes/Item_ChimEye.png", itemDMG, -1], // Round 30

	// Useless items (TBA)

];

// Items can be Positive, Negative or Useless:
// Positive Healing will heal the player. Positive Damage will hurt the enemy.
// Negative Healing will hurt the player. Negative Damage will heal the enemy.
// Useless items will do nothing.


// =======================================================================================
// WEAPON ARRAY ["Name", "Images/img_src", Damage, Accuracy, Special Effects (TBA)]
// =======================================================================================

const Weapons = [

	// Empty (0)
	["None", "Images/Weapon_None.png", 1, 950],

	// Positive Weapons (1 - 2)
	["Letter Opener", "Images/Weapon_Letter.png", 2, 850],
	["Spiky Tails", "Images/Weapon_Tail.png", 3, 750],

	// Negative Weapons (3)
	["Hand Puppet", "Images/Weapon_Dummy.png", -2, 1000], // Round 20

	// Useless Weapons (TBA)

];

// Weapons can be Positive, Negative or Useless:
//
// Positive Weapons will hurt the enemy when attacked.
// Negative Weapons will heal the enemy when attacked.
// Useless Weapons will deal no damage.
//
// You can activate a special timer to remove them in specialTimerMoment !


// =======================================================================================
// ARMOR ARRAY ["Name", "Images/img_src", Protection, Special Effects (TBA)]
// =======================================================================================

const Armors = [

	// Empty (0)
	["None", "Images/Armor_None.png", 0],

	// Positive Armors (1)
	["Test Pos", "Images/PLACEHOLDER.png", 1],

	// Negative Armors (2)
	["Test Neg", "Images/PLACEHOLDER.png", -1],

	// Useless Armors (TBA)

];

// Armors can be Positive, Negative or Useless:
//
// Positive Armors will reduce damage when attacked.
// Negative Armors will heal you when attacked.
// Useless Armors will act as if you have none.
//
// You can activate a special timer to remove them in specialTimerMoment !


// =============================
// SETUP
// =============================

debugmode = false;

// Juicyheal stuff
lastEnemyHP = 0;
juicyHeal = 2;
enemyKilled = false;

// Actionlog stuff
line = 0; 		// The dialogue line of an enemy
actionLine = 1;
deleteLine = 1;
maxLines = 11; 	// Amount of lines readable in the actionlog (+1), can be changed

// Enemy stuff
currentEnemyMinHP = 0;
currentEnemyHP = 3;
currentEnemyMaxHP = currentEnemyHP;
enemyDrop = Items[0];
enemyDropType = undefined;
specialEncounter = false;
currentEnemyLines = undefined;  // These fix an issue with dialogue for reskinned enemies.
lastReskin = undefined;         // I realized that reskinned enemies probably won't be in the final game,
lastReskinLines = 0;            // but at least we have them? Special random events to change dial maybe?
bossTime = false;
isReskin = false;

// Player stuff
minPlayerHP = ogPlayerMinHP = 0;
maxPlayerHP = ogPlayerMaxHP = 20;
currentPlayerHP = ogPlayerCurrentHP = 5;
ranOff = false;
runFail = false;
currentWeapon = Weapons[0];
currentArmor = Armors[0];
equipWhat = undefined;
knowsWeapons = false;
knowsArmors = false;

// Special Timer stuff
specialTimer = 1;
specialTimerMax = 1;
specialTimerActive = false;
specialTimerWhy = undefined; // Reason for activation, used to raise max in specialTimerMoment();

// HTML stuff
roundCounter = 1;
weaponMenu.style.visibility = "hidden";
weaponEquipBtn.disabled = true;
weaponDiscardBtn.disabled = true;
document.getElementById("weaponEquipBtn").addEventListener("click", weaponEquip);
document.getElementById("weaponDiscardBtn").addEventListener("click", weaponDiscard);

// Depth stuff
currentDepth = 0;
depthName = currentDepth;
depthCheck();

// Inventory stuff
clickFix = false; // Fixes a weird issue with negative itemHeal
itemSlot1 = Items[0];
itemSlot2 = Items[0];
itemSlot3 = Items[0];
anyItem = itemSlot1 || itemSlot2 || itemSlot3;
fullInv = false;
itemUsed = undefined;

// Alert stuff
alertTitle = "ALERT TEST";
alertMainText = "Wow!<br>You just tested the cool alert.";
alertButtonText = "AWESOME BRO";

// Disable/Enable functions stuff
function disableActs() {
	playerAttack.disabled = true;
	talking.disabled = true;
	runAway.disabled = true;
}

function disableInvs() {
	knowsWeapons = false;
	knowsArmors = false;	
	
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
	runFail = false;
}

function depthCheck() {

	const pageText = document.getElementById("playerStats");

	if (roundCounter >= 0 && roundCounter <= 9) {
		document.body.style.backgroundColor = "#d7d7d7";
		currentDepth = 0;
		depthName = currentDepth;
	}

	if (roundCounter >= 10 && roundCounter <= 19) {
		document.body.style.backgroundColor = "#999993";
		currentDepth = 1;
		depthName = currentDepth;
	}

	if (roundCounter >= 20 && roundCounter <= 29) {
		document.body.style.background = "#5f70da";
		currentDepth = 2;
		depthName = currentDepth;
	}

	if (roundCounter >= 30 && roundCounter <= 39) {
		document.body.style.background = "rgb(155, 38, 50)";
		currentDepth = 3;
		depthName = currentDepth;
	}

	if (roundCounter == 48) {
		document.body.style.background = "red";
		currentDepth = 3;
		depthName = "WRONG";
	}


	console.log("Current Depth:", currentDepth);
	console.log("Depth Name:", depthName);

	// VIVO> Unsure how to make DEPTH: WRONG unlockable.
}

function enableInvs() {
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
}

function enableAll() {
	playerAttack.disabled = false;

	if (line >= currentEnemyLines) {
		talking.disabled = true;
	}
	else {
		talking.disabled = false;
	}

	runAway.disabled = false;

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

	runFail = false;
}

function playerReset() {
	minPlayerHP = ogPlayerMinHP;
	maxPlayerHP = ogPlayerMaxHP;
	currentPlayerHP = ogPlayerCurrentHP;
	currentWeapon = Weapons[0];
	currentArmor = Armors[0];
}


// =============================
// INITIALIZE ENEMY
// =============================

function randomizeEnemy() {
	// Separate previous enemy console logs
	console.log(" ");
	specialTimerMoment();

	elapsedTurns = 0;
	line = 0;

	actionLine = 1;
	deleteLine = 1;

	equipWhat = undefined;

	// Round up if ran away
	if (ranOff) {
		ranOff = false;
		roundCounter++;
		depthCheck();
		document.getElementById("roundNum").innerHTML = `<u>Round: ${roundCounter}</u> | <u>Depth: ${depthName}</u>`;
	}

	if (enemyKilled) {
		enemyKilled = false;

		// Up Round Counter by 1
		roundCounter++;
		depthCheck();
		document.getElementById("roundNum").innerHTML = `<u>Round: ${roundCounter}</u> | <u>Depth: ${depthName}</u>`;
	}

	// Randomize and Boss/Special enemy setup
	switch (roundCounter) {

		// BOSS 1 (RESKIN of Miss Obeast)
		case 10:
			bossTime = true;
			isReskin = true;
			randomEnemy = Enemies[0][1];
			currentEnemy = randomEnemy;

			lastReskin = currentEnemy;

			enemyName = "CHESHIRE CHILD";

			document.getElementById("actionLog").innerHTML = '<span id="' + actionLine + '">' + "The <strong>" + enemyName + "</strong> comes your way...!<br></span>";

			var arr = currentEnemy[6];
			arr.unshift('<i>"Let my caress guide you..."</i> <br>', '<i>"... or not! Heehee..."</i> <br>', '<i>"What? Don\'t trust me?"</i> <br>', '<i>"Oh, you poor thing."</i> <br>');

			currentEnemyLines = 4;
			lastReskinLines = currentEnemyLines;
		break;

		// BOSS 2 (RESKIN of Pathetic Dummy)
		case 20:
			bossTime = true;
			isReskin = true;
			randomEnemy = Enemies[1][1];
			currentEnemy = randomEnemy;

			lastReskin = currentEnemy;

			enemyName = "COWARDLY DUMMY";

			document.getElementById("actionLog").innerHTML = '<span id="' + actionLine + '">' + "The <strong>" + enemyName + "</strong> wants to fight!<br></span>";

			var arr = currentEnemy[6];
			arr.unshift('<i>"I-I won\'t let you hurt anyone, you hear me?!"</i> <br>', '<i>"L-Leave me alone! ... Or else!!"</i> <br>', '<i>The enemy is stuttering...</i> <br>', '<i>"W-What do you want?!"</i> <br>', '<i>"I... I won\'t let you hurt ANYONE!!"</i> <br>');

			currentEnemyLines = 5;
			lastReskinLines = currentEnemyLines;
		break;

		// BOSS 3 (RESKIN of Anastasia's Chimera)
		case 30:
			bossTime = true;
			isReskin = true;
			randomEnemy = Enemies[2][1];
			currentEnemy = randomEnemy;

			lastReskin = currentEnemy;

			enemyName = "ULTIMATE CHIMERA";

			document.getElementById("actionLog").innerHTML = '<span id="' + actionLine + '">' + "The <strong>" + enemyName + "</strong> rushes towards you!!<br></span>";

			var arr = currentEnemy[6];
			arr.unshift('<i>"Haha! My name\'s a MOTHER 3 reference!"</i> <br>', '<i>"Uh, I mean, ROAR."</i> <br>', '<i>The enemy is roaring incessantly...</i> <br>');

			currentEnemyLines = 3;
			lastReskinLines = currentEnemyLines;
		break;

		// SPECIAL 1 (Chapelle d'Or)
		case 48:
			randomEnemy = Enemies[4][0];
			currentEnemy = randomEnemy;
			specialEncounter = true;
			
			enemyName = currentEnemy[0];

			lastReskin = currentEnemy;

			currentEnemyLines = currentEnemy[6].length;

			currentEnemyHP = currentEnemy[2];
			document.getElementById("actionLog").innerHTML = '<span id="' + actionLine + '">' + "Where do <strong>YOU</strong> think you're going?<br></span>";

			// Custom Round Alert
			alertTitle = "LIQUID DIET";
			alertMainText = "Congratulations!<br>You have reached a wonderful place.";
			alertButtonText = "ACCEPT";
			alert();
		break;

		// BASIC ENEMIES
		default:
			bossTime = false;
			specialEncounter = false;
			
			isReskin = false;

			var sameEnemy = undefined;
			
			randomEnemy = Math.floor(Math.max(Math.random() * (Enemies[currentDepth].length), 0));
			currentEnemy = Enemies[currentDepth][randomEnemy];

			// Check if same enemy as last reskin to shift dialogue array lines
			if (lastReskin != undefined) {
				console.log("LASTRESKIN (" + lastReskin[0] + ") IDENTICAL TO CURRENTENEMY");

				if (currentEnemy[0] == lastReskin[0]) {
					sameEnemy = true;
				}
				else {
					sameEnemy = false;
				}
			}

			currentEnemyLines = currentEnemy[6].length;

			if (sameEnemy && currentEnemyLines != lastReskinLines) {
				for (i = 0; i < lastReskinLines; i++) {
					currentEnemy[6].shift(i);
					console.log("SHIFTING DIALOGUE ARRAY PART", i + 1, "/", lastReskinLines);

					if (i == lastReskinLines - 1) {
						currentEnemyLines = (currentEnemy[6].length);
						specialEncounter = false;
						lastReskin = undefined;
						console.log("SHOULD BE GOOD. CURRENTENEMYLINES NOW", currentEnemyLines, "/", currentEnemy[6].length);
					}
				}
			}
			else {
				specialEncounter = false;
			}

			// Setup Enemy name & intro
			enemyName = currentEnemy[0];

			document.getElementById("actionLog").innerHTML = '<span id="' + actionLine + '">' + "<strong>" + enemyName + "</strong> stares at you...<br></span>";
		break;
	}
	
	// Enemy Drop setup
	if (!isReskin) {
		enemyDropType = currentEnemy[5][0];
		enemyDrop = currentEnemy[4][0];
	}
	else {
		enemyDropType = currentEnemy[5][2];
		enemyDrop = currentEnemy[4][2];
	}

	// Enemy HP setup (+1 every Depth (*2 on Bosses))
	if (bossTime == true && specialEncounter == false) {
		currentEnemyHP = Math.floor((currentEnemy[2] + currentDepth) * 2);
		console.log("Current Enemy's true HP:", currentEnemy[2] + currentDepth, "* 2 =", (currentEnemy[2] + currentDepth) * 2, "(BOSSFIGHT)");
		console.log("Therefore, currentEnemyHP =", Math.floor(currentEnemy[2] + currentDepth), "* 2 =", currentEnemyHP, "(BOSSFIGHT)");
	}
	else if (specialEncounter == false) {
		currentEnemyHP = Math.floor(currentEnemy[2] + currentDepth);
		console.log("Current Enemy's true HP:", (currentEnemy[2] + currentDepth));
		console.log("Therefore, currentEnemyHP =", currentEnemyHP);
	}

	document.getElementById("enemyName").innerHTML = enemyName;
	document.getElementById("enemyImg").src = currentEnemy[1];
	
	// Scale down massive Placeholder pic
	if (document.getElementById("enemyImg").getAttribute('src') == "Images/PLACEHOLDER.png") {
		document.getElementById("enemyImg").style.height = "8.5em";
	}
	else {
		document.getElementById("enemyImg").style.height = "auto";
	}

	if (itemSlot1 != Items[0] && itemSlot2 != Items[0] && itemSlot3 != Items[0]) {
		fullInv = true;

		// PLACEHOLDER DEBUG CONSOLE LOG
		console.log("All item slots taken. fullInv is", fullInv);
	}

	// Set enemy HP
	currentEnemyMaxHP = currentEnemyHP;
	document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyHP + "/" + currentEnemyMaxHP + "</strong>";

	enableAll();

	return;
}


// =============================
// ON PAGE LOAD
// =============================

window.onload = function () {
	document.getElementById("playerHP").innerHTML = "<strong>" + currentPlayerHP + "/" + maxPlayerHP + "</strong>";
	disableInvs();
	document.getElementById("roundNum").innerHTML = `<u>Round: ${roundCounter}</u> | <u>Depth: ${depthName}</u>`;
	randomizeEnemy();
};


// =============================
// PLAYER TALKING
// =============================

function talkTo() {
	currentEnemyLines = currentEnemyLines;

	actionLine++;

	// PLACEHOLDER DEBUG CONSOLE LOG
	console.log("Dialogue", (line + 1), "/", currentEnemyLines);

	document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + currentEnemy[6][line] + '</span>';

	if (line >= currentEnemyLines) {
		talking.disabled = true;
	}

	line++;
	talking.disabled = true;

	// Check if Special Timer should be boosted
	if (specialTimerActive) {
		switch (specialTimerWhy) {
			default:
				console.log("Current Special Timer not set for Player Talking.");
			break;
		}
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


// =============================
// ENEMY TURN
// =============================

function enemyTurn() {

	// IF enemy waits (0)
	if (currentEnemy[3][elapsedTurns] == 0) {

		actionLine++;
		document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "The enemy is waiting... <br></span>";
	}

	// IF enemy attacks (1)
	if (currentEnemy[3][elapsedTurns] == 1) {

		actionLine++;
		
		if (currentArmor[2] >= 0) {
			var negDamage = false;
		}
		else if (currentArmor[2] <= -1) {
			var negDamage = true;
		}
		
		// Raised by 1 every 2 Depths. Lowered/Inverted by current armor's protection
		if (!negDamage) {
			var enemyDmg = Math.floor(1 + (currentDepth / 2) - currentArmor[2]);
			var playerHurt = Math.max(0, enemyDmg);
		}
		else {
			var enemyDmg = Math.floor(1 + (currentDepth / 2) - (currentArmor[2]+2));
			var playerHurt = Math.max(0, enemyDmg);
		}
		
		if (!negDamage && playerHurt != 0) {
			document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "The enemy attacks! <br></span>";
			currentPlayerHP -= playerHurt;
		}
		else if (negDamage && playerHurt != 0) {
			if (currentPlayerHP < maxPlayerHP) {
				document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "The enemy attacks! Strangely, it heals you...<br></span>";
				currentPlayerHP += playerHurt;

				if (currentPlayerHP > maxPlayerHP) {
					currentPlayerHP = maxPlayerHP;
				}
			}
			else {
				document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "The enemy attacks! Yet it doesn't hurt...<br></span>";
				currentPlayerHP = currentPlayerHP;
			}
		}

		if (playerHurt == 0) {
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "The enemy attacks! Yet it doesn't hurt...<br></span>";
			currentPlayerHP = currentPlayerHP;
		}

		console.log("Player Hurt/Healed by", playerHurt);
	}

	// IF enemy heals (2)
	if (currentEnemy[3][elapsedTurns] == 2) {
		console.log("currentEnemyHP =", currentEnemyHP);

		// Check to avoid overhealing
		if (currentEnemyHP == currentEnemyMaxHP) {
			console.log("Enemy at MaxHP, can't heal self");

			actionLine++;
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "The enemy heals itself! Yet it was already at Max HP...<br>";
			currentEnemyHP = currentEnemyMaxHP;
		}
		else {
			// Raised by 1 every 2 depths
			enemyHeal = Math.floor(2 + (currentDepth / 2));

			console.log("Enemy Healed by", 2 + (currentDepth / 2), ", rounded to", enemyHeal);
			
			actionLine++;
			document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "The enemy heals itself! <br></span>";
			
			currentEnemyHP += enemyHeal;
			
			if (currentEnemyHP > currentEnemyMaxHP) {
				console.log("... but that would be too much, so Enemy Healed By", currentEnemyHP-currentEnemyMaxHP);
				currentEnemyHP = currentEnemyMaxHP;
			}
		}
		
		console.log("Therefore, currentEnemyHP =", currentEnemyHP);
		document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyHP + "/" + currentEnemyMaxHP + "</strong>";
	}
	
	if (line >= currentEnemyLines) {
		talking.disabled = true;
	}
	else {
		talking.disabled = false;
	}

	elapsedTurns++;
	if (elapsedTurns >= 6) {
		elapsedTurns = 0;
	}

	if (currentPlayerHP < minPlayerHP) {
		currentPlayerHP = minPlayerHP;
	}
	
    document.getElementById("playerHP").innerHTML = "<strong>" + currentPlayerHP + "/" + maxPlayerHP + "</strong>";
    playerAttack.disabled = false;

	enableInvs();

	if (runFail == true) {
		runAway.disabled = true;
	}
	else {
		runAway.disabled = false;
	}

	// Check if Special Timer should be boosted
	if (specialTimerActive) {
		switch (specialTimerWhy) {
			default:
				console.log("Current Special Timer not set for Enemy Turn.");
				break;
		}
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


// =============================
// PLAYER DEFEAT
// =============================

function playerDefeat() {
	disableAll();
	actionLine = 1;
	deleteLine = 1;

	document.getElementById("actionLog").innerHTML = '<span id="' + actionLine + '">' + "You have died. <strong>The end.</strong><br>";
	
	document.getElementById("actionLog").innerHTML += '<br><button id="retryBtn" style="cursor: pointer;font-size: 1.75em;background: none;border: none;" id="retryBtn"><strong><u>Try again?</u></strong></button>';
    document.getElementById("retryBtn").addEventListener("click", playerRevive);
}


// =============================
// PLAYER REVIVE / FULL RESET
// =============================

function playerRevive() {
	
	document.getElementById("actionLog").innerHTML = "And so, you feel yourself rise again...";
	
	setTimeout(() => {
		line = 0;
		
		playerReset();
		
		equipmentUpdate();

		fullInv = false;
		currentDepth = 0;
		depthName = currentDepth;
		document.body.style.backgroundColor = "#d7d7d7";
		itemSlot1 = Items[0];
		itemSlot2 = Items[0];
		itemSlot3 = Items[0];
		document.getElementById("inventory1").innerHTML = itemSlot1[0];
		document.getElementById("inventory2").innerHTML = itemSlot2[0];
		document.getElementById("inventory3").innerHTML = itemSlot3[0];

		disableInvs();
		currentWeapon = Weapons[0];
		currentArmor = Armors[0];

		roundCounter = 1;
		document.getElementById("roundNum").innerHTML = `<u>Round: ${roundCounter}</u> | <u>Depth: ${depthName}</u>`;

		randomizeEnemy();
		enableActs();
	}, 2500);
}


// =============================
// EQUIPMENT MENU
// =============================

function equipmentUpdate() {
	
// No Weapon + No Armor
	if (!knowsWeapons && !knowsArmors) {
		document.getElementById("playerStats").innerHTML = 'Your HP: <span id="playerHP"></span>';
		document.getElementById("playerHP").innerHTML = "<strong>" + currentPlayerHP + "/" + maxPlayerHP + "</strong>";
	}

// Weapon + No Armor
	else if (knowsWeapons && !knowsArmors) {
		knowsWeapons = true;
		document.getElementById("playerStats").innerHTML = 'Your HP: <span id="playerHP"></span> | Your Weapon: <span id="playerWPN"></span>';
		document.getElementById("playerHP").innerHTML = "<strong>" + currentPlayerHP + "/" + maxPlayerHP + "</strong>";
		document.getElementById("playerWPN").innerHTML = "<strong>" + currentWeapon[0] + "</strong>";
	}
	
// No Weapon + Armor
	else if (!knowsWeapons && knowsArmors) {
		knowsArmors = true;
		document.getElementById("playerStats").innerHTML = 'Your HP: <span id="playerHP"></span> | Your Armor: <span id="playerARM"></span>';
		document.getElementById("playerHP").innerHTML = "<strong>" + currentPlayerHP + "/" + maxPlayerHP + "</strong>";
		document.getElementById("playerARM").innerHTML = "<strong>" + currentArmor[0] + "</strong>";
	}
	
// Weapon + Armor
	else if (knowsWeapons && knowsArmors) {
		document.getElementById("playerStats").innerHTML = 'Your HP: <span id="playerHP"></span> | Your Weapon: <span id="playerWPN"></span> | Your Armor: <span id="playerARM"></span>';
		document.getElementById("playerHP").innerHTML = "<strong>" + currentPlayerHP + "/" + maxPlayerHP + "</strong>";
		document.getElementById("playerWPN").innerHTML = "<strong>" + currentWeapon[0] + "</strong>";
		document.getElementById("playerARM").innerHTML = "<strong>" + currentArmor[0] + "</strong>";
	}
}


function weaponEquip() {

	actionLine++;

	switch (equipWhat) {

		// Equipping Weapon
		case "Weapon":
			currentWeapon = Weapons[enemyDrop];
			
			document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "You equipped the <strong>" + currentWeapon[0] + "</strong>.<br></span>";
			weaponEquipBtn.disabled = true;
			weaponDiscardBtn.disabled = true;
			weaponMenu.style.visibility = "hidden";
			
			// PLACEHOLDER DEBUG CONSOLE LOG
			console.log("You should NOW have", currentWeapon[2], "ATK and", (currentWeapon[2] * 2), "on CRITs");
		break;
		
		// Equipping Armor
		case "Armor":
			currentArmor = Armors[enemyDrop];
			
			document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "You equipped the <strong>" + currentArmor[0] + "</strong>.<br></span>";
			weaponEquipBtn.disabled = true;
			weaponDiscardBtn.disabled = true;
			weaponMenu.style.visibility = "hidden";
			
			// PLACEHOLDER DEBUG CONSOLE LOG
			console.log("You should NOW have", currentArmor[2], "DEF");
		break;
	}
	
	equipmentUpdate();

	// Finish Round
	setTimeout(() => { randomizeEnemy(); }, 2500);
}

function weaponDiscard() {
	actionLine++;

	switch (equipWhat) {
		case "Weapon":
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "You discarded the equipment...<br></span>";
		break;

		case "Armor":
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "You discarded the equipment...<br></span>";
		break;
	}

	weaponEquipBtn.disabled = true;
	weaponDiscardBtn.disabled = true;
	weaponMenu.style.visibility = "hidden";

	// PLACEHOLDER DEBUG CONSOLE LOG
	console.log("You should STILL have", currentWeapon[2], "ATK and", (currentWeapon[2] * 2), "on CRITs");
	console.log("You should STILL have", currentArmor[2], "DEF");
	
	equipmentUpdate();

	// Finish Round
	setTimeout(() => { randomizeEnemy(); }, 2500);
}


// =============================
// DROP SYSTEMS
// =============================

// ITEM DROPS

function grantDrop() { console.log("Item drop:", Items[enemyDrop][0]);

	// Check for Full Inventory
	if (fullInv) {
		maxItems();
		return;
	}

	// Check for Overk
	if (currentEnemyHP < 0) {
		grantOverk();
		return;
	}

	actionLine++;

	switch (Items[enemyDrop][2]) {
		case itemNull:
			document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong>ITEM GOT!</strong> (" + Items[enemyDrop][0] + ")<br></span>";
		break;
		
		case itemDMG:
			document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong>ATTACK ITEM GOT!</strong> (" + Items[enemyDrop][0] + ")<br></span>";
		break;
		
		case itemHeal:
			document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong>HEALING ITEM GOT!</strong> (" + Items[enemyDrop][0] + ")<br></span>";
		break;
	}
	
	setupItem();
	
	// Finish Round
	setTimeout(() => { randomizeEnemy(); }, 2500);
}

function grantOverk() { console.log("... actually, it's an Overkill");
	
	// Juicy Drop
	if (enemyDrop == 4) {
		juicyHeal = Math.abs((currentEnemyHP)-1);
	}
	
	switch (Items[enemyDrop][2]) {
		case itemNull:
			document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong><u>OVERKILL!!</u> ITEM GOT!</strong> (" + Items[enemyDrop][0] + ")<br></span>";
		break;
		
		case itemDMG:
			document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong><u>OVERKILL!!</u> ATTACK ITEM GOT!</strong> (" + Items[enemyDrop][0] + ")<br></span>";
		break;
		
		case itemHeal:
			document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong><u>OVERKILL!!</u> HEALING ITEM GOT!</strong> (" + Items[enemyDrop][0] + ")<br></span>";
		break;
	}

	setupItem();

	// PLACEHOLDER DEBUG CONSOLE LOG
	console.log("Enemy died at", currentEnemyHP, "HP. juicyHeal should be one above & always positive:", juicyHeal);
	
// Finish Round
	setTimeout(() => { randomizeEnemy(); }, 2500);
}

function setupItem() {
	
	if (itemSlot1 == Items[0]) {
		itemSlot1 = Items[enemyDrop];
		document.getElementById("inventory1").innerHTML = Items[enemyDrop][0];
		document.getElementById("inventory1").addEventListener("click", enemyDrop[2], { once: true });
	}
		
	else if (itemSlot1 != Items[0] && itemSlot2 == Items[0]) {
		itemSlot2 = Items[enemyDrop];
		document.getElementById("inventory2").innerHTML = Items[enemyDrop][0];
		document.getElementById("inventory2").addEventListener("click", enemyDrop[2], { once: true });
	}
	
	else if (itemSlot1 != Items[0] && itemSlot2 != Items[0] && itemSlot3 == Items[0]) {
		itemSlot3 = Items[enemyDrop];
		document.getElementById("inventory3").innerHTML = Items[enemyDrop][0];
		document.getElementById("inventory3").addEventListener("click", enemyDrop[2], { once: true });
	}
}


// EQUIPMENT DROPS

function grantWeapon() { console.log("Weapon drop:", Weapons[enemyDrop][0]);
	
	if (currentWeapon == Weapons[enemyDrop]) {
		console.log("... but said weapon is already equipped, so...");
		alrEquipped();
		return;
	}
	
	equipWhat = "Weapon";

	actionLine++;
	if (currentEnemyHP < 0) {
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong><u>OVERKILL!!</u> WEAPON GOT!</strong> (" + Weapons[enemyDrop][0] + ")<br></span>";
	}
	else {
		document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong>WEAPON GOT!</strong> (" + Weapons[enemyDrop][0] + ")<br></span>";
	}
	
	weaponMenu.style.visibility = "visible";
	weaponDiscardBtn.disabled = false;
	weaponEquipBtn.disabled = false;
}

function grantArmor() { console.log("Armor drop:", Armors[enemyDrop][0]);
	
	if (currentArmor == Armors[enemyDrop]) {
		console.log("... but said armor is already equipped, so...");
		alrEquipped();
		return;
	}
	
	equipWhat = "Armor";

	actionLine++;
	if (currentEnemyHP < 0) {
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong><u>OVERKILL!!</u> ARMOR GOT!</strong> (" + Armors[enemyDrop][0] + ")<br></span>";
	}
	else {
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong>ARMOR GOT!</strong> (" + Armors[enemyDrop][0] + ")<br></span>";
	}
	
	weaponMenu.style.visibility = "visible";
	weaponDiscardBtn.disabled = false;
	weaponEquipBtn.disabled = false;
}


// MAXIMUM ITEMS, NO DROPS & ALREADY EQUIPPED

function maxItems() { console.log("... but the bag is full");
	actionLine++;
	
	if (currentEnemyHP < 0) {
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong><u>OVERKILL!!</u></strong> Your bag is full...<br></span>";
	}
	else {
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "Your bag is full...<br></span>";
	}
	
// Finish Round
	setTimeout(() => { randomizeEnemy(); }, 2500);
}

function noDrops() { console.log("No drop for you");
	actionLine++;
	
	if (currentEnemyHP < 0) {
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong><u>OVERKILL!!</u></strong> The enemy had nothing of value...<br></span>";
	}
	else {
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "The enemy had nothing of value...<br></span>";
	}
	
// Finish Round
	setTimeout(() => { randomizeEnemy(); }, 2500);
}

function alrEquipped() { console.log("No equipment for you");
	actionLine++;
	
	if (currentEnemyHP < 0) {
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "<strong><u>OVERKILL!!</u></strong> You already had the enemy's equipment...<br></span>";
	}
	else {
		document.getElementById("actionLog").innerHTML += '<span id="'+actionLine+'">' + "You already had the enemy's equipment...<br></span>";
	}
	
// Finish Round
	setTimeout(() => { randomizeEnemy(); }, 2500);
}


// =============================
// ENEMY DEFEAT
// =============================

function enemyDefeat() {

	disableAll();

	actionLine = 1;
	deleteLine = 1;

	document.getElementById("actionLog").innerHTML = '<span id="' + actionLine + '">' + "Enemy defeated! <strong>Round won!</strong><br></span>";
	enemyKilled = true;

	var normalOverk = !isReskin && !bossTime && enemyDropType != 2 && enemyDropType != 3;

// Check if overk
	if (currentEnemyHP < 0) {
		
	// Check if Not reskin + Not boss + Not wpndrop + Not armdrop. If so, set overk drop
		if (normalOverk) {
			enemyDropType = currentEnemy[5][1];
			enemyDrop = currentEnemy[4][1];
		}
		
	// Juicyheal HP setup
		lastEnemyHP = currentEnemyHP;
	}

// Check enemy drop type	
	switch (enemyDropType) {
		case 0:
			noDrops();
		break;
		
		case 1:
			grantDrop();
		break;
		
		case 2:
			knowsWeapons = true;
			grantWeapon();
		break;
		
		case 3:
			knowsArmors = true;
			grantArmor();
		break;
	}

	// Check if Special Timer should be boosted
	if (specialTimerActive) {
		switch (specialTimerWhy) {
			default:
				console.log("Current Special Timer not set for Enemy Defeat.");
			break;
		}
	}
}


// =============================
// PLAYER ATTACKING
// =============================

function Attack() {
	disableAll();

	critNum = currentWeapon[2] * 2;
	hitRate = currentWeapon[3];
	critRate = Math.floor((Math.PI / currentWeapon[3]) * 10000);

	var hitRNG = Math.floor((Math.random() * 1000) + 1);

	// PLACEHOLDER DEBUG CONSOLE LOG
	console.log("(MISS AREA) " + hitRate + " |", hitRNG, "| " + critRate + " (CRIT AREA)");

	// CRIT Hit check
	if (hitRNG <= critRate) {
		currentEnemyHP -= critNum;

		// Check if heal-attack
		if (currentEnemyHP > currentEnemyMaxHP) {
			currentEnemyMaxHP = currentEnemyHP;
			actionLine++;
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong>CRITICAL HIT!!</strong> You tear into the enemy! Yet it heals them...<br></span>";
			document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyHP + "/" + currentEnemyMaxHP + "</strong>";
		}
		else {
			actionLine++;
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong>CRITICAL HIT!!</strong> You tear into the enemy!<br></span>";
			document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyHP + "/" + currentEnemyMaxHP + "</strong>";
		}
	}

	// NORMAL Hit check
	else if (hitRNG <= hitRate) {
		currentEnemyHP -= currentWeapon[2];

		// Check if heal-attack
		if (currentEnemyHP > currentEnemyMaxHP) {
			currentEnemyMaxHP = currentEnemyHP;
			actionLine++;
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "You attack the enemy! Strangely, it heals them...<br></span>";
			document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyHP + "/" + currentEnemyMaxHP + "</strong>";
		}
		else {
			actionLine++;
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "You attack the enemy!<br></span>";
			document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyHP + "/" + currentEnemyMaxHP + "</strong>";
		}
	}

	// MISS Hit check	
	else {
		actionLine++;
		document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "You missed...<br></span>";
	}

	// Player HP min/max
    if (currentPlayerHP < minPlayerHP) {
		currentPlayerHP = 0;
		document.getElementById("playerHP").innerHTML = "<strong>" + 0 + "/" + maxPlayerHP + "</strong>";
	}
	if (currentPlayerHP > maxPlayerHP) {
		currentPlayerHP = maxPlayerHP;
		document.getElementById("playerHP").innerHTML = "<strong>" + maxPlayerHP + "/" + maxPlayerHP + "</strong>";
	}

	// Enemy HP minimum (visually)
	if (currentEnemyHP < 0) {
		document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyMinHP + "/" + currentEnemyMaxHP + "</strong>";
	}

	// Check if Special Timer should be boosted
	if (specialTimerActive) {
		switch (specialTimerWhy) {
			default:
				console.log("Current Special Timer not set for Player Attack.");
			break;

			case "Hand Puppet Event":
				specialTimer++;
				console.log("Special Timer boosted due to", specialTimerWhy);

				if (specialTimer < specialTimerMax) {
					console.log("Special Timer:", specialTimer - 1, "/", specialTimerMax);

					actionLine++;
					document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "(The <strong>" + currentWeapon[0] + "</strong> seems to deteriorate...)<br></span>";
				}
				else {
					specialTimerWhy = undefined;
					specialTimerActive = false;
					specialTimer = 1;

					console.log("Special Timer over!");

					actionLine++;
					document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "(The <strong>" + currentWeapon[0] + "</strong> fell apart!)<br></span>";

					currentWeapon = Weapons[0];
					equipmentUpdate();
				}
			break;
		}
	}
	
	if (currentWeapon != Weapons[0]) {
		knowsWeapons = true;
		equipmentUpdate();
	}
	if (currentArmor != Armors[0]) {
		knowsArmors = true;
		equipmentUpdate();
	}
	
	// Finish turn
	setTimeout(() => {
		if (currentEnemyHP >= 1) {
			enemyTurn();
		}

		else {
			setTimeout(() => { enemyDefeat(); }, 1000);
		}

		if (currentPlayerHP <= minPlayerHP) {
			playerDefeat();
		}
	}, 1000);

	runFail = false;

	// Actionlog Autoscroll
	if (actionLine >= maxLines) {
		const firstLine = document.getElementById(deleteLine);
		firstLine.remove();
		deleteLine++;

		// PLACEHOLDER DEBUG CONSOLE LOG
		console.log("Earliest line deleted. Onto line", deleteLine);
	}

}


// =============================
// PLAYER FLEEING
// =============================

function Run() {

	// Normal Run chance
	if (currentWeapon != Weapons[3]) {
		var runRNG = Math.floor((Math.random() * 100) + 1);
		var runOffLimit = 85;
	}

	// HandPuppet Run chance
	else {
		var runRNG = Math.floor((Math.random() * 100) + 1);
		var runOffLimit = 25;
	}

	if (runRNG >= runOffLimit) {

		// Check if Special Timer should be boosted
		if (specialTimerActive) {
			switch (specialTimerWhy) {
				default:
					console.log("Current Special Timer not set for Player Fleeing.");
				break;
			}
		}

		// PLACEHOLDER DEBUG CONSOLE LOG
		console.log("runRNG =", runRNG, "| Should be enough");

		ranOff = true;
		disableAll();
		actionLine = 1;
		deleteLine = 1;

		document.getElementById("actionLog").innerHTML = '<span id="' + actionLine + '">' + "You managed to escape... <br></span>";
		setTimeout(() => { randomizeEnemy(); }, 2500);
	}
	else {

		// PLACEHOLDER DEBUG CONSOLE LOG
		console.log("runRNG =", runRNG, "| Off by", (runOffLimit-runRNG));

		runFail = true;
		actionLine++;
		document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong>Failed to flee!</strong> Try to attack the enemy again...<br></span>";
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


// =============================
// ITEMS SYSTEM
// =============================

function useItem(e) {

	console.log("Clicked on", e.target.id);

	actionLine++;

	switch (e.target.id) {

		// Item slot 1 used
		case "inventory1":
			itemUsed = itemSlot1;

			// Healing at MaxHP
			if (currentPlayerHP === maxPlayerHP && itemUsed[2] === itemHeal) {
				currentPlayerHP = maxPlayerHP;
				document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "You're already at Max HP!<br></span>";
				clickFix = true;
			}

			// Nomal item use
			else {
				if (clickFix == true) {
					itemHeal();
				}

				fullInv = false;
				itemSlot1 = Items[0];
				document.getElementById("inventory1").innerHTML = Items[0][0];
				inventory1.disabled = true;
				clickFix = false;
			}
		break;

		// Item slot 2 used
		case "inventory2":
			itemUsed = itemSlot2;

			// Healing at MaxHP
			if (currentPlayerHP === maxPlayerHP && itemUsed[2] === itemHeal) {
				currentPlayerHP = maxPlayerHP;
				document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "You're already at Max HP!<br></span>";
				clickFix = true;
			}

			// Normal item use
			else {
				if (clickFix == true) {
					itemHeal();
				}

				fullInv = false;
				itemSlot2 = Items[0];
				document.getElementById("inventory2").innerHTML = Items[0][0];
				inventory2.disabled = true;
				clickFix = false;
			}
		break;

		// Item slot 3 used
		case "inventory3":
			itemUsed = itemSlot3;

			// Healing at MaxHP
			if (currentPlayerHP === maxPlayerHP && itemUsed[2] === itemHeal) {
				currentPlayerHP = maxPlayerHP;
				document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "You're already at Max HP!<br></span>";
				clickFix = true;
			}

			// Normal item used
			else {
				if (clickFix == true) {
					itemHeal();
				}

				fullInv = false;
				itemSlot3 = Items[0];
				document.getElementById("inventory3").innerHTML = Items[0][0];
				inventory3.disabled = true;
				clickFix = false;
			}
		break;
	}
	
	switch (itemUsed[2]) {
		case itemNull:
			itemNull();
		break;
		
		case itemHeal:
			itemHeal();
		break;
		
		case itemDMG:
			itemDMG();
		break;
	}
	
	// Check if Special Timer should be boosted
	if (specialTimerActive) {
		switch (specialTimerWhy) {
			default:
				console.log("Current Special Timer not set for Item Use.");
			break;
		}
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

function itemHeal() {
	if (currentPlayerHP == maxPlayerHP) {
		return;
	}
	else {
		if (itemUsed == Items[4]) {
			var healedHP = Math.min(juicyHeal, (maxPlayerHP - currentPlayerHP));

			// PLACEHOLDER DEBUG CONSOLE LOG
			console.log("JUICY HEAL: Lowest between", juicyHeal, "and", maxPlayerHP - currentPlayerHP);

			currentPlayerHP += healedHP;
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "You used the <strong>" + itemUsed[0] + "</strong> and regained <strong>" + healedHP + "HP!</strong><br></span>";
		}
		else {
			currentPlayerHP += itemUsed[3];

			// No-heal / Un-heal items
			if (itemUsed[3] == 0) {
				document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "You used the <strong>" + itemUsed[0] + "</strong>... but it had no effect.<br><span>";
			}
			else if (itemUsed[3] < 0) {
				document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "You used the <strong>" + itemUsed[0] + "</strong>... Ouch! You lost <strong>" + Math.abs(itemUsed[3]) + "HP!</strong><br><span>";
			}
			else {
				document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "You used the <strong>" + itemUsed[0] + "</strong> and regained <strong>" + itemUsed[3] + "HP!</strong><br></span>";
			}
		}
	}

	document.getElementById("playerHP").innerHTML = "<strong>" + currentPlayerHP + "/" + maxPlayerHP + "</strong>";
}

function itemDMG() {

	// No-hurt / Un-hurt items
	if (itemUsed[3] == 0) {
		document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "You used the <strong>" + itemUsed[0] + "</strong>... but it had no effect.<br><span>";
	}
	else if (itemUsed[3] < 0) {
		currentEnemyHP += Math.abs(itemUsed[3]);
		console.log(Math.abs(itemUsed[3]));
		document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyHP + "/" + currentEnemyMaxHP + "</strong>";
		document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "You used the <strong>" + itemUsed[0] + "</strong>... Uh-oh! The enemy regained <strong>" + Math.abs(itemUsed[3]) + "HP!</strong><br><span>";
	}
	else {
		currentEnemyHP -= itemUsed[3];
		document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyHP + "/" + currentEnemyMaxHP + "</strong>";
		document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "You used the <strong>" + itemUsed[0] + "</strong> and inflicted <strong>" + itemUsed[3] + "HP!</strong><br></span>";
	}

	// Check for HP in case of Overkill/Unhurt
	if (currentEnemyHP <= 0) {
		disableAll();
		document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyMinHP + "/" + currentEnemyMaxHP + "</strong>";

		setTimeout(() => { enemyDefeat(); }, 2000);
	}
	else if (currentEnemyHP >= currentEnemyMaxHP) {
		currentEnemyMaxHP = currentEnemyHP;
		document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyMaxHP + "/" + currentEnemyMaxHP + "</strong>";
	}
}

function itemNull() {
	console.log("HOW DID thIS GET ACTIVATED??");
}

// =============================
// SPECIAL TIMER SETUP
// =============================

function specialTimerMoment() {

	if (currentWeapon == Weapons[3] && !specialTimerActive) {
		specialTimer = 0;
		specialTimerMax = 3;
		specialTimerActive = true;
		specialTimerWhy = "Hand Puppet Event";

		console.log("Special Timer activated due to", specialTimerWhy);
	}

	// Feel free to add more here. Copy-paste previous and edit

	else if (specialTimer == specialTimerMax) {
		specialTimerWhy = undefined;
		specialTimerActive = false;
		specialTimer = 1;

		console.log("Special Timer deactivated");
	}
}


// =============================
// DEBUG MODE
// =============================

if (debugmode == true) {

	var STAT = 0;
	var CHOICE = undefined;

	console.log("DEBUG MODE ACTIVE - INSTRUCTIONS:");
	console.log("Press RIGHT to edit Attack DMG. Press RIGHT TWICE to edit Enemy HP.");
	console.log("Press LEFT to edit Player HP. Press LEFT TWICE to edit Max HP.");
	console.log("Press UP to Raise Stat. Press DOWN to Lower Stat.");
	console.log("Press R to Reroll Enemy (doesn't reset stats). Press K to Reset Run (resets stats).");
	console.log("Press P to Pass Round (doesn't reset stats). Press A to test Custom Alert.");
	console.log("Press H to read instructions again.");
	console.log("####################################################################################################");

	document.addEventListener("keyup", function (event) {

		// Debug - Alert Test
		if (event.keyCode == 65) {
			alert();
			console.log("####################################################################################################");
			console.log("DEBUG MODE: Alert launched successfully.");
			console.log("INFO: Nothing other than the blue button should be clickable.");
		}

		// Debug - Help
		else if (event.keyCode == 72) {
			console.log("####################################################################################################");
			console.log("Press RIGHT to edit Attack DMG. Press RIGHT TWICE to edit Enemy HP.");
			console.log("Press LEFT to edit Player HP. Press LEFT TWICE to edit Max HP.");
			console.log("Press UP to Raise Stat. Press DOWN to Lower Stat.");
			console.log("Press R to Reroll Enemy (doesn't reset stats). Press K to Reset Run (resets stats).");
			console.log("Press P to Pass Round (brings enemy to 0HP). Press A to test Custom Alert.");
			console.log("Press H to read instructions again.");
			console.log("####################################################################################################");
			return;
		}

		// Debug - Reset Run
		else if (event.keyCode == 75) {
			console.log("####################################################################################################");
			actionLine = 1;
			playerRevive();
			console.log("DEBUG MODE: Run reset successfully.");
			return;
		}

		// Debug - Pass Round
		else if (event.keyCode == 80) {
			document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyMinHP + "/" + currentEnemyMaxHP + "</strong>";
			console.log("####################################################################################################");
			enemyKilled = true;
			actionLine = 1;
			enemyDefeat();
			console.log("DEBUG MODE: Round passed successfully. Onto round", roundCounter + 1);
			console.log("/!\\ PLEASE WAIT UNTIL NEXT ENEMY BEFORE USING DEBUG AGAIN.");
			return;
		}

		// Debug - Reroll Enemy
		else if (event.keyCode == 82) {
			console.log("####################################################################################################");
			actionLine = 1;
			randomizeEnemy();
			console.log("DEBUG MODE: Enemy rerolled successfully.");
			console.log("INFO: The enemy might look the same, but it isn't.");
			return;
		}

		// Debug - Raise Stats
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

		// Debug - Lower Stats
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

		// Debug - Switch left (Enemy HP -> Attack DMG -> Player HP -> Max HP)
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

		// Debug - Switch right (Max HP -> Player HP -> Attack DMG -> Enemy HP)
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
				console.log("DEBUG MODE: Nothing past " + CHOICE + ". Press LEFT to switch.");
				return;
			}
		}
	});
}


// =============================
// CUSTOM ALERT (Style in CSS)
// =============================

if (document.getElementById) {
	window.alert = function (txt) {
		createCustomAlert(txt);
	}
}

function createCustomAlert(txt) {
	d = document;

	if (d.getElementById("hideAway")) {
		return;
	}

	mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
	mObj.id = "hideAway";

	alertObj = mObj.appendChild(d.createElement("div"));
	alertObj.id = "alertBox";

	alertObj.style.visiblity = "visible";

	h1 = alertObj.appendChild(d.createElement("h1"));
	h1.appendChild(d.createTextNode(alertTitle));

	msg = alertObj.appendChild(d.createElement("p"));
	msg.innerHTML = alertMainText;

	btn = alertObj.appendChild(d.createElement("a"));
	btn.id = "closeBtn";
	btn.appendChild(d.createTextNode(alertButtonText));
	btn.focus();

	btn.onclick = function () {
		removeCustomAlert();
		return false;
	}
}

function removeCustomAlert() {
	document.getElementsByTagName("body")[0].removeChild(document.getElementById("hideAway"));
}