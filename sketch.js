var gardenImage;
var jerry, jerry1, jerry2, jerry3, jerry4;
var tom, tom1, tom2, tom3, tom4;
var background, backgroundImage;
function preload() {
 jerry1=loadAnimation("images/jerryOne.png");
 jerry2=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
 jerry3=loadAnimation("images/jerryThree.png");

 tom1=loadAnimation("images/tomOne.png");
 tom2=loadAnimation("images/tomTwo.png", "images/tomThree.png");
 tom3=loadAnimation("images/tomFour.png");

 gardenImage = loadImage("images/garden.png")
 
}

function setup(){
    createCanvas(1000,800);

    jerry=createSprite(200, 600,69,69);
    jerry.addAnimation("jerry1",jerry1);
    jerry.scale=0.1;

    tom=createSprite(900,600,20,20);
    tom.addAnimation("tom1",tom1);
    tom.scale=0.1;
    
    
}

function draw() {

    background(gardenImage);
    if (keyDown("a")){
      tom.velocityX=-1;
      tom.scale = 0.1
      tom.addAnimation("tom2",tom2);
      tom.changeAnimation("tom2");

      jerry.scale = 0.1; 
      jerry.addAnimation("jerry2",jerry2);
      jerry.changeAnimation("jerry2")
    }
    
    if (tom.x - jerry.x < tom.width/2 - jerry.width/2){
      tom.scale = 0.1
      tom.addAnimation("tom3",tom3); 
      tom.changeAnimation("tom3");
      tom.velocityX=0;

      jerry.scale=0.1;
      jerry.addAnimation("jerry3",jerry3);
      jerry.changeAnimation("jerry3");
    
     
    }
     
    drawSprites();
}

