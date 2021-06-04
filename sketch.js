var ghost
var gameState = 0, count = 0;
var score = 0;
var bg
var bgmusic, enigmatic, creepy
var p1, p2, p3, p4, p5_1, p6
var play, play1;
var playe, player

function preload(){
   ghost = loadImage("yuh.png")
   bg = loadImage("bg.jpg")
   logo = loadImage("LOGO.png")
   play = loadImage("play.png")
   warning = loadImage("warning.png")
   soundFormats("mp3");
   creepy = loadSound("sound/creepy");
   enigmatic = loadSound("sound/enigmatic");
   bgmusic = loadSound("sound/bgmusic");
   p1 = loadImage("intros/1.jpg")
   p2 = loadImage("intros/2.jpg")
   p3 = loadImage("intros/3.jpg")
   p4 = loadImage("intros/4.jpg")
   p5_1 = loadImage("intros/5.jpg")
   p6 = loadImage("intros/6.jpg")
   playe = loadImage("player.png")
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


   /*warning1 = createSprite(120, 28, 10, 10);
   warning1.addImage(warning)
   warning1.scale = 0.48
*/
   
   player = createSprite(450, 620)
   player.addImage(playe)
   player.scale = 0.32

   wall = createSprite(910, 937, 1820, 10)
   wall.visible = false
}
function draw(){
   background(bg);
   drawSprites();
   //creepy.play();
   

   if (mousePressedOver(play1)){
      gameState = 1;            
   }
   
   
   if (gameState === 1){
      ghost1.visible = false;
      play1.visible = false;
      logo1.visible = false;
      //creepy.stop();
      player.visible = false;

      setTimeout(() => time1, 1000)
      setTimeout(() => time2, 1000)
      setTimeout(() => time3, 1000)
      setTimeout(() => time4, 1000)
      setTimeout(() => time5, 1000)
      setTimeout(() => time6, 1000)

   }
   function time1(){
      setTimeout(background(p1), 5000);
   }

   function time2(){
      setTimeout(background(p2), 5000);
   }

   function time3(){
      setTimeout(background(p3), 5000);
   }

   function time4(){
      setTimeout(background(p4), 5000);
   }

   function time5(){
      setTimeout(background(p5_1), 5000);
   }

   function time6(){
      setTimeout(background(p6), 15000);
   }

   function nothing(){
      setTimeout(null, 2000)
   }
}
