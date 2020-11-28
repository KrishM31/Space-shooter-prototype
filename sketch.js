var bg,bgImg;
var player,playerImg;
var enemy,enemy1,enemy2,enemy3,enemy4,enemy5,enemy6;

function preload(){
//backgroundImg=loadImage("space bakground.png");
bgImg=loadImage("space bakground.png");
playerImg=loadImage("player2.jpg");
enemy1=loadImage("enemy1.jpg");
enemy2=loadImage("enemy2.png");
enemy3=loadImage("enemy3.png");
enemy4=loadImage("enemy4.jpg");
enemy5=loadImage("enemy5.png");
enemy6=loadImage("enemy6.png");
}

function setup(){
createCanvas(800,800);
bg=createSprite(400,400);
bg.addImage(bgImg);
bg.velocityY=4;
bg.scale=2;

player=createSprite(400,600,50,50);
player.addImage(playerImg);
player.scale=0.5;

}


function draw(){
//background("white");
if (bg.y>500){
bg.y=400;
}
if(keyDown("left")){
player.x=player.x-6
}
if(keyDown("right")){
    player.x=player.x+6
    }
spawnEnemyes();


drawSprites();
}

function spawnEnemyes(){
enemy=createSprite(400,10);
enemy.velocityY=5;
enemy.shapeColor="red";




    
}