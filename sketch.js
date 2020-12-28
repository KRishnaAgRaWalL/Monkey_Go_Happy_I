
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var ground;
var gamestates;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,400)

monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.1;
  
ground = createSprite(400,350,700,10) ;
ground.veloctiyX = -4;
ground.x = ground.width/2;
console.log(ground.x)
  
foodGroup = new Group();
obstacleGroup = new Group();
  
   score = 0
}


function draw() {
  background("lightgreen");
  
  text("  score: " + score,500,50);
  
   monkey.collide(ground)
  
   if (keyDown("space")) {
    monkey.velocityY = -12;
  }
  monkey.velocityY += 0.8;
  
  
  
  
  food();
  rock();
  
  if(monkey.isTouching(foodGroup)){
     foodGroup.destroyEach();
    score = score + 1
     }
  
  
  foodGroup.setVelocityXEach(-4);
    obstacleGroup.setVelocityXEach(-4);
  if(obstacleGroup.isTouching(monkey)){
     
    textSize(30)
    text("so sorry! please try again",100,200)
    reset();
    ground.velocityX=0;
    monkey.velocityY=0;
    monkey.changeImage(bananaImage)
     }
  
  
  drawSprites();
}

function food(){
  if(frameCount % 100 === 0){
     
    banana = createSprite(600,Math.round(random(120,250)))
    banana.addImage(bananaImage)
    banana.scale = 0.1
    banana.vellocityX = -4
    banana.lifetime = 200;
    foodGroup.add(banana);
    banana.depth = monkey.depth;
    monkey.depth += 1;
     
     }
  
}

function rock(){
if(frameCount % 100 === 0){
    obstacle = createSprite(500, 330);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -4;
    obstacle.lifetime = 250;
    obstacleGroup.add(obstacle);
}
}


function reset (){
  
  foodGroup.setLifetimeEach(-1);
    obstacleGroup.setLifetimeEach(-1);
    foodGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
  ground.velocityX = 0
  
}
