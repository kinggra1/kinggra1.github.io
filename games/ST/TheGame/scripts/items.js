function Item(x, y, type) {
	this.xpos = x*Tile.xsize;
	this.ypos = y*Tile.ysize;
	this.pos = y*Room.xnum + x;
	this.type = type;
	this.image;

	if (this.type == Item.type.KEY) {
		this.image = key_img;
	}
	else if (this.type == Item.type.CHEST) {
		this.image = chest_img;
	}
	else if (this.type == Item.type.GEM) {
		this.image = gem_img;
	}
	else if (this.type == Item.type.HEART) {
		this.image = heart_img;
	}
	else if (this.type == Item.type.POTION) {
		this.image = potion_img;
	}
	else if (this.type == Item.type.GIRL) { // girl is an item. whoops, objectifying women. literally.
		this.image = girl_img
	}
}

Item.prototype.draw = function() {
	context.drawImage(this.image, this.xpos, this.ypos);
}

Item.type = {
	KEY : 0,
	GEM : 2,
	CHEST : 3,
	HEART : 4,
	POTION : 5,
};

