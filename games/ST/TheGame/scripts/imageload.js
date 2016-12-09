var imgTotal = 20;
var imgCount = 0;

/*************************** Images ************************/
var enemy_img = new Image();
enemy_img.src = "images/enemy.png";
enemy_img.onload = function() { imgCount++; }

/*************************** Gamescreens *******************/
var title_img = new Image();
title_img.src = "images/actulTitle.png";
enemy_img.onload = function() { imgCount++; }

var end_img = new Image();
end_img.src = "images/end-screen.png";
end_img.onload = function() { imgCount++; }

var win_img = new Image();
win_img.src = "images/victory-screen.png";
win_img.onload = function() { imgCount++; }


/*********************Stone Tile Set**********************/
var stonewall_t_img = new Image();
stonewall_t_img.src = "images/stonewall_t.png";
stonewall_t_img.onload = function() { imgCount++; }
var stonewall_l_img = new Image();
stonewall_l_img.src = "images/stonewall_l.png";
stonewall_l_img.onload = function() { imgCount++; }
var stonewall_b_img = new Image();
stonewall_b_img.src = "images/stonewall_b.png";
stonewall_b_img.onload = function() { imgCount++; }
var stonewall_r_img = new Image();
stonewall_r_img.src = "images/stonewall_r.png";
stonewall_r_img.onload = function() { imgCount++; }
var stonewall_tl_img = new Image();
stonewall_tl_img.src = "images/stonewall_tl.png";
stonewall_tl_img.onload = function() { imgCount++; }
var stonewall_tr_img = new Image();
stonewall_tr_img.src = "images/stonewall_tr.png";
stonewall_tr_img.onload = function() { imgCount++; }
var stonewall_bl_img = new Image();
stonewall_bl_img.src = "images/stonewall_bl.png";
stonewall_bl_img.onload = function() { imgCount++; }
var stonewall_br_img = new Image();
stonewall_br_img.src = "images/stonewall_br.png";
stonewall_br_img.onload = function() { imgCount++; }
var stonedoor_t_img = new Image();
stonedoor_t_img.src = "images/stonedoor_t.png";
stonedoor_t_img.onload = function() {imgCount++; }
var stonedoor_l_img = new Image();
stonedoor_l_img.src = "images/stonedoor_l.png";
stonedoor_l_img.onload = function() {imgCount++; }
var stonedoor_b_img = new Image();
stonedoor_b_img.src = "images/stonedoor_b.png";
stonedoor_b_img.onload = function() {imgCount++; }
var stonedoor_r_img = new Image();
stonedoor_r_img.src = "images/stonedoor_r.png";
stonedoor_r_img.onload = function() {imgCount++; }

var lockedstonedoor_t_img = new Image();
lockedstonedoor_t_img.src = "images/lockedstonedoor_t.png";
lockedstonedoor_t_img.onload = function() {imgCount++; }
var lockedstonedoor_l_img = new Image();
lockedstonedoor_l_img.src = "images/lockedstonedoor_l.png";
lockedstonedoor_l_img.onload = function() {imgCount++; }
var lockedstonedoor_b_img = new Image();
lockedstonedoor_b_img.src = "images/lockedstonedoor_b.png";
lockedstonedoor_b_img.onload = function() {imgCount++; }
var lockedstonedoor_r_img = new Image();
lockedstonedoor_r_img.src = "images/lockedstonedoor_r.png";
lockedstonedoor_r_img.onload = function() {imgCount++; }

var dirt_img = new Image();
dirt_img.src = "images/dirty.png";
dirt_img.onload = function() { imgCount++; }

var block_img = new Image();
block_img.src = "images/block.png";
block_img.onload = function() { imgCount++; }


/*************************** Player ************************/
var player_r_img = new Image();
player_r_img.src = "images/player_right.png";
player_r_img.onload = function() { imgCount++; }
var player_l_img = new Image();
player_l_img.src = "images/player_left.png"
player_l_img.onload = function() { imgCount++; }
var player_d_img = new Image();
player_d_img.src = "images/player_down.png"
player_d_img.onload = function() { imgCount++; }
var player_u_img = new Image();
player_u_img.src = "images/player_up.png"
player_u_img.onload = function() { imgCount++; }

var player_r_ani = new Image();
player_r_ani.src = "images/player_swing_right.png";
player_r_ani.onload = function() { imgCount++; }
var player_l_ani = new Image();
player_l_ani.src = "images/player_swing_left.png"
player_l_ani.onload = function() { imgCount++; }
var player_d_ani = new Image();
player_d_ani.src = "images/player_swing_down.png"
player_d_ani.onload = function() { imgCount++; }
var player_u_ani = new Image();
player_u_ani.src = "images/player_swing_up.png"
player_u_ani.onload = function() { imgCount++; }


/*************************** UI *****************************/
var heart_full = new Image();
heart_full.src = "images/bigheart_full.png";
heart_full.onload = function() { imgCount++; }

var heart_empty = new Image();
heart_empty.src = "images/bigheart_empty.png";
heart_empty.onload = function() { imgCount++; }



/*************************** Items **************************/
var key_img = new Image();
key_img.src = "images/key.png";
key_img.onload = function() { imgCount++; }

var chest_img = new Image();
chest_img.src = "images/treasure.png";
chest_img.onload = function() { imgCount++; }

var gem_img = new Image();
gem_img.src = "images/gem.png";
gem_img.onload = function() { imgCount++; }

var heart_img = new Image();
heart_img.src = "images/heart_full.png";
heart_img.onload = function() { imgCount++; }

var potion_img = new Image();
potion_img.src = "images/potion.png";
potion_img.onload = function() { imgCount++; }

var girl_img = new Image();
girl_img.src = "images/GIRL.png";
girl_img.onload = function() { imgCount++; }


/*************************** Enemies ************************/
// Snake
var snake_r_img = new Image();
snake_r_img.src = "images/snake_right.png";
snake_r_img.onload = function() { imgCount++; }
snake_l_img = new Image();
snake_l_img.src = "images/snake_left.png";
snake_l_img.onLoad = function() { imgCount++; }

// Ghost
var ghost_u_img = new Image;
ghost_u_img.src = "images/ghost_u.png";
ghost_u_img.onload = function() { imgCount++; }
var ghost_d_img = new Image;
ghost_d_img.src = "images/ghost_d.png";
ghost_d_img.onload = function() { imgCount++; }

//Sassidge Night
var sausageknight_u_img = new Image();
sausageknight_u_img.src = "images/sausageknight_u.png";
sausageknight_u_img.onload = function() { imgCount++; }

var sausageknight_l_img = new Image();
sausageknight_l_img.src = "images/sausageknight_l.png";
sausageknight_l_img.onload = function() { imgCount++; }

var sausageknight_d_img = new Image();
sausageknight_d_img.src = "images/sausageknight_d.png";
sausageknight_d_img.onload = function() { imgCount++; }

var sausageknight_r_img = new Image();
sausageknight_r_img.src = "images/sausageknight_r.png";
sausageknight_r_img.onload = function() { imgCount++; }





