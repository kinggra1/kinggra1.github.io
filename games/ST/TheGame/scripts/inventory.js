function Inventory() {
	this.key = false;
}

Inventory.prototype.reset = function() {
	this.key = false;
}

Inventory.prototype.draw = function() {

	context.font="14px Verdana";
	context.fillStyle = "#FFFFFF";
	context.fillText("Items:", 775, 50);

	context.strokeWidth = 2
	context.strokeStyle = "white";
	context.rect(774, 60, 52, 202);
	context.stroke();

	context.fillStyle = "#000000";
	
	if (this.key) {
		context.drawImage(key_img, 775, 61);
	}
}

var inventory = new Inventory();