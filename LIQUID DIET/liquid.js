// Heyo ;(^o^) SEOKU fell asleep on her keyboard, so lil old me finished the thing up!
// I ended up testing your code also. Seems like it all works well! I'm proud of you! <3
// Anyway, I'd best be going now. She'll notice if I keep her laptop on too long! See you soon!
//
//																- The Restorer
//
// =================================================================================================================================================
// ENEMY ARRAY ["NAME", "Images/img_src", Base HP, [Attack Pattern (6 turns)], [Drops (OG, Overk)], [Drop Types (OG, Overk)], [Dialogues], Enemy Type]
// =================================================================================================================================================

const Enemies = [

	// Normal Enemies
	[
		// DEPTH 0 ENEMIES
		[
			["TRAINING DUMMY", "Images/Enemy_PATHETIC_DUMMY.png", 3, [0, 1, 0, 0, 0, 0], [2, 4], [1, 1], ['<i>The enemy has nothing to say, but... </i> <br>', '<i>It keeps looking at another enemy, then back at what it\'s holding... </i> <br>'], 1],
			["MISS OBEAST", "Images/Enemy_MISS_OBEAST.png", 2, [1, 0, 0, 2, 0, 0], [1, 1], [1, 2], ['<i>"Meee- oh, my lucky charm. I\'d never give it away. You\'d have to steal it!"</i> <br>', '<i>"Maaa- oh, but if I\'m drunk, I might also, accidentally..."</i> <br>',], 0],
		],
		// DEPTH 1 ENEMIES
		[
			["WILD ANGEL", "Images/PLACEHOLDER.png", 3, [1, 1, 0, 0, 1, 0], [9, 10], [1, 1], ['<i>"The weak-willed are not long for this world. They all play a part in a system."</i> <br>', '<i>"Predator and prey, it\'s the natural order of things."</i> <br>', '<i>"...But what would <strong> you </strong> understand about serving a higher purpose?"</i> <br>', '<i>The enemy\'s mouth is too full to speak.</i> <br>'], 2],
			["PATHETIC DUMMY", "Images/Enemy_PATHETIC_DUMMY.png", 3, [0, 1, 0, 0, 1, 0], [1, 1], [1, 3], ['<i>"Looking for trouble? Huh?"</i> <br>', '<i>"You don\'t know what I got under there."</i> <br>', '<i>"Hahaha. Come and get it. IF YOU CAN REACH IT!"</i> <br>'], 1],
		],
		// DEPTH 2 ENEMIES
		[
			["DEPTH 2 ENEMY", "Images/Enemy_PATHETIC_DUMMY.png", 3, [0, 1, 0, 0, 1, 1], [1, 4], [1, 1], ['<i>You cannot understand this enemy... </i> <br>'], 3],
			["ANASTASIA'S CHIMERA", "Images/Enemy_ANASTASIA_CHIMERA.png", 4, [1, 0, 1, 0, 1, 0], [3, 2], [1, 2], ['<i>"My, what are you grabbing at? Haha~"</i> <br>', '<i>"Don\'t talk to my son or I will call the police."</i> <br>', '<i>"I only give myself to those strong enough to knock me out~"</i> <br>', '<i>"Who do you think you are? I\'m stronger than you will ever be."</i> <br>',], 3],
		],
		// DEPTH 3 ENEMIES
		[
			["DEPTH 3 ENEMY", "Images/Enemy_PATHETIC_DUMMY.png", 3, [1, 1, 2, 1, 1, 1], [1, 4], [1, 1], ['<i>The enemy speaks gibberish... </i> <br>'], 0],
		],
	],

	// Special Enemies
	[
		// ROUND 81 SCARE
		[
			["CHAPELLE D'OR", "Images/PLACEHOLDER.png", NaN, [0, 0, 0, 0, 0, 0], [0, 0], [0, 0], ['<i>"Oh? A new visitor? Welcome to the hospital!"</i> <br>', '<i>"Say, are you lost?"</i> <br>', '<i>"There\'s nothing in this part of the building."</i> <br>', '<i>The enemy is silent...</i> <br>', '<i>The enemy is silent...</i> <br>', '<i>The enemy is silent...</i> <br>', '<i>The enemy is silent...</i> <br>', '<i>"Scream for help if you\'re still able. Letting you live won\'t delay your death. Hahaha..."</i> <br>'], 2],
		],
	],
	
	// Bosses
	[
		// DEPTH 0 BOSSES
		[
			["AREA 0 BOSS", "Images/Enemy_IDK.png", 10, [0, 1, 1, 0, 2, 1], [2, 3], [1, 2], ['<i>"helo i am a test"</i> <br>'], 0],
			["OTHER AREA 0 BOSS", "Images/Enemy_IDK.png", 10, [0, 1, 1, 0, 2, 1], [2, 3], [1, 2], ['<i>"helo i am a test 2"</i> <br>'], 0],
		],
		// DEPTH 1 BOSSES
		[
			["AREA 1 BOSS", "Images/Enemy_IDK.png", 15, [0, 1, 1, 0, 2, 1], [2, 3], [1, 2], ['<i>"helo i am a test"</i> <br>'], 0],
			["OTHER AREA 1 BOSS", "Images/Enemy_IDK.png", 15, [0, 1, 1, 0, 2, 1], [2, 3], [1, 2], ['<i>"helo i am a test 2"</i> <br>'], 0],
		],
		// DEPTH 2 BOSSES
		[
			["AREA 2 BOSS", "Images/Enemy_IDK.png", 20, [0, 1, 1, 0, 2, 1], [2, 3], [1, 2], ['<i>"helo i am a test"</i> <br>'], 0],
			["OTHER AREA 2 BOSS", "Images/Enemy_IDK.png", 20, [0, 1, 1, 0, 2, 1], [2, 3], [1, 2], ['<i>"helo i am a test 2"</i> <br>'], 0],
		],
		// DEPTH 3 BOSSES
		[
			["AREA 3 BOSS", "Images/Enemy_IDK.png", 25, [0, 1, 1, 0, 2, 1], [2, 3], [1, 2], ['<i>"helo i am a test"</i> <br>'], 0],
			["OTHER AREA 3 BOSS", "Images/Enemy_IDK.png", 25, [0, 1, 1, 0, 2, 1], [2, 3], [1, 2], ['<i>"helo i am a test 2"</i> <br>'], 0],
		]

	],

];

// ATTACK TYPE: 0 = Wait / 1 = Attack / 2 = Heal self
// DROP TYPE: 0 = Nothing / 1 = Item / 2 = Weapon / 3 = Armor
// ENEMY TYPE: 0 = ABOMINATION / 1 = HERALD / 2 = MALADY / 3 = NYMPH / 4 = SYMBOL

// Enemies can be Normal, Special or Bosses:
// Special enemies appear only on specific conditions.
// Boss enemies appear randomly on specific rounds.
// Normal enemies appear randomly on normal rounds.

// Enemies should always have one line. If there are none, copy-paste this in Dialogues: ['<i>The enemy has nothing to say... </i> <br>']
// You can also edit that line to make it more or less ominous.


// =======================================================================================
// ITEM ARRAY ["Name", "Images/img_src", Utility, Utility Specifics]
// =======================================================================================

const Items = [

	["Empty", "Images/Item_Empty.png", "Null", 0],
	["Energy Drink", "Images/Item_Energy.png", "Heal", 1],
	["Sludge", "Images/Item_Sludge.png", "DMG", 2],
	["Chimera Fetus", "Images/Item_Fetus.png", "DMG", 1],
	["Juicy Nectar", "Images/Item_Blood.png", "Heal", 2], // True heal in itemHeal();
	["Electric Caress", "Images/Item_ObeastFur.png", "Heal", -1],
	["Piercing Gaze", "Imaes/Item_ChimEye.png", "DMG", -1],
	["Test UslHeal", "Images/PLACEHOLDER.png", "Heal", 0],
	["Test UslDMG", "Images/PLACEHOLDER.png", "DMG", 0],
	["Angel Incisor", "Images/Item_Incisor.png", "DMG", 2],
	["Sharp Halo", "Images/Item_Halo.png", "DMG", 3],
	
];

// Items can be Positive, Negative or Useless:
// Positive Healing will heal the player. Positive Damage will hurt the enemy.
// Negative Healing will hurt the player. Negative Damage will heal the enemy.
// Useless items will do nothing.


// =======================================================================================
// WEAPON ARRAY ["Name", "Images/img_src", Damage, Accuracy, Special Effect, Special Effect Detail]
// =======================================================================================

const Weapons = [

	// Empty (0)
	["None", "Images/Weapon_None.png", 1, 950, 0, 0],

	// Positive Weapons (1 - 2)
	["Letter Opener", "Images/Weapon_Letter.png", 2, 850, 1, 0],
	["Spiky Tails", "Images/Weapon_Tail.png", 4, 750, 2, 1],

	// Negative Weapons (3)
	["Hand Puppet", "Images/Weapon_Dummy.png", -2, 1000, 0],

	// Useless Weapons (4 - 5)
	["Test UslDMG", "Images/PLACEHOLDER.png", 0, 1001, 0],
	["Test UslACC", "Images/PLACEHOLDER.png", 10, -1, 0],
	
];

// SPECIAL EFFECTS: 0 = Extra Damage / 1 = Double Damage / 2 = Half Damage / 3 = Immunity
// SPECIAL EFFECT DETAIL: Follows the ENEMY TYPE order.
//
// Weapons can be Positive, Negative or Useless:
//
// Positive Weapons will hurt the enemy when attacked.
// Negative Weapons will heal the enemy when attacked.
// Useless Weapons will either deal no damage or constantly miss.
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

	// Useless Armors (3)
	["Test Usl", "Images/PLACEHOLDER.png", 0],

];

// Armors can be Positive, Negative or Useless:
//
// Positive Armors will reduce damage when attacked.
// Negative Armors will heal you when attacked.
// Useless Armors will act as if you have none.
//
// You can activate a special timer to remove them in specialTimerMoment !


// =======================================================================================
// INTROTEXT ARRAY ["Text<br></span>"]
// =======================================================================================

const IntroText = [

	// Normal Enemies
	[
		["stares at you...<br></span>"],
		["wanders around...<br></span>"],
		["accidentally bumps into you...<br></span>"],
		["tries to get your attention...<br></span>"],
		["tests the IntroText array...<br></span>"],
	],
	
	// Bosses
	[
		["rushes at you!<br></span>"],
		["wants to fight!<br></span>"],
		["bumps into you!<br></span>"],
		["causes a scene!<br></span>"],
		["forcefully tests the IntroText array!<br></span>"],
	],
	
	// Special Encounters
	[
		["<span style='filter: opacity(3%);'>REFRESHTHEPAGECONTINUEATTACKDONTLETITSTARTOVER</span><br></span>"] // Round 81
	]
	
];


// =============================
// SETUP
// =============================

quickerTest = 1;
roundsToFall = 1;
gameLoad = false;
gameOn = false;
negDepths = JSON.parse(localStorage.getItem("negaTime"));

if (negDepths == null) {
	negDepths = false;
}

imFalling = false;

if (JSON.parse(localStorage.getItem("hasDied")) == null) {
	hasDied = false;
	localStorage.setItem("hasDied", JSON.stringify(hasDied));
}


// =============================
// MAIN PAGE
// =============================

function startGame() {
	if (!gameLoad) {
		resetData();
	}
	
	ngPlus = JSON.parse(localStorage.getItem("ngPlus"));

	playedOnce = true;
	saveExists = true;
	hasDied = false;
	
	document.body.innerHTML = '<div id="fullfilter">\
	<h1 style="margin-bottom: 0; display: inline;">LIQUID DIET</h1> <button id="gameSpd" onclick="speedInc()" style="top: 1.25em;position: absolute;left: 16.5em;"></button>\
		<h2 id="roundNum" style="margin-top: 0"></h2>\
\
		<h3 id="enemyName"></h3>\
		<p>Enemy HP: <span id="enemyHP"> </span></p>\
		<img id="enemyImg" src="Images/PLACEHOLDER.png" alt="Enemy">\
\
		<br>\
\
		<div class="noHighlight">\
			<button id="playerAttack" onclick="Attack()"> Attack </button>\
			<button id="talking" onclick="talkTo()"> Talk </button>\
			<button id="runAway" onclick="Run()"> Run </button>\
		</div>\
\
		<p id="playerStats">Your HP: <span id="playerHP"></span></p>\
\
		<div class="noHighlight">\
			<button id="inventory1" onclick="useItem(event)">Empty</button>\
			<button id="inventory2" onclick="useItem(event)">Empty</button>\
			<button id="inventory3" onclick="useItem(event)">Empty</button>\
		</div>\
\
		<h5> ACTION LOG </h5>\
		<div class="actionlog">\
			<p id="actionLog"></p>\
		</div>\
\
		<div class="weaponmenu" id="weaponMenu">\
			<h3> Equipment Menu </h3>\
			<span class="noHighlight">\
				<button id="weaponEquipBtn">Equip</button>\
				<button id="weaponDiscardBtn">Discard</button>\
			</span>\
		</div>\
\
		<script src="liquid.js"> </script>\
	</div>';
	
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
	currentEnemyLines = 0;
	currentEnemyMinHP = 0;
	currentEnemyHP = 3;
	currentEnemyMaxHP = currentEnemyHP;
	enemyDrop = Items[0];
	enemyDropType = undefined;
	specialEncounter = false;
	bossTime = false;

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
	roundCounter = 0;
	weaponMenu.style.visibility = "hidden";
	weaponEquipBtn.disabled = true;
	weaponDiscardBtn.disabled = true;
	document.getElementById("weaponEquipBtn").addEventListener("click", weaponEquip);
	document.getElementById("weaponDiscardBtn").addEventListener("click", weaponDiscard);
	document.getElementById("gameSpd").innerHTML = "Game Speed: " + quickerTest;

	// Depth stuff
	currentDepth = 0;
	depthName = currentDepth;

	// Inventory stuff
	clickFix = false; // Fixes a weird issue with negative itemHeal
	itemSlot1 = Items[0];
	itemSlot2 = Items[0];
	itemSlot3 = Items[0];
	itemSlot1[0] = "Empty";
	itemSlot1[2] = "Null";
	itemSlot2[0] = "Empty";
	itemSlot2[0] = "Null";
	itemSlot3[0] = "Empty";
	itemSlot3[2] = "Null";
	anyItem = itemSlot1 || itemSlot2 || itemSlot3;
	fullInv = false;
	itemUsed = undefined;
	item1taken = false;
	item2taken = false;
	item3taken = false;

	// Alert stuff
	alertTitle = "ALERT TEST";
	alertMainText = "Wow!<br>You just tested the cool alert.";
	alertButtonText = "AWESOME BRO";
	
	document.getElementById("playerHP").innerHTML = "<strong>" + currentPlayerHP + "/" + maxPlayerHP + "</strong>";
	disableInvs();
	depthCheck();
	
	if (!gameLoad) {
		randomizeEnemy();
	}
	else {
		gameLoad = false;
	}
	
	gameOn = true;
}

// Load saved game
function loadGame() {
	gameLoad = true;
	
	startGame();
	loadData();
	
	if (itemSlot1[0] != "Empty" && itemSlot2[2] != "Empty" && itemSlot3[2] != "Empty") {
		fullInv = true;

		// PLACEHOLDER DEBUG CONSOLE LOG
		console.log("All item slots taken. fullInv is", fullInv);
	}
	
	if (currentEnemy[1] == "Images/PLACEHOLDER.png") {
		document.getElementById("enemyImg").style.height = "8.5em";
	}
	else {
		document.getElementById("enemyImg").style.height = "auto";
	}
}

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

function enableInvs() {
	if (itemSlot1[0] == "Empty" || itemSlot1 == Items[0]) {
		inventory1.disabled = true;
	}
	else {
		inventory1.disabled = false;
		item1taken = true;
	}

	if (itemSlot2[0] == "Empty" || itemSlot2 == Items[0]) {
		inventory2.disabled = true;
	}
	else {
		inventory2.disabled = false;
	}

	if (itemSlot3[0] == "Empty" || itemSlot3 == Items[0]) {
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

	if (itemSlot1[0] == "Empty") {
		inventory1.disabled = true;
	}
	else {
		inventory1.disabled = false;
	}

	if (itemSlot2[0] == "Empty") {
		inventory2.disabled = true;
	}
	else {
		inventory2.disabled = false;
	}

	if (itemSlot3[0] == "Empty") {
		inventory3.disabled = true;
	}
	else {
		inventory3.disabled = false;
	}

	runFail = false;
}


function depthCheck() {

	const pageText = document.getElementById("playerStats");

	if (roundCounter < 0) {
		negDepths = true;
		document.body.style.backgroundColor = "red";
		document.getElementById("fullfilter").style.filter = "";
		currentDepth = 3; // SEOKU> To Be Replaced by 4 or whatever. Changed so it doesn't throw errors
		depthName = "WRONG";
	}

	if (roundCounter >= 0 && roundCounter <= 20) {
		negDepths = false;
		document.body.style.backgroundColor = "#d7d7d7";
		document.getElementById("fullfilter").style.filter = "";
		currentDepth = 0;
		depthName = currentDepth;
	}

	if (roundCounter >= 21 && roundCounter <= 40) {
		negDepths = false;
		document.body.style.backgroundColor = "#999993";
		document.getElementById("fullfilter").style.filter = "";
		currentDepth = 1;
		depthName = currentDepth;
	}

	if (roundCounter >= 41 && roundCounter <= 60) {
		negDepths = false;
		document.body.style.background = "#5f70da";
		currentDepth = 2;
		depthName = currentDepth;
	}

	if (roundCounter >= 61 && roundCounter <= 80) {
		negDepths = false;
		document.body.style.background = "rgb(155, 38, 50)";
		document.getElementById("fullfilter").style.filter = "";
		currentDepth = 3;
		depthName = currentDepth;
	}

	if (roundCounter == 81) {
		negDepths = false;
		document.body.style.background = "#e6ebff";
		document.getElementById("fullfilter").style.filter = "";
		currentDepth = 3;
		depthName = "FINALITY";
	}
	
	// SEOKU> If you refresh when asked for an NG+ it can keep going :eyes:
	if (roundCounter >= 82) {
		negDepths = false;
		document.body.style.background = "black";
		document.getElementById("fullfilter").style.filter = "invert() contrast(10000000000%)";
		currentDepth = 3; // SEOKU> To Be Replaced by 4 or whatever. Changed so it doesn't throw errors
		depthName = "ABOVE THE SKIES";
	}
	
	if (roundCounter == 101) {
		negDepths = false;
		depthName = "NaN";
		currentDepth = 3; // SEOKU> To Be Replaced by 4 or whatever. Changed it doesn't throw errors
		roundsToFall = 1.02;
		depthFall();
	}
	
	if (!ngPlus) {
		document.getElementById("roundNum").innerHTML = `<u>Round: ${roundCounter}</u> | <u>Depth: ${depthName}</u>`;
	}
	else {
		document.getElementById("roundNum").innerHTML = `<u>Round: ${roundCounter}</u> | <u>Depth: ${depthName}</u> (NEW GAME +)`;
	}

	// VIVO> Unsure how to make DEPTH: WRONG unlockable.
}

function playerReset() {
	minPlayerHP = ogPlayerMinHP;
	maxPlayerHP = ogPlayerMaxHP;
	currentPlayerHP = ogPlayerCurrentHP;
	currentWeapon = Weapons[0];
	currentArmor = Armors[0];
}


// Save data stuff
function newGamePlus() {
	line = 0;

	equipmentUpdate();
	
	roundCounter = 0;
	currentDepth = 0;
	depthName = currentDepth;
	depthCheck();

	randomizeEnemy();
	enableAll();
}

function resetData() {
	
	// Round & Depth info
	highScore = 0;
	localStorage.setItem("roundNow", 0);
	localStorage.setItem("depthNow", 0);
	localStorage.setItem("depthNowName", 0);
	localStorage.setItem("topScore", JSON.stringify(menuScore));
	document.getElementById("score").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HIGHSCORE: " + menuScore;
	
	saveExists = false;
	localStorage.setItem("hasSaved", JSON.stringify(saveExists));
	document.getElementById("contGame").disabled = true;
	document.getElementById("gameDatawipe").disabled = true;

	localStorage.clear();
	console.log("Data erased!", localStorage);
}

function saveData() {
	
	// Round & Depth info
	localStorage.setItem("roundNow", JSON.stringify(roundCounter));
	localStorage.setItem("depthNow", JSON.stringify(currentDepth));
	localStorage.setItem("depthNowName", depthName);
	localStorage.setItem("negaTime", JSON.stringify(negDepths));
	
	// Player info
	localStorage.setItem("plyMaxHealth", JSON.stringify(maxPlayerHP));
	localStorage.setItem("plyMinHealth", JSON.stringify(minPlayerHP));
	localStorage.setItem("plyHealth", JSON.stringify(currentPlayerHP));
	localStorage.setItem("plyWeapon", JSON.stringify(currentWeapon));
	localStorage.setItem("plyArmor", JSON.stringify(currentArmor));
	localStorage.setItem("plyKnowsW", JSON.stringify(knowsWeapons));
	localStorage.setItem("plyKnowsA", JSON.stringify(knowsArmors));
	localStorage.setItem("hasDied", JSON.stringify(deathMenu));

	// Item & Inventory info
	localStorage.setItem("1stItem", JSON.stringify(itemSlot1));
	localStorage.setItem("1stItemName", itemSlot1[0]);
	localStorage.setItem("1stItemType", itemSlot1[2]);
	localStorage.setItem("1stInv", document.getElementById("inventory1").innerHTML);
	localStorage.setItem("2ndItem", JSON.stringify(itemSlot2));
	localStorage.setItem("2ndItemName", itemSlot2[0]);
	localStorage.setItem("2ndItemType", itemSlot2[2]);
	localStorage.setItem("2ndInv", document.getElementById("inventory2").innerHTML);
	localStorage.setItem("3rdItem", JSON.stringify(itemSlot3));
	localStorage.setItem("3rdItemName", itemSlot3[0]);
	localStorage.setItem("3rdItemType", itemSlot3[2]);
	localStorage.setItem("3rdInv", document.getElementById("inventory3").innerHTML);
	localStorage.getItem("InvFull", JSON.stringify(fullInv));

	// Enemy info
	localStorage.setItem("enemyNow", JSON.stringify(currentEnemy));
	localStorage.setItem("enemyNom", currentEnemy[0]);
	localStorage.setItem("enemyPic", currentEnemy[1]);
	localStorage.setItem("enemyHealth", currentEnemyHP);
	localStorage.setItem("enemyMaxHealth", currentEnemyMaxHP);
	localStorage.setItem("enemyDT", JSON.stringify(enemyDropType));
	localStorage.setItem("enemyD", JSON.stringify(enemyDrop));
	localStorage.setItem("enemyBla", JSON.stringify(currentEnemyLines));
	localStorage.setItem("isBoss", JSON.stringify(bossTime));
	localStorage.setItem("isSpec", JSON.stringify(specialEncounter));
	
	localStorage.setItem("ngPlus", JSON.stringify(ngPlus));
	
	localStorage.setItem("hasPlayed", JSON.stringify(playedOnce));
	
	localStorage.setItem("oldScore", JSON.stringify(highScore));
	localStorage.setItem("topScore", JSON.stringify(menuScore));
	
	console.log("current highscore", highScore, "menu highscore", JSON.parse(localStorage.getItem("topScore")));
	console.log("Data saved!", localStorage);
}

function loadData() {
	
	elapsedTurns = 0;
	line = 0;
	
	// Round & Depth info
	roundCounter = JSON.parse(localStorage.getItem("roundNow"));
	currentDepth = JSON.parse(localStorage.getItem("depthNow"));
	depthName = localStorage.getItem("depthNowName");
	negDepths = JSON.parse(localStorage.getItem("negaTime"));
	menuScore = JSON.parse(localStorage.getItem("topScore"));
	highScore = JSON.parse(localStorage.getItem("oldScore"));
	
	// Player info
	maxPlayerHP = JSON.parse(localStorage.getItem("plyMaxHealth"));
	minPlayerHP = JSON.parse(localStorage.getItem("plyMinHealth"));
	currentPlayerHP = JSON.parse(localStorage.getItem("plyHealth"));
	currentWeapon = JSON.parse(localStorage.getItem("plyWeapon"));
	currentArmor = JSON.parse(localStorage.getItem("plyArmor"));
	knowsWeapons = JSON.parse(localStorage.getItem("plyKnowsW"));
	knowsArmors = JSON.parse(localStorage.getItem("plyKnowsA"));

	// Item & Inventory info
	itemSlot1[0] = localStorage.getItem("1stItemName");
	itemSlot1[2] = localStorage.getItem("1stItemType");
	document.getElementById("inventory1").innerHTML = localStorage.getItem("1stInv");
	itemSlot1 = JSON.parse(localStorage.getItem("1stItem"));
	itemSlot2[0] = localStorage.getItem("2ndItemName");
	itemSlot2[2] = localStorage.getItem("2ndItemType");
	document.getElementById("inventory2").innerHTML = localStorage.getItem("2ndInv");
	itemSlot2 = JSON.parse(localStorage.getItem("2ndItem"));
	itemSlot3[0] = localStorage.getItem("3rdItemName");
	itemSlot3[2] = localStorage.getItem("3rdItemType");
	document.getElementById("inventory3").innerHTML = localStorage.getItem("3rdInv");
	itemSlot3 = JSON.parse(localStorage.getItem("3rdItem"));
	fullInv = JSON.parse(localStorage.getItem("InvFull"));

	// Enemy info
	currentEnemy = JSON.parse(localStorage.getItem("enemyNow"));
	document.getElementById("enemyName").innerHTML = localStorage.getItem("enemyNom");
	document.getElementById("enemyImg").src = localStorage.getItem("enemyPic");
	currentEnemyHP = localStorage.getItem("enemyHealth");
	currentEnemyMaxHP = localStorage.getItem("enemyMaxHealth");
	enemyDropType = JSON.parse(localStorage.getItem("enemyDT"));
	enemyDrop = JSON.parse(localStorage.getItem("enemyD"));
	currentEnemyLines = JSON.parse(localStorage.getItem("enemyBla"));
	bossTime = JSON.parse(localStorage.getItem("isBoss"));
	specialEncounter = JSON.parse(localStorage.getItem("isSpec"));
	
	ngPlus = JSON.parse(localStorage.getItem("ngPlus"));
	
	depthCheck();
	enemyIntro();
	document.getElementById("playerHP").innerHTML = "<strong>" + currentPlayerHP + "/" + maxPlayerHP + "</strong>";
	document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyHP + "/" + currentEnemyMaxHP + "</strong>";
	
	enableInvs();
	equipmentUpdate();

	console.log("Data loaded!", localStorage);
}

// Easing stuff

// SEOKU> MASSIVE THANKS TO Andrey Sitnik AND Ivan Solovev FOR easings.net
// SEOKU> I HATE MATH FOREVER

function easeOutExpo(x) {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}


// =============================
// ON PAGE LOAD/RELOAD
// =============================

window.onbeforeunload = (event) => {
	if (gameOn) {
		if (!imFalling) {
			saveData();
		}
		localStorage.setItem("hasDied", JSON.stringify(hasDied));
	}
}

window.onload = (event) => {
	
	menuScore = JSON.parse(localStorage.getItem("topScore"));
	deathMenu = JSON.parse(localStorage.getItem("hasDied"));
	saveExists = JSON.parse(localStorage.getItem("hasSaved"));
	playedOnce = JSON.parse(localStorage.getItem("hasPlayed"));

	if (playedOnce) {
		menuScore = JSON.parse(localStorage.getItem("topScore"));
	}
	else if (!playedOnce || playedOnce == null) {
		playedOnce = false;
		highScore = 0;
		menuScore = highScore;
		saveExists = false;
	}

	console.log("deathMenu", deathMenu, "menuScore", menuScore);
	console.log("playedOnce =", playedOnce);
	console.log("saveExists =", saveExists);
	
	if (menuScore > 0 && !negDepths) {
		saveExists = true;
	}
	else if (menuScore <= 0 && !negDepths) {
		highScore = 0;
		saveExists = false;
	}
	else if (menuScore <= 0 && negDepths) {
		saveExists = true;
	}
	
	setTimeout(() => { toMenu() }, 10);
};


// =============================
// MAIN MENU
// =============================

function toMenu() {
	gameOn = false;
	
	if (!playedOnce || playedOnce == null) {
		menuScore = 0;
	}
	
	roundCounter = JSON.parse(localStorage.getItem("roundNow"));
	deathMenu = JSON.parse(localStorage.getItem("hasDied"));
	console.log("hasDied =", deathMenu);
	
	if (!negDepths) {
		score = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HIGHSCORE: " + menuScore;
		document.body.style.backgroundColor = "#d7d7d7";
	}
	else if (negDepths && playedOnce) {
		score = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HIGHSCORE: " + roundCounter;
		document.body.style.backgroundColor = "#9a5959";
	}
	else {
		score = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HIGHSCORE: " + menuScore;
		document.body.style.backgroundColor = "#d7d7d7";
	}
	
	document.body.innerHTML = '<h1 style="margin-bottom: 0">LIQUID DIET</h1>\
		<h2 style="margin-top: 0"><u>by NURSEHELL</u></h2>\
		<h3 id="score" style="margin-top: 0; display:inline-block;margin-bottom: 5px;">' + score + '</h3>&nbsp;&nbsp;&nbsp;<button id="gameDatawipe" onclick="resetData()"> RESET DATA </button>\
\
		<br>\
\
		<img src="Images/PLACEHOLDER.png" alt="Logo or something">\
\
		<br>\
\
		<div class="noHighlight" style="display: inline-flex;column-gap: 10px;flex-flow: row wrap;justify-content: center;left: -3em;position: absolute;margin-top: 1em;">\
			<button id="play" onclick="startGame()" style="margin-bottom: 10px;margin-left: -0.75px;"> NEW GAME </button>\
			<button id="contGame" onclick="loadGame()" style="margin-bottom: 10px;"> CONTINUE </button>\
		<span class="break" style="flex-basis: 100%"></span>\
			<button id="options" onclick="toOptions()"> OPTIONS (tba?) </button>\
			<button id="menuBeast" onclick="toBestiary()"> BESTIARY (tba) </button>\
		</div>\
\
		<script src="liquid.js"> </script>';
	
	document.getElementById("gameDatawipe").addEventListener("click", (e) => {
		menuScore = 0;
		highScore = 0;
		hasDied = false;
		playedOnce = false;
		saveExists = false;
		toMenu();
	});
	
	document.getElementById("options").disabled = true;
	document.getElementById("menuBeast").disabled = true; // SEOKU> These two are set to true for any other player to not be confused lol there's no code for them
	
	if (!saveExists) {
		document.getElementById("gameDatawipe").disabled = true;
	}
	else {
		document.getElementById("gameDatawipe").disabled = false;
	}
	
	if (!deathMenu) {
		if (!saveExists) {
			document.getElementById("contGame").disabled = true;
			return;
		}
		document.getElementById("contGame").disabled = false;
	}
	else if (deathMenu) {
		document.getElementById("contGame").disabled = true;
	}
}


// =============================
// GAME SPEED
// =============================

function speedInc() {
	switch (quickerTest) {
		case 1:
			quickerTest = 2;
			document.getElementById("gameSpd").innerHTML = "Game Speed: " + quickerTest;
			break;
		
		case 2:
			quickerTest = 3;
			document.getElementById("gameSpd").innerHTML = "Game Speed: " + quickerTest;
			break;
		
		case 3:
			quickerTest = 4;
			document.getElementById("gameSpd").innerHTML = "Game Speed: " + quickerTest;
			break;
		
		case 4:
			quickerTest = 1;
			document.getElementById("gameSpd").innerHTML = "Game Speed: " + quickerTest;
			break;
	}
}


// =============================
// FALLING TO NEGATIVES
// =============================

function depthFall() {
	
	imFalling = true;
	console.log("IM FALING!!!!");
	disableAll();

	var ogRound = roundCounter;
	
	// roundsToFall to be set between 0 and 1 BEFORE caling depthFall(). Examples:
	// 1 round = .01 / 25 rounds = .25 / 50 rounds = .5 / 75 rounds = .75 / 100 rounds = 1
	for (let i = roundsToFall; i > 0; i -= .01) {
		
		disableAll();
		
		console.log("i:", i);

		setTimeout(() => {
		
			var fakeEnemy = roundCounter;
			roundCounter--;
			depthCheck();
			
			console.log("round", roundCounter, "depth", currentDepth, "fakeenemy", fakeEnemy);

			if (fakeEnemy > roundCounter) {
				fakeEnemy--;
				randomizeEnemy();
				disableAll();
			}
			
			if (roundCounter == ogRound - (roundsToFall*100)) {
				imFalling = false;
				saveData();
				score = 
				enableAll();
			}

			console.log("i =", i);
			console.log("ROUND =", roundCounter, "OGROUND =", ogRound);
			console.log("TIMER =", easeOutExpo(i) * 15000);
			
		}, easeOutExpo(i) * 15000);
	}
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
		
		// Negative Rounds
		if (!negDepths) {
			roundCounter++;
			
			if (highScore < roundCounter) {
				highScore = roundCounter;
				
				if (menuScore < roundCounter) {
					menuScore = roundCounter;
					console.log("surpassed highscore");
					localStorage.setItem("topScore", JSON.stringify(menuScore));
				}
			}
		}
		
		// Positive Rounds
		else {
			roundCounter--;
			
			if (highScore > roundCounter) {
				highScore = roundCounter;
				
				if (menuScore > roundCounter) {
					menuScore = roundCounter;
					console.log("surpassed highscore");
					localStorage.setItem("topScore", JSON.stringify(menuScore));
				}
			}
		}
		depthCheck();
	}

	if (enemyKilled) {
		enemyKilled = false;

		// Up Round Counter by 1
		if (!negDepths) {
			roundCounter++;
			if (highScore < roundCounter) {
				highScore = roundCounter;
				if (menuScore < roundCounter) {
					menuScore = roundCounter;
					console.log("surpassed highscore");
					localStorage.setItem("topScore", JSON.stringify(menuScore));
				}
			}
		}
		else {
			roundCounter--;
			if (highScore > roundCounter) {
				highScore = roundCounter;
				if (menuScore > roundCounter) {
					menuScore = roundCounter;
					console.log("surpassed highscore");
					localStorage.setItem("topScore", JSON.stringify(menuScore));
				}
			}
		}
		depthCheck();
	}
	
	console.log("Round:", roundCounter, "| Depth:", currentDepth, "| Depth Name:", depthName, "| Highscore:", highScore);

	// Randomize and Boss/Special enemy setup
	switch (roundCounter) {

		// Area 0 Boss
		case 20:
			bossTime = true;
		break;

		// Area 1 Boss
		case 40:
			bossTime = true;
			break;

		// Area 2 Boss
		case 60:
			bossTime = true;
			break;

		// Area 3 Boss
		case 80:
			bossTime = true;
			break;
			
		// Back to Menu (playtest) [UNFINISHED]
		case 81:
			bossTime = false;
			specialEncounter = true;
			randomEnemy = 0;
			currentEnemy = Enemies[1][0][randomEnemy];
			
			document.getElementById("actionLog").innerHTML = IntroText[2][0];
			
			if (!imFalling) {
				alertTitle = "LIQUID DIET";
				alertMainText = "Congratulations!<br>You have beaten the playtest!<br>Fancy a NG+?";
				alertButton1Text = "YES";
				alertButton2Text = "NO";
				
				customAlertChoice();
				
				btn1.id = "retryBtn";
				btn2.id = "menuBtn";

				btn1.onclick = function () {
					removeCustomAlert();
					roundsToFall = .8;
					depthFall();
					ngPlus = true;
					return false;
				}

				btn2.onclick = function () {
					toMenu();
					return false;
				}
			}
			break;

		// BASIC ENEMIES
		default:
			bossTime = false;
			specialEncounter = false;
			break;
	}
	
	if (bossTime && !specialEncounter) {
		randomEnemy = Math.floor(Math.max(Math.random() * (Enemies[2][currentDepth].length), 0));
		currentEnemy = Enemies[2][currentDepth][randomEnemy];
	}
	else if (!bossTime && !specialEncounter) {
		randomEnemy = Math.floor(Math.max(Math.random() * (Enemies[0][currentDepth].length), 0));
		currentEnemy = Enemies[0][currentDepth][randomEnemy];
	}
		

	// Enemy Drop setup
	enemyDropType = currentEnemy[5][0];
	enemyDrop = currentEnemy[4][0];

	// Enemy HP setup (+1 every Depth (*2 on Bosses))
	if (bossTime) {
		currentEnemyHP = Math.floor((currentEnemy[2] + currentDepth) * 2);
		console.log("Current Enemy's true HP: (BaseHP + CurrentDepth) * 2 (", currentEnemy[2] + currentDepth, "* 2 =", (currentEnemy[2] + currentDepth) * 2, ") (BOSSFIGHT)");
	}
	else if (!specialEncounter) {
		currentEnemyHP = Math.floor(currentEnemy[2] + currentDepth);
		console.log("Current Enemy's true HP: BaseHP + CurrentDepth (", currentEnemy[2], "+", currentDepth, "=", (currentEnemy[2] + currentDepth), ")");
	}

	enemyName = currentEnemy[0];
	currentEnemyLines = currentEnemy[6].length;
	document.getElementById("enemyName").innerHTML = enemyName;
	document.getElementById("enemyImg").src = currentEnemy[1];

	// Scale down massive Placeholder pic
	if (currentEnemy[1] == "Images/PLACEHOLDER.png") {
		document.getElementById("enemyImg").style.height = "8.5em";
	}
	else {
		document.getElementById("enemyImg").style.height = "auto";
	}

	if (itemSlot1[0] != "Empty" && itemSlot2[0] != "Empty" && itemSlot3[0] != "Empty") {
		fullInv = true;

		// PLACEHOLDER DEBUG CONSOLE LOG
		console.log("All item slots taken. fullInv is", fullInv);
	}

	// Set enemy HP
	currentEnemyMaxHP = currentEnemyHP;
	document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyHP + "/" + currentEnemyMaxHP + "</strong>";
	
	enemyIntro();

	enableAll();

	saveExists = true;
	localStorage.setItem("hasSaved", JSON.stringify(saveExists));
	
	if (!imFalling) {
		saveData();
	}

	return;
}


function enemyIntro() {
	
	enemyName = currentEnemy[0];
	
	// Set intro text
	if (!bossTime && !specialEncounter) {
		console.log("notboss & notspecial");
		document.getElementById("actionLog").innerHTML = "<span id='" + actionLine + "'><strong>" + enemyName + "</strong> " + IntroText[0][Math.floor(Math.random() * IntroText[0].length)];
	}
	else if (bossTime) {
		console.log("boss");
		document.getElementById("actionLog").innerHTML = "<span id='" + actionLine + "'>The <strong>" + enemyName + "</strong> " + IntroText[1][Math.floor(Math.random() * IntroText[1].length)];
	}
	else if (specialEncounter) {
		console.log("special");
		document.getElementById("actionLog").innerHTML = "<span id='" + actionLine + "'>" + IntroText[2][Math.floor(Math.random() * IntroText[2].length)];
	}
	
}


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

	autoScroll();
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
			var enemyDmg = Math.floor(1 + (currentDepth / 2) - (currentArmor[2] + 2));
			var playerHurt = Math.max(0, enemyDmg);
		}

		if (!negDamage && playerHurt != 0) {
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "The enemy attacks! <br></span>";
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
			// Raised by 1 every 3 depths
			enemyHeal = Math.floor(2 + (currentDepth / 3));

			console.log("Enemy Healed by", 2 + (currentDepth / 3), ", rounded to", enemyHeal);

			actionLine++;
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "The enemy heals itself! <br></span>";

			currentEnemyHP += enemyHeal;

			if (currentEnemyHP > currentEnemyMaxHP) {
				console.log("... but that would be too much, so Enemy Healed By", currentEnemyHP - currentEnemyMaxHP);
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

	if (currentPlayerHP <= minPlayerHP) {
		currentPlayerHP = minPlayerHP;
		playerDefeat();
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

	autoScroll();
}


// =============================
// PLAYER DEFEAT
// =============================

function playerDefeat() {
	disableAll();
	actionLine = 1;
	deleteLine = 1;
	
	hasDied = true;
	deathMenu = hasDied;
	localStorage.setItem("hasDied", JSON.stringify(deathMenu));

	document.getElementById("actionLog").innerHTML = '<span id="' + actionLine + '">' + "You have succumbed. <strong>The end.</strong><br>";

	document.getElementById("actionLog").innerHTML += '<p style="font-size: 1.75em;margin-bottom:0.5em;"><strong><u>Try again?</u></strong></p>';

	document.getElementById("actionLog").innerHTML += '<button id="retryBtn"> START ANEW </button> <button id="menuBtn"> BACK TO MENU </button>';
	
	document.getElementById("retryBtn").addEventListener("click", playerRevive);
	document.getElementById("menuBtn").addEventListener("click", toMenu);
}


// =============================
// PLAYER REVIVE / FULL RESET
// =============================

function playerRevive() {

	document.getElementById("actionLog").innerHTML = "And so, you feel yourself rise again...";

	setTimeout(() => {
		line = 0;

		playerReset();

		fullInv = false;
		disableInvs();
		equipmentUpdate();
		
		roundCounter = 0;
		currentDepth = 0;
		depthName = currentDepth;
		depthCheck();
		
		itemSlot1[0] = "Empty";
		itemSlot1[2] = "Null";
		itemSlot2[0] = "Empty";
		itemSlot2[2] = "Null";
		itemSlot3[0] = "Empty";
		itemSlot3[2] = "Null";
		document.getElementById("inventory1").innerHTML = itemSlot1[0];
		document.getElementById("inventory2").innerHTML = itemSlot2[0];
		document.getElementById("inventory3").innerHTML = itemSlot3[0];

		randomizeEnemy();
		
		hasDied = false;
		deathMenu = hasDied;
		localStorage.setItem("hasDied", JSON.stringify(deathMenu));
		
		enableActs();
	}, 2500 / quickerTest);
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

			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "You equipped the <strong>" + currentWeapon[0] + "</strong>.<br></span>";
			weaponEquipBtn.disabled = true;
			weaponDiscardBtn.disabled = true;
			weaponMenu.style.visibility = "hidden";

			// PLACEHOLDER DEBUG CONSOLE LOG
			console.log("You should NOW have", currentWeapon[2], "ATK and", (currentWeapon[2] * 2), "on CRITs");
			break;

		// Equipping Armor
		case "Armor":
			currentArmor = Armors[enemyDrop];

			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "You equipped the <strong>" + currentArmor[0] + "</strong>.<br></span>";
			weaponEquipBtn.disabled = true;
			weaponDiscardBtn.disabled = true;
			weaponMenu.style.visibility = "hidden";

			// PLACEHOLDER DEBUG CONSOLE LOG
			console.log("You should NOW have", currentArmor[2], "DEF");
			break;
	}

	equipmentUpdate();

	// Finish Round
	setTimeout(() => { randomizeEnemy(); }, 2500 / quickerTest);
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
	setTimeout(() => { randomizeEnemy(); }, 2500 / quickerTest);
}


// =============================
// DROP SYSTEMS
// =============================

// ITEM DROPS

function grantDrop() {
	console.log("Item drop:", Items[enemyDrop][0]);

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
		case "Null":
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong>ITEM GOT!</strong> (" + Items[enemyDrop][0] + ")<br></span>";
			break;

		case "DMG":
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong>ATTACK ITEM GOT!</strong> (" + Items[enemyDrop][0] + ")<br></span>";
			break;

		case "Heal":
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong>HEALING ITEM GOT!</strong> (" + Items[enemyDrop][0] + ")<br></span>";
			break;
	}

	setupItem();

	// Finish Round
	setTimeout(() => { randomizeEnemy(); }, 2500 / quickerTest);
}

function grantOverk() {
	console.log("... actually, it's an Overkill");

	// Juicy Drop
	if (enemyDrop == 4) {
		juicyHeal = Math.abs((currentEnemyHP) - 1);
	}

	switch (Items[enemyDrop][2]) {
		case "Null":
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong><u>OVERKILL!!</u> ITEM GOT!</strong> (" + Items[enemyDrop][0] + ")<br></span>";
			break;

		case "DMG":
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong><u>OVERKILL!!</u> ATTACK ITEM GOT!</strong> (" + Items[enemyDrop][0] + ")<br></span>";
			break;

		case "Heal":
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong><u>OVERKILL!!</u> HEALING ITEM GOT!</strong> (" + Items[enemyDrop][0] + ")<br></span>";
			break;
	}

	setupItem();

	// PLACEHOLDER DEBUG CONSOLE LOG
	console.log("Enemy died at", currentEnemyHP, "HP. juicyHeal should be one above & always positive:", juicyHeal);

	// Finish Round
	setTimeout(() => { randomizeEnemy(); }, 2500 / quickerTest);
}

function setupItem() {

	if (itemSlot1[0] == "Empty") {
		itemSlot1 = Items[enemyDrop];
		document.getElementById("inventory1").innerHTML = Items[enemyDrop][0];
		document.getElementById("inventory1").addEventListener("click", enemyDrop[2], { once: true });
	}

	else if (itemSlot1[0] != "Empty" && itemSlot2[0] == "Empty") {
		itemSlot2 = Items[enemyDrop];
		document.getElementById("inventory2").innerHTML = Items[enemyDrop][0];
		document.getElementById("inventory2").addEventListener("click", enemyDrop[2], { once: true });
	}

	else if (itemSlot1[0] != "Empty" && itemSlot2[0] != "Empty" && itemSlot3[0] == "Empty") {
		itemSlot3 = Items[enemyDrop];
		document.getElementById("inventory3").innerHTML = Items[enemyDrop][0];
		document.getElementById("inventory3").addEventListener("click", enemyDrop[2], { once: true });
	}
}


// EQUIPMENT DROPS

function grantWeapon() {
	console.log("Weapon drop:", Weapons[enemyDrop][0]);

	if (currentWeapon == Weapons[enemyDrop]) {
		console.log("... but said weapon is already equipped, so...");
		alrEquipped();
		return;
	}

	equipWhat = "Weapon";

	actionLine++;
	if (currentEnemyHP < 0) {
		document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong><u>OVERKILL!!</u> WEAPON GOT!</strong> (" + Weapons[enemyDrop][0] + ")<br></span>";
	}
	else {
		document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong>WEAPON GOT!</strong> (" + Weapons[enemyDrop][0] + ")<br></span>";
	}

	weaponMenu.style.visibility = "visible";
	weaponDiscardBtn.disabled = false;
	weaponEquipBtn.disabled = false;
}

function grantArmor() {
	console.log("Armor drop:", Armors[enemyDrop][0]);

	if (currentArmor == Armors[enemyDrop]) {
		console.log("... but said armor is already equipped, so...");
		alrEquipped();
		return;
	}

	equipWhat = "Armor";

	actionLine++;
	if (currentEnemyHP < 0) {
		document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong><u>OVERKILL!!</u> ARMOR GOT!</strong> (" + Armors[enemyDrop][0] + ")<br></span>";
	}
	else {
		document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong>ARMOR GOT!</strong> (" + Armors[enemyDrop][0] + ")<br></span>";
	}

	weaponMenu.style.visibility = "visible";
	weaponDiscardBtn.disabled = false;
	weaponEquipBtn.disabled = false;
}


// MAXIMUM ITEMS, NO DROPS & ALREADY EQUIPPED

function maxItems() {
	console.log("... but the bag is full");
	actionLine++;

	if (currentEnemyHP < 0) {
		document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong><u>OVERKILL!!</u></strong> Your bag is full...<br></span>";
	}
	else {
		document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "Your bag is full...<br></span>";
	}

	// Finish Round
	setTimeout(() => { randomizeEnemy(); }, 2500 / quickerTest);
}

function noDrops() {
	console.log("No drop for you");
	actionLine++;

	if (currentEnemyHP < 0) {
		document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong><u>OVERKILL!!</u></strong> The enemy had nothing of value...<br></span>";
	}
	else {
		document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "The enemy had nothing of value...<br></span>";
	}

	// Finish Round
	setTimeout(() => { randomizeEnemy(); }, 2500 / quickerTest);
}

function alrEquipped() {
	console.log("No equipment for you");
	actionLine++;

	if (currentEnemyHP < 0) {
		document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong><u>OVERKILL!!</u></strong> You already had the enemy's equipment...<br></span>";
	}
	else {
		document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "You already had the enemy's equipment...<br></span>";
	}

	// Finish Round
	setTimeout(() => { randomizeEnemy(); }, 2500 / quickerTest);
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

	var normalOverk = !bossTime && enemyDropType != 2 && enemyDropType != 3;

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

// This whole part is for testing
megaCritTest = false; // Enable these via console
megaMissTest = false; // Testing only. Or i guess we could make those weapon things but...
normCritTest = false; // Yea
normMissTest = false; // Yea Yea

if (megaCritTest == true) {
	runHitTest();
}
if (megaMissTest == true) {
	runHitTest();
}
if (normCritTest == true) {
	runHitTest();
}
if (normMissTest == true) {
	runHitTest();
}

function runHitTest() {
	
	if (megaCritTest == false && megaMissTest == false && normCritTest == false && normMissTest == false) {
		megaCritTest = true;
		megaMissTest = false;
		normCritTest = false;
		normMissTest = false;
		setTimeout(() => { console.log("NORMAL HITS DEACTIVED // RUN FUNC AGAIN TO SWAP TRUEFALSE"); }, 1);
	}
	else if (megaCritTest == true && megaMissTest == false && normCritTest == false && normMissTest == false) {
		megaCritTest = false;
		megaMissTest = true;
		normCritTest = false;
		normMissTest = false;
	}
	else if (megaCritTest == false && megaMissTest == true && normCritTest == false && normMissTest == false) {
		megaCritTest = false;
		megaMissTest = false;
		normCritTest = true;
		normMissTest = false;
	}
	else if (megaCritTest == false && megaMissTest == false && normCritTest == true && normMissTest == false) {
		megaCritTest = false;
		megaMissTest = false;
		normCritTest = false;
		normMissTest = true;
	}
	else if (megaCritTest == false && megaMissTest == false && normCritTest == false && normMissTest == true) {
		megaCritTest = false;
		megaMissTest = false;
		normCritTest = false;
		normMissTest = false;
		setTimeout(() => { console.log("NORMAL HITS REACTIVATED // RUN FUNC AGAIN TO DEACTIVATE"); }, 1);
	}
	
	console.log("MEGACRIT:", megaCritTest, "MEGAMISS:", megaMissTest, "NORMCRIT:", normCritTest, "NORMMISS:", normMissTest);
}

// This whole part is the actual thing
function Attack() {
	disableAll();

	weaponEffect = currentWeapon[4];
	weaponSpecific = currentWeapon[5];
	critNum = currentWeapon[2] * 2;
	hitRate = currentWeapon[3];
	critRate = Math.floor((Math.PI / currentWeapon[3]) * 7500);

	if (megaCritTest == true) {
		var hitRNG = 1;
	}
	else if (megaMissTest == true) {
		var hitRNG = 1000;
	}
	else if (normCritTest == true) {
		var hitRNG = critRate - 1;
	}
	else if (normMissTest == true) {
		var hitRNG = hitRate + 1;
	}
	else {
		var hitRNG = Math.floor((Math.random() * 1000) + 1);
	}
	
	// Weapon Special Effects
	function weaponEffectCheck() {
		switch (weaponEffect) {
			
			case 1: // Extra (+1) Damage
				switch (weaponSpecific) {

					case 0: // ...Against "ABOMINATIONS"
						if (currentEnemy[7] == 0) {
							currentEnemyHP -= 1;
							actionLine++;
							document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "Your weapon deals extra damage against <strong>ABOMINATIONS!</strong><br></span>";
						}
							
							autoScroll();
						break;

					case 1: // ...Against "HERALDS"
						if (currentEnemy[7] == 1) {
							currentEnemyHP -= 1;
							actionLine++;
							document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "Your weapon deals extra damage against <strong>HERALDS!</strong><br></span>";
						}
							autoScroll();
						break;

					case 2: // ...Against "MALADIES"
						if (currentEnemy[7] == 2) {
							currentEnemyHP -= 1;
							actionLine++;
							document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "Your weapon deals extra damage against <strong>MALADIES!</strong><br></span>";
						}
							autoScroll();
						break;

					case 3: // ...Against "NYMPHS"
						if (currentEnemy[7] == 3) {
							currentEnemyHP -= 1;
							actionLine++;
							document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "Your weapon deals extra damage against <strong>NYMPHS!</strong><br></span>";
						}
							autoScroll();
						break;
				}
				break;


			case 2: // Double (x2) Damage

				switch (weaponSpecific) {

					case 0: // ...Against "ABOMINATIONS"
						if (currentEnemy[7] == 0) {
							currentEnemyHP -= currentWeapon[2];
							actionLine++;
							document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "Your weapon deals extra damage against <strong>ABOMINATIONS!</strong><br></span>";
						}
							autoScroll();
						break;

					case 1: // ...Against "HERALDS"
						if (currentEnemy[7] == 1) {
							currentEnemyHP -= currentWeapon[2];
							actionLine++;
							document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "Your weapon deals extra damage against <strong>HERALDS!</strong><br></span>";
						}
							autoScroll();
						break;

					case 2: // ...Against "MALADIES"
						if (currentEnemy[7] == 2) {
							currentEnemyHP -= currentWeapon[2];
							actionLine++;
							document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "Your weapon deals extra damage against <strong>MALADIES!</strong><br></span>";
						}
							autoScroll();
						break;

					case 3: // ...Against "NYMPHS"
						if (currentEnemy[7] == 3) {
							currentEnemyHP -= currentWeapon[2];
							actionLine++;
							document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "Your weapon deals extra damage against <strong>NYMPHS!</strong><br></span>";
						}
							autoScroll();
						break;
				}
				break;
		}
	}

	// PLACEHOLDER DEBUG CONSOLE LOG
	console.log("(MISS AREA) " + hitRate + " |", hitRNG, "| " + critRate + " (CRIT AREA)");
	
	// MEGAMISS Hit check
	if (hitRNG === 1000) {
		currentPlayerHP -= currentWeapon[2];

		// Negative weapon check
		if (currentWeapon[2] < 0) {
			actionLine++;
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong>CRITICAL MISS...</strong> You hit yourself... wait, that's good!<br></span>";
		}

		// Positive weapon check
		else if (currentWeapon[2] > 0) {
			actionLine++;
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong>CRITICAL MISS...</strong> You end up hurting yourself...<br></span>";
		}

		// Useless weapon check
		else {
			actionLine++;
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong>CRITICAL MISS...</strong> Thankfully, nothing changes...<br></span>";
		}
	}

	// MEGACRIT Hit check
	else if (hitRNG === 1) {
		currentEnemyHP -= critNum * 2;

		// Negative weapon check
		if (currentWeapon[2] < 0) {
			actionLine++;
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong>MASSIVE CRIT!!!</strong> You tear the enemy apart!! Yet it gets healed...<br></span>";
		}

		// Positive weapon check
		else if (currentWeapon[2] > 0) {
			actionLine++;
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong>MASSIVE CRIT!!!</strong> You tear the enemy apart!!<br></span>";
			weaponEffectCheck();
		}

		// Useless weapon check
		else {
			actionLine++;
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong>MASSIVE CRIT!!!</strong> You tear the enemy apart!! Yet nothing changes...<br></span>";
		}
	}

	// CRIT Hit check
	else if (hitRNG <= critRate) {
		currentEnemyHP -= critNum;

		// Negative weapon check
		if (currentWeapon[2] < 0) {
			actionLine++;
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong>CRITICAL HIT!!</strong> You tear into the enemy! Yet it gets healed...<br></span>";
		}

		// Positive weapon check
		else if (currentWeapon[2] > 0) {
			actionLine++;
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong>CRITICAL HIT!!</strong> You tear into the enemy!<br></span>";
			weaponEffectCheck();
		}

		// Useless weapon check
		else {
			actionLine++;
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong>CRITICAL HIT!!</strong> You tear into the enemy! Yet nothing changes...<br></span>";
		}
	}

	// NORMAL Hit check
	else if (hitRNG <= hitRate) {
		currentEnemyHP -= currentWeapon[2];

		// Negative weapon check
		if (currentWeapon[2] < 0) {
			actionLine++;
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "You attack the enemy! Strangely, it gets healed...<br></span>";
		}

		// Positive weapon check
		else if (currentWeapon[2] > 0) {
			actionLine++;
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "You attack the enemy!<br></span>";
			weaponEffectCheck();
		}

		// Useless weapon check
		else {
			actionLine++;
			document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "You attack the enemy! Strangely, nothing changes...<br></span>";
		}
	}

	// MISS Hit check	
	else {
		actionLine++;
		document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "You missed...<br></span>";
	}

	// Player HP min/max
	if (currentPlayerHP < minPlayerHP) {
		currentPlayerHP = minPlayerHP;
	}
	if (currentPlayerHP > maxPlayerHP) {
		currentPlayerHP = maxPlayerHP;
	}
	
	// Enemy HP max (min used for juicyHeal calc, do not add)
	if (currentEnemyHP > currentEnemyMaxHP) {
		currentEnemyMaxHP = currentEnemyHP;
	}

	// Enemy & Player HP visual
	document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyHP + "/" + currentEnemyMaxHP + "</strong>";
	document.getElementById("playerHP").innerHTML = "<strong>" + currentPlayerHP + "/" + maxPlayerHP + "</strong>";

	// Enemy HP min (visually)
	if (currentEnemyHP < currentEnemyMinHP) {
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

	// Finish turn
	setTimeout(() => {
		if (currentEnemyHP >= 1) {
			enemyTurn();
		}

		else {
			setTimeout(() => { enemyDefeat(); }, 1000 / quickerTest);
		}

		if (currentPlayerHP <= minPlayerHP) {
			playerDefeat();
		}
	}, 1000 / quickerTest);

	runFail = false;

	autoScroll();
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
		setTimeout(() => { randomizeEnemy(); }, 2500 / quickerTest);
	}
	else {

		// PLACEHOLDER DEBUG CONSOLE LOG
		console.log("runRNG =", runRNG, "| Off by", (runOffLimit - runRNG));

		runFail = true;
		actionLine++;
		document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "<strong>Failed to flee!</strong> Try to attack the enemy again...<br></span>";
		disableAll();
		setTimeout(() => { enemyTurn(); }, 1000 / quickerTest);

		autoScroll();
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
			if (currentPlayerHP === maxPlayerHP && itemUsed[2] == "Heal") {
				currentPlayerHP = maxPlayerHP;
				document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "You're already at Max HP!<br></span>";
				autoScroll();
				return;
			}

			// Nomal item use
			else {
				fullInv = false;
				itemSlot1 = Items[0];
				document.getElementById("inventory1").innerHTML = Items[0][0];
				inventory1.disabled = true;
			}
			break;

		// Item slot 2 used
		case "inventory2":
			itemUsed = itemSlot2;

			// Healing at MaxHP
			if (currentPlayerHP === maxPlayerHP && itemUsed[2] == "Heal") {
				currentPlayerHP = maxPlayerHP;
				document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "You're already at Max HP!<br></span>";
				autoScroll();
				return;
			}

			// Normal item use
			else {
				fullInv = false;
				itemSlot2 = Items[0];
				document.getElementById("inventory2").innerHTML = Items[0][0];
				inventory2.disabled = true;
			}
			break;

		// Item slot 3 used
		case "inventory3":
			itemUsed = itemSlot3;

			// Healing at MaxHP
			if (currentPlayerHP === maxPlayerHP && itemUsed[2] == "Heal") {
				currentPlayerHP = maxPlayerHP;
				document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "You're already at Max HP!<br></span>";
				autoScroll();
				return;
			}

			// Normal item used
			else {
				fullInv = false;
				itemSlot3 = Items[0];
				document.getElementById("inventory3").innerHTML = Items[0][0];
				inventory3.disabled = true;
			}
			break;
	}

	switch (itemUsed[2]) {
		case "Null":
			itemNull();
			break;

		case "Heal":
			itemHeal();
			break;

		case "DMG":
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

	autoScroll();
}

function itemHeal() {
	if (currentPlayerHP == maxPlayerHP) {
		return;
	}
	else {
		if (itemUsed[0] == "Juicy Nectar") {
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
		document.getElementById("actionLog").innerHTML += '<span id="' + actionLine + '">' + "You used the <strong>" + itemUsed[0] + "</strong> and inflicted <strong>" + itemUsed[3] + "DMG!</strong><br></span>";
	}

	// Check for HP in case of Overkill/Unhurt
	if (currentEnemyHP <= 0) {
		disableAll();
		document.getElementById("enemyHP").innerHTML = "<strong>" + currentEnemyMinHP + "/" + currentEnemyMaxHP + "</strong>";

		setTimeout(() => { enemyDefeat(); }, 2000 / quickerTest);
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

		console.log("Special Timer not active");
	}
}


// =============================
// ACTIONLOG AUTOSCROLL
// =============================

function autoScroll() {
	if (actionLine >= maxLines) {
		const firstLine = document.getElementById(deleteLine);
		firstLine.remove();
		deleteLine++;

		// PLACEHOLDER DEBUG CONSOLE LOG
		console.log("Earliest line deleted. Onto line", deleteLine);
	}
}

// =============================
// DEBUG MODE
// =============================

if (gameOn) {
	
	if (debugmode) {

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
}


// =============================
// CUSTOM ALERT (Style in CSS)
// =============================

function customAlert(txt) {
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

	oneBtn = alertObj.appendChild(d.createElement("div"));
	oneBtn.id = "oneBtn";
	oneBtn.style.display = "flex";
	oneBtn.style.marginBottom = "0.35em";

	btn = d.getElementById("oneBtn").appendChild(d.createElement("a"));
	btn.id = "closeBtn";
	btn.appendChild(d.createTextNode(alertButtonText));
	btn.focus();

	btn.onclick = function () {
		removeCustomAlert();
		return false;
	}
}

function customAlertChoice(txt) {
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

	twoBtns = alertObj.appendChild(d.createElement("div"));
	twoBtns.id = "twoBtns";
	twoBtns.style.display = "flex";
	twoBtns.style.marginLeft = "2em";
	twoBtns.style.marginRight = "2em";
	twoBtns.style.marginBottom = "0.35em";
	
	btn1 = d.getElementById("twoBtns").appendChild(d.createElement("a"));
	// Set btn1.id in randomizeEnemy();
	btn1.appendChild(d.createTextNode(alertButton1Text));
	btn1.focus();
	
	btn2 = d.getElementById("twoBtns").appendChild(d.createElement("a"));
	// Set btn2.id in randomizeEnemy();
	btn2.appendChild(d.createTextNode(alertButton2Text));
	btn2.focus();

	// Set btn1.onclick and btn2.onclick functions in randomizeEnemy();
}

function removeCustomAlert() {
	document.getElementsByTagName("body")[0].removeChild(document.getElementById("hideAway"));
}