						    // 0  1  2  3  4  5  6 
						    // 7 8 9 10 11 12 13 14
							// 15 16 17 18 19 20 21
							// 22 23 24 25 26 27 28
							// 29 30 31 32 33 34 35 

function setEnemyDat() {

	rooms[0].addEnemy(new Knight(1, 1, "D"));

	rooms[1].addEnemy(new Snake(1, 1, "L"));
	rooms[1].addEnemy(new Snake(3, 1, "L"));
	rooms[1].addEnemy(new Snake(5, 1, "L"));
	rooms[1].addEnemy(new Snake(7, 1, "L"));
	rooms[1].addEnemy(new Snake(9, 1, "L"));
	rooms[1].addEnemy(new Snake(11, 1, "L"));

	rooms[2].addEnemy(new Ghost(13, 1, "D"));

	rooms[4].addEnemy(new Snake(5, 3, "R"));
	rooms[4].addEnemy(new Snake(9, 7, "L"));
	rooms[4].addEnemy(new Snake(1, 6, "R"));
	rooms[4].addEnemy(new Snake(13, 4, "L"));
	rooms[4].addEnemy(new Knight(7, 2, "D"));
	rooms[4].addEnemy(new Ghost(6, 1, "D"));
	rooms[4].addEnemy(new Ghost(8, 9, "U"));

	rooms[5].addEnemy(new Snake(1, 4, "R"));
	rooms[5].addEnemy(new Snake(1, 6, "R"));
	rooms[5].addEnemy(new Snake(2, 7, "R"));
	rooms[5].addEnemy(new Snake(3, 8, "R"));
	rooms[5].addEnemy(new Snake(4, 9, "R"));
	rooms[5].addEnemy(new Snake(10, 9, "L"));
	rooms[5].addEnemy(new Snake(11, 8, "L"));
	rooms[5].addEnemy(new Snake(12, 7, "L"));
	rooms[5].addEnemy(new Snake(13, 6, "L"));
	rooms[5].addEnemy(new Knight(7, 1, "D"));


	rooms[8].addEnemy(new Snake(7, 1, "L"));



	rooms[9].addEnemy(new Snake(1, 2, "L"));
	rooms[9].addEnemy(new Snake(13, 5, "R"));
	rooms[9].addEnemy(new Snake(7, 8, "L"));

	rooms[10].addEnemy(new Ghost(8, 1, "D"));
	rooms[10].addEnemy(new Ghost(9, 2, "D"));
	rooms[10].addEnemy(new Ghost(10, 3, "D"));
	rooms[10].addEnemy(new Ghost(8, 9, "U"));
	rooms[10].addEnemy(new Ghost(9, 8, "U"));
	rooms[10].addEnemy(new Ghost(10, 7, "U"));

	rooms[11].addEnemy(new Knight(1, 1, "D"));
	rooms[11].addEnemy(new Knight(1, 9, "U"));
	rooms[11].addEnemy(new Knight(13, 1, "D"));
	rooms[11].addEnemy(new Knight(13, 9, "U"));
	rooms[11].addEnemy(new Ghost(6, 1, "D"));
	rooms[11].addEnemy(new Ghost(8, 3, "U"));
	rooms[11].addEnemy(new Ghost(6, 9, "U"));
	rooms[11].addEnemy(new Ghost(8, 7, "D"));

	rooms[12].addEnemy(new Knight(1, 9, "U"));
	rooms[12].addEnemy(new Knight(7, 9, "U"));
	rooms[12].addEnemy(new Knight(13, 9, "U"));

	rooms[13].addEnemy(new Ghost(1, 9, "U"));
	rooms[13].addEnemy(new Ghost(2, 9, "U"));
	rooms[13].addEnemy(new Ghost(3, 9, "U"));
	rooms[13].addEnemy(new Ghost(4, 9, "U"));
	rooms[13].addEnemy(new Ghost(5, 9, "U"));
	rooms[13].addEnemy(new Ghost(9, 9, "U"));
	rooms[13].addEnemy(new Ghost(10, 9, "U"));
	rooms[13].addEnemy(new Ghost(11, 9, "U"));
	rooms[13].addEnemy(new Ghost(12, 9, "U"));
	rooms[13].addEnemy(new Ghost(13, 9, "U"));



	rooms[16].addEnemy(new Knight(5, 9, "U"));

	rooms[18].addEnemy(new Snake(5, 1, "L"));
	rooms[18].addEnemy(new Snake(6, 1, "L"));
	rooms[18].addEnemy(new Snake(7, 1, "L"));
	rooms[18].addEnemy(new Snake(8, 1, "L"));
	rooms[18].addEnemy(new Snake(9, 1, "L"));
	rooms[18].addEnemy(new Snake(6, 3, "R"));
	rooms[18].addEnemy(new Snake(7, 3, "R"));
	rooms[18].addEnemy(new Snake(8, 3, "R"));
	rooms[18].addEnemy(new Snake(9, 3, "R"));
	rooms[18].addEnemy(new Snake(10, 3, "R"));
	rooms[18].addEnemy(new Knight(4, 1, "D"));
	rooms[18].addEnemy(new Knight(13, 3, "D"));
	rooms[18].addEnemy(new Snake(1, 9, "R"));
	rooms[18].addEnemy(new Knight(1, 5, "D"));
	rooms[18].addEnemy(new Knight(11, 5, "D"));
	rooms[18].addEnemy(new Ghost(5, 5, "D"));
	rooms[18].addEnemy(new Ghost(9, 5, "D"));


	rooms[20].addEnemy(new Snake(1, 4, "R"));
	rooms[20].addEnemy(new Snake(1, 6, "R"));
	rooms[20].addEnemy(new Snake(13, 5, "L"));
	rooms[20].addEnemy(new Snake(13, 7, "L"));
	rooms[20].addEnemy(new Knight(1, 1, "R"));
	rooms[20].addEnemy(new Knight(7, 1, "D"));
	rooms[20].addEnemy(new Knight(13, 1, "L"));


	rooms[24].addEnemy(new Knight(3, 5, "U"));
	rooms[24].addEnemy(new Knight(11, 5, "U"));


	rooms[25].addEnemy(new Knight(1, 6, "L"));
	rooms[25].addEnemy(new Knight(2, 6, "L"));
	rooms[25].addEnemy(new Knight(3, 6, "L"));
	rooms[25].addEnemy(new Knight(4, 6, "L"));
	rooms[25].addEnemy(new Knight(5, 6, "L"));


	rooms[29].addEnemy(new Knight(13, 1, "D"));
	rooms[29].addEnemy(new Knight(13, 9, "D"));
	rooms[29].addEnemy(new Knight(7, 1, "D"));
	rooms[29].addEnemy(new Knight(7, 9, "D"));	
	rooms[29].addEnemy(new Knight(7, 5, "D"));
	rooms[29].addEnemy(new Knight(1, 5, "D"));

	rooms[30].addEnemy(new Snake(2, 2, "R"));
	rooms[30].addEnemy(new Snake(3, 3, "R"));
	rooms[30].addEnemy(new Snake(4, 4, "R"));
	rooms[30].addEnemy(new Snake(6, 6, "R"));
	rooms[30].addEnemy(new Snake(7, 7, "R"));
	rooms[30].addEnemy(new Snake(8, 8, "R"));
	rooms[30].addEnemy(new Snake(9, 9, "R"));
	rooms[30].addEnemy(new Knight(1, 9, "R"));
	rooms[30].addEnemy(new Knight(13, 1, "L"));


	rooms[31].addEnemy(new Snake(2, 4, "R"));
	rooms[31].addEnemy(new Snake(2, 6, "R"));
	rooms[31].addEnemy(new Knight(1, 5, "R"));
	rooms[31].addEnemy(new Knight(3, 5, "R"));
	rooms[31].addEnemy(new Ghost(6, 1, "D"));
	rooms[31].addEnemy(new Ghost(8, 1, "D"));
	rooms[31].addEnemy(new Ghost(7, 9, "U"));

	rooms[32].addEnemy(new Ghost(4, 8, "U"));
	rooms[32].addEnemy(new Ghost(4, 9, "U"));
	rooms[32].addEnemy(new Ghost(4, 8, "U"));
	rooms[32].addEnemy(new Ghost(4, 7, "U"));
	rooms[32].addEnemy(new Ghost(4, 6, "U"));
	rooms[32].addEnemy(new Ghost(4, 5, "U"));
	rooms[32].addEnemy(new Ghost(4, 4, "U"));
	rooms[32].addEnemy(new Ghost(4, 3, "U"));
	rooms[32].addEnemy(new Ghost(4, 2, "U"));
	rooms[32].addEnemy(new Ghost(4, 1, "D"));
	rooms[32].addEnemy(new Ghost(4, 2, "D"));
	rooms[32].addEnemy(new Ghost(4, 3, "D"));
	rooms[32].addEnemy(new Ghost(4, 4, "D"));
	//---
	rooms[32].addEnemy(new Ghost(6, 8, "U"));
	rooms[32].addEnemy(new Ghost(6, 7, "U"));
	rooms[32].addEnemy(new Ghost(6, 6, "U"));
	rooms[32].addEnemy(new Ghost(6, 5, "U"));
	rooms[32].addEnemy(new Ghost(6, 4, "U"));
	rooms[32].addEnemy(new Ghost(6, 3, "U"));
	rooms[32].addEnemy(new Ghost(6, 2, "U"));
	rooms[32].addEnemy(new Ghost(6, 1, "D"));
	rooms[32].addEnemy(new Ghost(6, 2, "D"));
	rooms[32].addEnemy(new Ghost(6, 3, "D"));
	rooms[32].addEnemy(new Ghost(6, 4, "D"));
	rooms[32].addEnemy(new Ghost(6, 5, "D"));
	rooms[32].addEnemy(new Ghost(6, 6, "D"));
	//---
	rooms[32].addEnemy(new Ghost(8, 6, "U"));
	rooms[32].addEnemy(new Ghost(8, 5, "U"));
	rooms[32].addEnemy(new Ghost(8, 4, "U"));
	rooms[32].addEnemy(new Ghost(8, 3, "U"));
	rooms[32].addEnemy(new Ghost(8, 2, "U"));
	rooms[32].addEnemy(new Ghost(8, 1, "D"));
	rooms[32].addEnemy(new Ghost(8, 2, "D"));
	rooms[32].addEnemy(new Ghost(8, 3, "D"));
	rooms[32].addEnemy(new Ghost(8, 4, "D"));
	rooms[32].addEnemy(new Ghost(8, 5, "D"));
	rooms[32].addEnemy(new Ghost(8, 6, "D"));
	rooms[32].addEnemy(new Ghost(8, 7, "D"));
	rooms[32].addEnemy(new Ghost(8, 8, "D"));
    //---
	rooms[32].addEnemy(new Ghost(10, 4, "U"));
	rooms[32].addEnemy(new Ghost(10, 3, "U"));
	rooms[32].addEnemy(new Ghost(10, 2, "U"));
	rooms[32].addEnemy(new Ghost(10, 1, "D"));
	rooms[32].addEnemy(new Ghost(10, 2, "D"));
	rooms[32].addEnemy(new Ghost(10, 3, "D"));
	rooms[32].addEnemy(new Ghost(10, 4, "D"));
	rooms[32].addEnemy(new Ghost(10, 5, "D"));
	rooms[32].addEnemy(new Ghost(10, 6, "D"));
	rooms[32].addEnemy(new Ghost(10, 7, "D"));
	rooms[32].addEnemy(new Ghost(10, 8, "D"));
	rooms[32].addEnemy(new Ghost(10, 9, "D"));
	rooms[32].addEnemy(new Ghost(10, 8, "U"));

	rooms[33].addEnemy(new Snake(2, 1, "L"));
	rooms[33].addEnemy(new Snake(3, 1, "L"));
	rooms[33].addEnemy(new Snake(4, 1, "L"));
	rooms[33].addEnemy(new Knight(5, 1, "D"));
	rooms[33].addEnemy(new Knight(9, 1, "D"));
	rooms[33].addEnemy(new Snake(10, 1, "L"));
	rooms[33].addEnemy(new Snake(11, 1, "L"));
	rooms[33].addEnemy(new Snake(12, 1, "L"));
	rooms[33].addEnemy(new Snake(6, 9, "L"));
	rooms[33].addEnemy(new Snake(8, 9, "R"));
	rooms[33].addEnemy(new Ghost(4, 3, "D"));
	rooms[33].addEnemy(new Ghost(10, 3, "D"));


	rooms[34].addEnemy(new Snake(1, 1, "R"));
	rooms[34].addEnemy(new Snake(13, 9, "L"));
	rooms[34].addEnemy(new Ghost(6, 1, "D"));
	rooms[34].addEnemy(new Ghost(6, 9, "U"));
	rooms[34].addEnemy(new Ghost(8, 4, "U"));
	rooms[34].addEnemy(new Ghost(8, 6, "D"));



}

setEnemyDat();