context.strokeStyle = "#FFFFFF";
context.lineWidth = 1;

function UI() {
	this.score = 50;
}

UI.prototype.reset = function() {
	this.score = 0;
}

UI.prototype.draw = function() {
	context.fillRect(750, 0, 100, 650);
	context.fillRect(0, 550, 750, 100);


	// draw health
	for (var x = 0; x < player.maxHealth; x++) {
		if (x < player.health) {
			context.drawImage(heart_full, 300 + 60*x, 575);
		}
		else { context.drawImage(heart_empty, 300 + 60*x, 575); }
	}

	context.font="30px Verdana";
	context.fillStyle = "#FFFFFF";
	context.fillText("Score: " + this.score, 50, 610);
	context.fillStyle = "#000000";



	// MiniMap
	context.fillStyle = "#FFFFFF";
	context.fillRect(640, 560, 112, 80);
	for (var n = 0; n < rooms.rows*rooms.columns; n++) {
		var room = rooms[n];

		// pixel coords of t/l corner of room on minimap
		var x = 641 + (n % rooms.columns) * 16;
		var y = 561 + (n - n%rooms.columns) / rooms.columns * 16;

		// select room color based on status

		if (room.visited) {

			// draw doors if we have visited this room
			context.fillStyle = "#FF2222";
			if (room.tiles[Room.tc].type == Tile.type.DOOR) {
				context.fillRect(x+5, y-2, 4, 2);
			}
			if (room.tiles[Room.lc].type == Tile.type.DOOR) {
				context.fillRect(x-2, y+5, 2, 4);
			}
			if (room.tiles[Room.bc].type == Tile.type.DOOR) {
				context.fillRect(x+5, y+14, 4, 2);
			}
			if (room.tiles[Room.rc].type == Tile.type.DOOR) {
				context.fillRect(x+14, y+5, 2, 4);
			}

			context.fillStyle = "#000000";
			if (room.tiles[Room.tc].type == Tile.type.LOCKEDDOOR) {
				context.fillRect(x+5, y-2, 4, 2);
			}
			if (room.tiles[Room.lc].type == Tile.type.LOCKEDDOOR) {
				context.fillRect(x-2, y+5, 2, 4);
			}
			if (room.tiles[Room.bc].type == Tile.type.LOCKEDDOOR) {
				context.fillRect(x+5, y+14, 4, 2);
			}
			if (room.tiles[Room.rc].type == Tile.type.LOCKEDDOOR) {
				context.fillRect(x+14, y+5, 2, 4);
			}
			// set to the "room has been visited" color (grey)
			context.fillStyle = "#AAAAAA";
		}
		else {
			context.fillStyle = "#000000"; // color if we have not visited this room
		}

		if (n == player.roomNum) {
			context.fillStyle = "#00FF00"; // highest priority color, current room
		}

		// draw room status
		context.fillRect(x, y, 14, 14);

	} 
	context.fillStyle = "#000000";

}

UI.prototype.addPoints = function(num) {
	this.score += num;
}

UI.prototype.update = function() {
	this.health = player.health;
}

var ui = new UI();

