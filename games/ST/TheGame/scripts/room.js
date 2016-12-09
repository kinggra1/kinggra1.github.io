Room.xnum = 15;
Room.ynum = 11;

/* Tile array indices for the corners and centered top/left/bottom/right areas of room */
Room.tl = 0; 										// top left
Room.tr = Room.xnum-1; 								// top right
Room.bl = Room.xnum*(Room.ynum-1);              	// bottom left
Room.br = Room.xnum*(Room.ynum-1) + Room.xnum - 1;	// bottom right
Room.tc = Room.xnum/2 - 0.5							// top center
Room.lc = (Room.ynum/2 - 0.5)*Room.xnum				// left center
Room.bc = (Room.ynum-1)*Room.xnum + (Room.xnum/2 -0.5) // bottom center
Room.rc = (Room.ynum/2 + 0.5)*Room.xnum - 1 		// right center

function Room() {

	this.enemies = new Array();
	this.items = new Array();
	this.numEnemies = 0;
	this.numItems = 0;
	this.tiles = new Array();
	this.visited = false;
	for (var y = 0; y < Room.ynum; y++) {
		for (var x = 0; x < Room.xnum; x++) {
			this.tiles[x + Room.xnum*y] = new Tile(x, y, 0);
		}
	}
}

Room.prototype.getNumEnemies = function() { return this.numEnemies; }

Room.prototype.addEnemy = function(enemy) {
	this.enemies[this.numEnemies++] = enemy;
}

Room.prototype.addItem = function(item) {
	this.items[this.numItems++] = item;
}

Room.prototype.addBlock = function(x, y) {
	this.tiles[x + Room.xnum*y].setImage(block_img).setType(Tile.type.BLOCK);
}

Room.prototype.addBlocks = function(x, y, w, h) {
	for (var i = 0; i < w; i++) {
		for (var j = 0; j < h; j++) {
			this.tiles[(x+i) + Room.xnum*(y+j)].setImage(block_img).setType(Tile.type.BLOCK);
		}
	}
}

Room.prototype.draw = function() {
	for (var y = 0; y < Room.ynum; y++) {
		for (var x = 0; x < Room.xnum; x++) {
			this.tiles[x + Room.xnum*y].draw();
		}
	}
	
	for (var x = 0; x < this.numItems; x++) {
		this.items[x].draw();
	}

	for (var x = 0; x < this.numEnemies; x++) {
		this.enemies[x].draw();
	}
}

Room.prototype.setFloor = function() {

	for (var i = 0; i < Room.xnum*Room.ynum; i++) {
		var t = this.tiles[i];
		t.setImage(dirt_img).setType(Tile.type.FLOOR);
	}
}

Room.prototype.setWalls = function() {

	// top and bottom walls
	for (var x = 1; x < Room.xnum-1; x++) {
		var t = this.tiles[x];
		t.setImage(stonewall_t_img).setType(Tile.type.WALL); // top
		t = this.tiles[Room.bl + x];
		t.setImage(stonewall_b_img).setType(Tile.type.WALL); // bottom
	}

	// left and right walls
	for (var y = 1; y < Room.ynum-1; y++) {
		var t = this.tiles[y*Room.xnum];
		t.setImage(stonewall_l_img).setType(Tile.type.WALL); // left
		t = this.tiles[y*Room.xnum + Room.xnum-1];
		t.setImage(stonewall_r_img).setType(Tile.type.WALL); // right
	}

	// corners
	this.tiles[Room.tl].setImage(stonewall_tl_img).setType(Tile.type.WALL); // top left
	this.tiles[Room.tr].setImage(stonewall_tr_img).setType(Tile.type.WALL); // top right
	this.tiles[Room.bl].setImage(stonewall_bl_img).setType(Tile.type.WALL); //bottom left
	this.tiles[Room.br].setImage(stonewall_br_img).setType(Tile.type.WALL); // bottom right
}

Room.prototype.setDoor = function(image, loc) {
	var t;
	if (loc === 'T') {
		t = this.tiles[Room.tc];
	}
	else if (loc === 'L') {
		t = this.tiles[Room.lc];
	}
	else if (loc === 'B') {
		t = this.tiles[Room.bc];
	}
	else if (loc === 'R') {
		t = this.tiles[Room.rc];
	}
	t.setImage(image).setType(Tile.type.DOOR);
}

Room.prototype.unlockDoor = function(loc) {
	if (loc === Room.tc) {
		this.tiles[Room.tc].setImage(stonedoor_t_img).setType(Tile.type.DOOR);
	}
	else if (loc === Room.lc) {
		this.tiles[Room.lc].setImage(stonedoor_l_img).setType(Tile.type.DOOR);
	}
	else if (loc === Room.bc) {
		this.tiles[Room.bc].setImage(stonedoor_b_img).setType(Tile.type.DOOR);
	}
	else if (loc === Room.rc) {
		this.tiles[Room.rc].setImage(stonedoor_r_img).setType(Tile.type.DOOR);
	}
}

Room.prototype.setLockedDoor = function(image, loc) {
	var t;
	if (loc == 'T') {
		t = this.tiles[Room.tc];
	}
	else if (loc === 'L') {
		t = this.tiles[Room.lc];
	}
	else if (loc === 'B') {
		t = this.tiles[Room.bc];
	}
	else if (loc === 'R') {
		t = this.tiles[Room.rc];
	}
	t.setImage(image).setType(Tile.type.LOCKEDDOOR);
}
