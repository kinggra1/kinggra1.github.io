var rooms = new Array(); 
rooms.rows = 5;
rooms.columns = 7;
						  	 	// 0  1  2  3  4  5  6 
function setLevelDat() {		// 7  8  9  10 11 12 13 
								// 14 15 16 17 18 19 20 
								// 21 22 23 24 25 26 27 
								// 28 29 30 31 32 33 34 



// ROW 1
// 1
	var room0 = new Room();
	room0.setFloor();
	room0.setWalls();
	room0.setDoor(stonedoor_r_img, "R");
	room0.setDoor(stonedoor_b_img, "B");
	rooms[0] = room0;
//2
	var room1 = new Room();
	room1.setFloor();
	room1.setWalls();
	room1.setDoor(stonedoor_l_img, "L");
	room1.setDoor(stonedoor_b_img, "B");
	room1.setDoor(stonedoor_r_img, "R");
	room1.addBlocks(2, 2, 11, 1);
	room1.addBlocks(1, 3, 2, 1);
	room1.addItem(new Item(1, 2, Item.type.GEM));
	rooms[1] = room1;
//3
	var room2 = new Room();
	room2.setFloor();
	room2.setWalls();
	room2.setDoor(stonedoor_l_img, "L");
	room2.setDoor(stonedoor_b_img, "B");
	room2.setLockedDoor(lockedstonedoor_r_img, "R");
	rooms[2] = room2;
//4
	var room3 = new Room();
	room3.setFloor();
	room3.setWalls();
	room3.setDoor(stonedoor_l_img, "L");
	room3.setDoor(stonedoor_b_img, "B");
	room3.setDoor(stonedoor_r_img, "R");
	rooms[3] = room3;
//5
	var room4 = new Room();
	room4.setFloor();
	room4.setWalls();
	room4.setDoor(stonedoor_l_img, "L");
	room4.setDoor(stonedoor_r_img, "R");
	room4.addBlock(5, 3);
	room4.addBlock(9, 3);
	room4.addBlock(5, 7);
	room4.addBlock(9, 7);
	rooms[4] = room4;
//6
	var room5 = new Room();
	room5.setFloor();
	room5.setWalls();
	room5.setDoor(stonedoor_l_img, "L");
	room5.setDoor(stonedoor_b_img, "B");
	room5.setDoor
	rooms[5] = room5;
//7
	var room6 = new Room();
	room6.setFloor();
	room6.setWalls();
	room6.setDoor(stonedoor_b_img, "B");
	room6.addItem(new Item(7, 5, Item.type.GIRL)); // officially objectifying a woman
	rooms[6] = room6;




// Row 2
//1
	var room7 = new Room();
	room7.setFloor();
	room7.setWalls();
	room7.setDoor(stonedoor_b_img, "B");
	room7.setDoor(stonedoor_r_img, "R");
	room7.setDoor(stonedoor_t_img, "T");
	room7.addItem(new Item(2, 2, Item.type.GEM));
	room7.addBlocks(1, 4, 13, 1);
	rooms[7] = room7;
//2
	var room8 = new Room();
	room8.setFloor();
	room8.setWalls();
	room8.setDoor(stonedoor_l_img, "L");
	room8.setDoor(stonedoor_t_img, "T");
	room8.addBlock(5, 1);
	room8.addBlock(9, 1);
	room8.addItem(new Item(7, 5, Item.type.HEART));
	rooms[8] = room8;
//3
	var room9 = new Room();
	room9.setFloor();
	room9.setWalls();
	room9.setDoor(stonedoor_t_img, "T");
	room9.setDoor(stonedoor_b_img, "B");
	rooms[9] = room9;
//4
	var room10 = new Room();
	room10.setFloor();
	room10.setWalls();
	room10.setDoor(stonedoor_t_img, "T");
	room10.setDoor(stonedoor_r_img, "R");
	rooms[10] = room10;
//5
	var room11 = new Room();
	room11.setFloor();
	room11.setWalls();
	room11.setDoor(stonedoor_l_img, "L");
	room11.addBlocks(6, 4, 3, 1);
	room11.addBlock(6, 5);
	room11.addBlocks(6, 6, 3, 1);
	room11.addItem(new Item(7, 5, Item.type.CHEST));
	rooms[11] = room11;
//6
	var room12 = new Room();
	room12.setFloor();
	room12.setWalls();
	room12.setDoor(stonedoor_t_img, "T");
	room12.setDoor(stonedoor_b_img, "B");
	rooms[12] = room12;
//7
	var room13 = new Room();
	room13.setFloor();
	room13.setWalls();
	room13.setDoor(stonedoor_t_img, "T");
	room13.setDoor(stonedoor_b_img, "B");
	room13.addBlocks(6, 1, 1, 9);
	room13.addBlocks(8, 1, 1, 9);
	rooms[13] = room13;




// ROW 3
//1
	var room14 = new Room();
	room14.setFloor();
	room14.setWalls();
	room14.setDoor(stonedoor_b_img, "B");
	room14.setDoor(stonedoor_r_img, "R");
	room14.setLockedDoor(lockedstonedoor_t_img, "T");
	rooms[14] = room14;
//2
	var room15 = new Room();
	room15.setFloor();
	room15.setWalls();
	room15.setDoor(stonedoor_l_img, "L");
	room15.addItem(new Item(7, 5, Item.type.KEY));
	rooms[15] = room15;
//3
	var room16 = new Room();
	room16.setFloor();
	room16.setWalls();
	room16.setDoor(stonedoor_t_img, "T");
	room16.setDoor(stonedoor_r_img, "R");
	rooms[16] = room16;
//4
	var room17 = new Room();
	room17.setFloor();
	room17.setWalls();
	room17.setDoor(stonedoor_b_img, "B");
	room17.setDoor(stonedoor_r_img, "R");
	room17.setDoor(stonedoor_l_img, "L");
	room17.addBlock(1,1);
	room17.addBlock(2,2);
	room17.addBlock(3,3);
	room17.addBlock(4,4);
	room17.addBlock(13,9);
	room17.addBlock(12,8);
	room17.addBlock(11,7);
	room17.addBlock(10,6);
	room17.addBlocks(5, 5, 5, 1);
	room17.addItem(new Item(1,2, Item.type.POTION));
	room17.addItem(new Item(2,1, Item.type.CHEST));
	rooms[17] = room17;
//5
	var room18 = new Room();
	room18.setFloor();
	room18.setWalls();
	room18.setDoor(stonedoor_l_img, "L");
	room18.setDoor(stonedoor_b_img, "B");
	room18.addBlocks(2, 2, 12, 1);
	room18.addBlocks(1, 4, 12, 1);
	room18.addBlocks(12, 5, 1, 4);
	room18.addItem(new Item(13, 1, Item.type.HEART));
	rooms[18] = room18;
//6
	var room19 = new Room();
	room19.setFloor();
	room19.setWalls();
	room19.setDoor(stonedoor_t_img, "T");
	room19.setDoor(stonedoor_b_img, "B");
	room19.addItem(new Item(6, 9, Item.type.POTION));
	room19.addItem(new Item(8, 9, Item.type.POTION));
	rooms[19] = room19;
//7
	var room20 = new Room();
	room20.setFloor();
	room20.setWalls();
	room20.setDoor(stonedoor_t_img, "T");
	room20.setDoor(stonedoor_b_img, "B");
	rooms[20] = room20;




// ROW 4
//1
	var room21 = new Room();
	room21.setFloor();
	room21.setWalls();
	room21.setDoor(stonedoor_b_img, "B");
	room21.setDoor(stonedoor_t_img, "T");
	room21.addItem(new Item(7, 4, Item.type.POTION));
	rooms[21] = room21;
//2
	var room22 = new Room();
	room22.setFloor();
	room22.setWalls();
	room22.setDoor(stonedoor_b_img, "B");
	room22.addItem(new Item(1, 1, Item.type.GEM));
	room22.addItem(new Item(13, 1, Item.type.GEM));
	room22.addItem(new Item(7, 1, Item.type.KEY));
	room22.addItem(new Item(7, 5, Item.type.HEART));
	rooms[22] = room22;
//3
	var room23 = new Room();
	room23.setFloor();
	room23.setWalls();
	room23.setDoor(stonedoor_r_img, "R");
	room23.setDoor(stonedoor_b_img, "B");
	room23.addItem(new Item(7, 5, Item.type.KEY));
	room23.addItem(new Item(5, 5, Item.type.POTION));
	rooms[23] = room23;
//4
	var room24 = new Room();
	room24.setFloor();		
	room24.setWalls();			
	room24.setDoor(stonedoor_l_img, "L");
	room24.setDoor(stonedoor_t_img, "T");
	room24.addItem(new Item(1, 9, Item.type.POTION));
	room24.addItem(new Item(13, 9, Item.type.POTION));
	rooms[24] = room24;

//5
	var room25 = new Room();
	room25.setFloor();
	room25.setWalls();
	room25.setDoor(stonedoor_t_img, "T");
	room25.setDoor(stonedoor_r_img, "R");
	room25.addItem(new Item(7, 5, Item.type.KEY));
	rooms[25] = room25;
//6
	var room26 = new Room();
	room26.setFloor();
	room26.setWalls();
	room26.setDoor(stonedoor_l_img, "L");
	room26.setDoor(stonedoor_t_img, "T");
	room26.setLockedDoor(lockedstonedoor_r_img, "R");
	rooms[26] = room26;
//7
	var room27 = new Room();
	room27.setFloor();
	room27.setWalls();
	room27.setDoor(stonedoor_l_img, "L");
	room27.setDoor(stonedoor_b_img, "B");
	room27.setLockedDoor(lockedstonedoor_t_img, "T");
	rooms[27] = room27;





// ROW 5
//1
	var room28 = new Room();
	room28.setFloor();
	room28.setWalls();
	room28.setDoor(stonedoor_t_img, "T");

	rooms[28] = room28;
//2
	var room29 = new Room();
	room29.setFloor();
	room29.setWalls();
	room29.setLockedDoor(lockedstonedoor_t_img, "T");
	room29.setDoor(stonedoor_r_img, "R");
	rooms[29] = room29;
//3
	var room30 = new Room();
	room30.setFloor();
	room30.setWalls();
	room30.setDoor(stonedoor_l_img, "L");
	room30.setDoor(stonedoor_t_img, "T");
	rooms[30] = room30;
//4
	var room31 = new Room();
	room31.setFloor();
	room31.setWalls();
	room31.setDoor(stonedoor_r_img, "R");
	room31.addItem(new Item(7, 5, Item.type.KEY));
	rooms[31] = room31;
//5
	var room32 = new Room();
	room32.setFloor();
	room32.setWalls();
	room32.setDoor(stonedoor_l_img, "L");
	room32.setDoor(stonedoor_r_img, "R");
	rooms[32] = room32;
//6
	var room33 = new Room();
	room33.setFloor();
	room33.setWalls();
	room33.setDoor(stonedoor_l_img, "L");
	room33.setDoor(stonedoor_r_img, "R");	
	room33.addBlocks(1, 2, 6, 1);
	room33.addBlocks(8, 2, 6, 1);
	room33.addBlocks(5, 8, 5, 1);
	room33.addBlocks(1, 8, 3, 1);
	room33.addBlocks(11, 8, 3, 1);
	room33.addItem(new Item(1, 1, Item.type.GEM));
	room33.addItem(new Item(13, 1, Item.type.GEM));
	room33.addItem(new Item(7, 9, Item.type.POTION));
	rooms[33] = room33;
//7
	var room34 = new Room();
	room34.setFloor();
	room34.setWalls();
	room34.setDoor(stonedoor_l_img, "L");
	room34.setDoor(stonedoor_t_img, "T");
	rooms[34] = room34;

}

setLevelDat();

