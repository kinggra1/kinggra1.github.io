function Enemy(x, y) {
	this.x = x;
	this.y = y;
	this.xpos = x*Tile.xsize;
	this.ypos = y*Tile.ysize;
	this.pos = y*Room.xnum + x;
	this.dest = y*Room.xnum + x;
	this.rate = 3;
	this.dir = "L";
	this.health = 1;
	this.moving = false;
} 

Enemy.prototype.setPos = function(x,y) {
	this.pos = y*Room.xnum + x;
}

Enemy.prototype.setPos = function(pos) {
	this.pos = pos;
}

Enemy.prototype.updatePos = function() {

	// do player damage check before moving this enemy
	if (this.pos == player.pos || this.pos == player.dest) {
		player.hit(1);
	}

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
}

Enemy.prototype.moveForward = function() {
	if (this.dir === "U") {
		this.y -= 1;
	}
	if (this.dir === "L") {
		this.x -= 1;
	}
	if (this.dir === "D") {
		this.y += 1;
	}
	if (this.dir === "R") {
		this.x += 1;
	}
	this.dest = this.facingTileNum();
}

Enemy.prototype.facingTileNum = function() {
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
Enemy.prototype.hit = function(damage) {
	hit_sound.play();
	this.health -= damage;
}

Enemy.prototype.isMoving = function() { return true; }

Enemy.prototype.draw = function() {
	context.drawImage(this.image, this.xpos, this.ypos);
}

Enemy.prototype.canGo = function(direction) {
	//alert(player.room.tiles[this.pos + 1].canOccupy());
	if (this.dir === "U") {
		return player.room.tiles[this.pos - Room.xnum].canOccupy();
	}
	if (this.dir === "L") {
		return player.room.tiles[this.pos - 1].canOccupy();
	}
	if (this.dir === "D") {
		return player.room.tiles[this.pos + Room.xnum].canOccupy();
	}
	if (this.dir === "R") {
		return player.room.tiles[this.pos + 1].canOccupy();
	}
}


/******************************SNAKE********************************/
function Snake(x, y, dir) {
	this.enemy = new Enemy(x, y);
	this.enemy.dir = dir;

	if (dir === "L") {
		this.enemy.image = snake_l_img;
	}
	if (dir === "R") {
		this.enemy.image = snake_r_img;
	}
}

Snake.prototype.hit = function(damage) { this.enemy.hit(damage); }
Snake.prototype.draw = function() { this.enemy.draw(); }
Snake.prototype.canGo = function() { return this.enemy.canGo(); }
Snake.prototype.isMoving = function() { return this.enemy.moving; }
Snake.prototype.getPos = function() { return this.enemy.pos; }
Snake.prototype.getDest = function() { return this.enemy.dest; }

Snake.prototype.updatePos = function() { 
	this.enemy.updatePos();
	if (this.enemy.movenum >= Tile.xsize/this.enemy.rate) {  // this line removes universal tile sizing, must be sqaure
		this.enemy.moving = false;
		this.enemy.movenum = 0;
		this.enemy.pos = this.enemy.dest;
	}
}

//Snake.prototype = Object.create(Enemy.prototype);


Snake.prototype.move = function() {
	if (! this.enemy.moving ) {
		if(this.canGo()) {
			this.enemy.moving = true;
			this.enemy.dest = this.enemy.facingTileNum();
			this.enemy.movenum = 0;
		}

		else {
			if (this.enemy.dir === "L") {
				this.enemy.dir = "R";
				this.enemy.image = snake_r_img;
			}
			else { 
				this.enemy.dir = "L";
				this.enemy.image = snake_l_img; 
			}
		}
	}
}





/******************************SASSIDGE NIGHT*******************************/
function Knight(x, y, dir) {
	this.enemy = new Enemy(x, y);
	this.enemy.dir = dir;
	this.enemy.rate = (Math.random()*.5) + 1.5;
	this.enemy.health = 3;

	if (dir === "L") {
		this.enemy.image = sausageknight_l_img;
	}
	if (dir === "R") {
		this.enemy.image = sausageknight_r_img;
	}
	if (dir === "U") {
		this.enemy.image = sausageknight_u_img;
	}
	if (dir === "D") {
		this.enemy.image = sausageknight_d_img;
	}
}

Knight.prototype.hit = function(damage) { this.enemy.hit(damage); }
Knight.prototype.draw = function() { this.enemy.draw(); }
Knight.prototype.canGo = function() { return this.enemy.canGo(); }
Knight.prototype.isMoving = function() { return this.enemy.moving; }
Knight.prototype.getPos = function() { return this.enemy.pos; }
Knight.prototype.getDest = function() { return this.enemy.dest; }

Knight.prototype.updatePos = function() { 
	this.enemy.updatePos();
	if (this.enemy.movenum >= Tile.xsize/this.enemy.rate) {  // this line removes universal tile sizing, must be sqaure
		this.enemy.moving = false;
		this.enemy.movenum = 0;
		this.enemy.pos = this.enemy.dest;
	}
}


Knight.prototype.move = function() {
	if (! this.enemy.moving ) {

		var x = (player.pos % Room.xnum);
		var y = ((player.pos - player.pos%Room.xnum) / Room.xnum);
		if(this.enemy.y < y) {
			this.enemy.dir = "D";
			this.enemy.image = sausageknight_d_img;
		}
		else if (this.enemy.y > y) {
			this.enemy.dir = "U";
			this.enemy.image = sausageknight_u_img;
		}
		else {
			if (this.enemy.x < x) {
				this.enemy.dir = "R";
				this.enemy.image = sausageknight_r_img;
			}
			else if (this.enemy.x > x) {
				this.enemy.dir = "L";
				this.enemy.image = sausageknight_l_img;
			}
		}
		if(this.canGo()) {
			this.enemy.moving = true;
			this.enemy.moveForward();
			this.enemy.movenum = 0;
		}
	}
}





/***********************************GHOST********************************/
function Ghost(x, y, dir) {
	this.enemy = new Enemy(x, y);
	this.enemy.dir = dir;

	if (dir === "D") {
		this.enemy.image = ghost_d_img;
	}
	if (dir === "U") {
		this.enemy.image = ghost_u_img;
	}
}

Ghost.prototype.hit = function(damage) { }
Ghost.prototype.draw = function() { this.enemy.draw(); }
Ghost.prototype.canGo = function() { return this.enemy.canGo(); }
Ghost.prototype.isMoving = function() { return this.enemy.moving; }
Ghost.prototype.getPos = function() { return this.enemy.pos; }
Ghost.prototype.getDest = function() { return this.enemy.dest; }

Ghost.prototype.updatePos = function() { 
	this.enemy.updatePos();
	if (this.enemy.movenum >= Tile.xsize/this.enemy.rate) {  // this line removes universal tile sizing, must be sqaure
		this.enemy.moving = false;
		this.enemy.movenum = 0;
		this.enemy.pos = this.enemy.dest;
	}
}

//Ghost.prototype = Object.create(Enemy.prototype);


Ghost.prototype.move = function() {
	if (! this.enemy.moving ) {
		if(this.canGo()) {
			this.enemy.moving = true;
			this.enemy.dest = this.enemy.facingTileNum();
			this.enemy.movenum = 0;
		}

		else {
			if (this.enemy.dir === "D") {
				this.enemy.dir = "U";
				this.enemy.image = ghost_u_img;
			}
			else { 
				this.enemy.dir = "D";
				this.enemy.image = ghost_d_img; 
			}
		}
	}
}