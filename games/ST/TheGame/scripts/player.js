function Player() { 
	this.rate = 2.78;
	this.health = 1;
	this.maxHealth = 2;
	this.pos = Room.xnum*Room.ynum / 2 - 0.5;
	this.x = 7;
	this.y = 5;
	this.xpos = (Room.xnum/2 - 0.5)*Tile.xsize;  // for drawing
	this.ypos = (Room.ynum/2 - 0.5)*Tile.ysize;  // for drawing
	this.dest = Room.xnum*Room.ynum / 2 - 0.5;
	this.roomNum = 28;
	this.room = rooms[this.roomNum]; // starting room
	this.image = player_r_img;
	this.dir = "U";
	this.invincible = false;
	this.moving = false;
	this.attacking = false;
	this.movenum;

	rooms[this.roomNum].visited = true;
}

Player.prototype.reset = function() {
	this.health = 1;
	this.maxHealth = 2;
	this.roomNum = 28;
	this.room = rooms[this.roomNum];
	this.dir = "U";
	this.invincible = false;
	this.moving = false;
	this.attacking = false;
	this.x = 7;
	this.y = 5;
	this.pos = Room.xnum*Room.ynum / 2 - 0.5;
	this.xpos = (Room.xnum/2 - 0.5)*Tile.xsize;  // for drawing
	this.ypos = (Room.ynum/2 - 0.5)*Tile.ysize;  // for drawing
	this.dest = Room.xnum*Room.ynum / 2 - 0.5;

	rooms[this.roomNum].visited = true;
}

Player.prototype.draw = function() {

	// this can probably be moved out of draw into an update, but nothing fitting exists at the moment
	if (++this.invincibleCount == 100) {
		this.invincible = false;
	}

	if (! this.attacking) {
		switch (this.dir) {
			case "L":
				this.image = player_l_img;
				break;
			case "R":
				this.image = player_r_img;
				break;
			case "D":
				this.image = player_d_img;
				break;
			case "U":
				this.image = player_u_img;
				break;
		}
	}
	context.drawImage(this.image, this.xpos, this.ypos);
	inventory.draw();
}

Player.prototype.currentRoom = function() {
	return this.room;
}

Player.prototype.moveRoom = function(room) {
	this.room = rooms[room];
	if (rooms[room].visited == false)
	{
		rooms[room].visited = true;
	}
}

Player.prototype.isMoving = function() {
	return this.moving;
}

Player.prototype.face = function(newDir) {
	if (this.moving === false) {
			this.dir = newDir;
		}
}

Player.prototype.facingTileNum = function() {
	if (this.dir === "U") {
		return this.pos - Room.xnum;
	}
	if (this.dir === "L") {
		return this.pos - 1;
	}
	if (this.dir === "D") {
		return this.pos + Room.xnum;
	}
	if (this.dir === "R") {
		return this.pos + 1;
	}
}
Player.prototype.updatePos = function() {

	if (this.moving) {
		if (this.dir === "U") {
			this.ypos -= this.rate;
		}
		else if (this.dir === "L") {
			this.xpos -= this.rate;
		}
		else if (this.dir === "D") {
			this.ypos += this.rate;
		}
		else if (this.dir === "R") {
			this.xpos += this.rate;
		}
		this.movenum = this.movenum + 1;
		if (this.movenum >= Tile.xsize/this.rate) {  // this line removes universal tile sizing, must be sqaure
			this.moving = false;
			this.movenum = 0;
			this.pos = this.dest;
		}
	}
}

Player.prototype.setPosDir = function(direction) {
	if (this.dir === "U") {
		this.dest = this.pos - Room.xnum;
	}
	if (this.dir === "L") {
		this.dest = this.pos - 1;
	}
	if (this.dir === "D") {
		this.dest = this.pos + Room.xnum;
	}
	if (this.dir === "R") {
		this.dest = this.pos + 1;
	}
}

Player.prototype.setPosition = function(pos) {
	player.pos = pos;
	player.x = 
	this.xpos = (this.pos % Room.xnum) * Tile.xsize;
	this.ypos = ((this.pos - this.pos%Room.xnum) / Room.xnum) * Tile.ysize;
}

Player.prototype.canGo = function(direction) {
	if (this.dir === "U") {
		return this.room.tiles[this.pos - Room.xnum].canOccupy()
	}
	if (this.dir === "L") {
		return this.room.tiles[this.pos - 1].canOccupy()
	}
	if (this.dir === "D") {
		return this.room.tiles[this.pos + Room.xnum].canOccupy()
	}
	if (this.dir === "R") {
		return this.room.tiles[this.pos + 1].canOccupy()
	}
}

Player.prototype.moveForward = function() {
	this.moving = true;
	this.dest = this.facingTileNum();
	this.movenum = 0;

	if (this.room.tiles[this.dest].type == Tile.type.LOCKEDDOOR) {
		if (inventory.key) {
			unlock_sound.play();
			inventory.key = false;
			this.room.unlockDoor(this.dest);
		}
		else {
			this.dest = this.pos;
			this.moving = false;
		}
	}

}
Player.prototype.move = function(newDir) {

	if (this.moving === false && this.attacking == false) {
		this.face(newDir);
		var facingTile = this.room.tiles[this.facingTileNum()];

		if (facingTile.canOccupy()) {
			this.moveForward();
		}
	}
}

Player.prototype.animate = function(imageset) {
	this.attacking = true;
	this.image = imageset;
	//alert("animating");
	var me = this;
	setTimeout(function(){me.postAnimate()}, 100);
}

Player.prototype.postAnimate = function() {
	if (this.dir === "U") {
		this.ypos += Tile.ysize;
	}
	if (this.dir === "L") {
		this.xpos += Tile.xsize;
	}
	this.attacking = false;
}

Player.prototype.hit = function(damage) {
	if (! this.invincible) {
		hurt_sound.play();
		this.health -= damage;
		this.invincible = true;
		this.invincibleCount = 0;
	}
}

Player.prototype.attack = function() {
	if (! this.attacking) {
		swing_sound.load();
		swing_sound.play();
		if (this.dir === "U") {
			this.ypos -= Tile.ysize;
			this.animate(player_u_ani);
		}
		if (this.dir === "L") {
			this.xpos -= Tile.xsize;
			this.animate(player_l_ani);
		}
		if (this.dir === "D") {
			this.animate(player_d_ani);
		}
		if (this.dir === "R") {
			this.animate(player_r_ani);
		}
		attackTile = this.facingTileNum();

		for (var n = 0; n < this.room.numEnemies; n++) {
			if (this.room.enemies[n].getPos() == attackTile || this.room.enemies[n].getDest() == attackTile) {
				this.room.enemies[n].hit(1);
			}
		}
	}

}

var player = new Player();