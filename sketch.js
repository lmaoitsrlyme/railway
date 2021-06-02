var ghost
var gameState = 0, count = 0;
var score = 0;
var bg
var bgmusic, enigmatic, creepy
var p1, p2, p3, p4, p5, p6
var gameState = 0;
var play, play1;

function preload(){
   ghost = loadImage("yuh.png")
   bg = loadImage("bg.jpg")
   logo = loadImage("LOGO.png")
   play = loadImage("play.png")
   warning = loadImage("warning.png")
   //bgmusic = 
   soundFormats("mp3");
   creepy = loadSound("creepy");
   enigmatic = loadSound("enigmatic");
   bgmusic = loadSound("bgmusic");
   p1 = loadImage("1.jpg")
   p2 = loadImage("2.jpg")
   p3 = loadImage("3.jpg")
   p4 = loadImage("4.jpg")
   p5 = loadImage("5.jpg")
   p6 = loadImage("6.jpg")
}

function setup(){
   createCanvas(1920, 937) 


   ghost1 = createSprite(500, 500, 5, 5);
   ghost1.addImage(ghost)
   ghost1.scale = 0.16  
   //tint(255, 128)

   //useb.scale = 1.2;
   

   logo1 = createSprite(450, 100);
   logo1.addImage(logo)
   //logo1.scale = 0.16
   
   play1 = createSprite(450, 220);
   play1.addImage(play)
   //play1.scale = 0.16


   warning1 = createSprite(120, 28, 10, 10);
   warning1.addImage(warning)
   warning1.scale = 0.48

   /*p1s = createSprite(960, 468.5, 1920, 937);
   p1s.addImage(warning)
   p1s.visible = false

   p2s = createSprite(960, 468.5, 1920, 937);
   p2s.addImage(warning)
   p2s.visible = false

   p3s = createSprite(960, 468.5, 1920, 937);
   p3s.addImage(warning)
   p3s.visible = false

   p4s = createSprite(960, 468.5, 1920, 937);
   p4s.addImage(warning)
   p4s.visible = false

   p5s = createSprite(960, 468.5, 1920, 937);
   p5s.addImage(warning)
   p5s.visible = false

   p6s = createSprite(960, 468.5, 1920, 937);
   p6s.addImage(warning)
   p6s.visible = false */
}
function draw(){
   background(bg);
   drawSprites();

   mousePressedOver(play1);{
      //gameState = 1;
      //console.log(gameState)
      background(p1)
      ghost1.visible = false;
      play1.visible = false;
      setTimeout(showintro1, 5000);
      setTimeout(showintro2, 5000);
      setTimeout(showintro3, 5000);
      setTimeout(showintro4, 5000);
      setTimeout(showintro5, 5000);
      setTimeout(showintro6, 15000);
   }
   
   }

   function showintro1(){
      p1s.visible = true
   }

   function showintro2(){
      p2s.visible = true
   }

   function showintro3(){
      p3s.visible = true
   }

   function showintro4(){
      p4s.visible = true
   }

   function showintro5(){
      p5s.visible = true
   }

   function showintro6(){
      p6s.visible = true
   }