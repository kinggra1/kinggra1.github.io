Tile.xsize = 50;
Tile.ysize = 50;

Tile.type = {
	FLOOR : 0,
	WALL : 1,
	DOOR : 2,
	LOCKEDDOOR : 3,
	CHEST : 4,
	BLOCK : 5
};

function Tile(x, y, type) {
	this.xpos = x*Tile.xsize;
	this.ypos = y*Tile.ysize;
	this.image = new Image();
	this.type = type;
}

Tile.prototype.setType = function(type) {
	this.type = type;
	return this;
}

Tile.prototype.setImage = function(image) {
	this.image = image;
	return this;
}

Tile.prototype.draw = function() {
	context.drawImage(this.image, this.xpos, this.ypos);
	return this;
}

Tile.prototype.canOccupy = function() {
	//update for new block types
	return (this.type != Tile.type.WALL && this.type != Tile.type.CHEST && this.type != Tile.type.BLOCK);
}