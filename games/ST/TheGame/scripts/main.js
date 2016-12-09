//var player = new Player(); // this is done at the end of player's file now (for enemy access)
var context;
var timer;

var starting = true;
var gameover = false;
var victory = false;


function handleKeyDown(event) {
	var key = event.keyCode;
	if (victory || gameover || starting) {
		if (key == KEY_ENTER) {
			starting = false;
			gameover = false;
			victory = false;
			music.load();
			music.play();
			startover();
		}
	}

	else {
		if (key == KEY_W || key == KEY_A || key == KEY_S || key == KEY_D) {
			keys[event.keyCode] = true;
		}
		if (key == KEY_J) {
			player.attack();
		}
	}
}

function handleKeyUp(event) {
	var key = event.keyCode;
	if (key == KEY_W || key == KEY_A || key == KEY_S || key == KEY_D || key == KEY_J) {
		keys[event.keyCode] = false;
	}
}



function imageWait() {
	while (imgCount < imgTotal) {}
}
function startover() {

	//context.clearRect(0, 0, canvas.width, canvas.height);

	context.fillStyle = "#000000"
	context.fillRect(0, 0, canvas.width, 1);
	context.fillRect(0, 0, 1, canvas.height);
 	context.fillRect(canvas.width-1, 0, 1, canvas.height);
	context.fillRect(0, canvas.height-1, canvas.width, 1);

	keys[KEY_W] = false;
	keys[KEY_A] = false;
	keys[KEY_S] = false;
	keys[KEY_D] = false;



	setLevelDat();
	setEnemyDat();
	player.reset();
	inventory.reset();
	ui.reset();
	player.currentRoom().draw();
	player.draw();

	music.play();


}


function drawGrid() {
	for (var x = 0; x < canvas.width; x+= canvas.width/17) {
		context.fillRect(x, 0, 1, canvas.height);
	}
	for (var y = 0; y < canvas.height; y+= canvas.height/13) {
		context.fillRect(0, y, canvas.width, 1);
	}
}

function draw() {
	context.beginPath();
	context.clearRect(0, 0, canvas.width, canvas.height);
	player.currentRoom().draw();
	ui.draw();
	player.draw();
}

function gameLoop() {
	if (starting) {
		startScreen();
	}
	else if (gameover) {
		music.pause();
		endScreen();
	}
	else if (victory) {
		music.pause();
		winScreen();
	}
	else { aliveLoop(); }
}

function aliveLoop() {
	// check player health to "end" game
	if (player.health <= 0) {
		gameover = true;

		context.clearRect(0, 0, canvas.width, canvas.height);
		endScreen();
	}

	if (music.ended) {
		music.play();
	}

	// if the player has gone through a door, go to the new room
	switch (player.pos) {
		case Room.tc:
			player.moveRoom(player.roomNum = player.roomNum - rooms.columns);
			player.setPosition(Room.bc - Room.xnum);
			if (player.attacking) { player.ypos -= Tile.xsize; }
			opendoor_sound.play();
			break;
		case Room.lc:
			player.moveRoom(player.roomNum = player.roomNum - 1);			
			player.setPosition(Room.rc - 1);
			if (player.attackingg) { player.xpos -= Tile.xsize; }
			opendoor_sound.play();
			break;
		case Room.bc:
			player.moveRoom(player.roomNum = player.roomNum + rooms.columns);
			player.setPosition(Room.tc + Room.xnum);
			opendoor_sound.play();
			break;
		case Room.rc:
			player.moveRoom(player.roomNum = player.roomNum + 1);
			player.setPosition(Room.lc + 1);
			opendoor_sound.play();
			break;

		default:
			break;

	}


	// move player in the direction of currently held key(s) (precidence specified here)
	if (keys[KEY_W]) { player.move("U"); }
	if (keys[KEY_A]) { player.move("L"); }
	if (keys[KEY_S]) { player.move("D"); }
	if (keys[KEY_D]) { player.move("R"); }



	player.updatePos();


	// remove/update enemies
	for (var x = 0; x < player.room.numEnemies; x++)
	{
		if (player.room.enemies[x].enemy.health <= 0) {
			player.room.enemies.splice(x,1);
			x--;
			player.room.numEnemies--;
			ui.score++;
		}
		else {

			if (player.room.enemies[x].isMoving()) {
				player.room.enemies[x].updatePos();
			}
			else { player.room.enemies[x].move(); }
		}
	}

	// item check
	for (var x = 0; x < player.room.numItems; x++) {
		if (player.room.items[x].pos == player.pos) {
			switch(player.room.items[x].type) {
				case (Item.type.KEY):
					key_sound.play();
					inventory.key = true;
					break;
				case (Item.type.GEM):
					gem_sound.play();
					ui.score += 10;
					break;
				case (Item.type.CHEST):
					chest_sound.play();
					ui.score += 50;
					break;
				case (Item.type.HEART):
					heart_sound.play();
					player.maxHealth++;
					player.health = player.maxHealth;
					break;
				case (Item.type.POTION):
					potion_sound.play();
					if(player.health < player.maxHealth) { player.health++; }
					break;
				case (Item.type.GIRL):
					victory = true;
					music.pause();
				default:
					break;
			}
			// remove the item
			player.room.items.splice(x,1);
			x--;
			player.room.numItems--;
			//player.room.tiles[player.pos].setImage(dirt_img).setType(Tile.type.FLOOR);
		}
	}

	draw();
}

function onLoad() {

	window.addEventListener("keydown", handleKeyDown, false);
	window.addEventListener("keyup", handleKeyUp, false);



	imageWait();

	/*
	room.setFloor();
	room.setWalls();
	room.setDoor(stonedoor_t_img, 'T');
	room.setDoor(stonedoor_l_img, 'L');
	room.setDoor(stonedoor_b_img, 'B');
	room.setDoor(stonedoor_r_img, 'R');
	room.draw();
	*/
	//startover();
	timer = setInterval(gameLoop, 10);
	return timer;
}


function startScreen() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.drawImage(title_img, 0, 0);
}

function endScreen() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.drawImage(end_img, 0, 0);
	context.font="40px Verdana";
	context.fillStyle = "#FFFFFF";
	context.fillText("Final score was: " + ui.score, 200, 610);
	context.fillStyle = "#000000";
}

function winScreen() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.drawImage(win_img, 0, 0);
	context.font="40px Verdana";
	context.fillStyle = "#FFFFFF";
	context.fillText(ui.score, 700, 540);
	context.fillStyle = "#000000";
}















