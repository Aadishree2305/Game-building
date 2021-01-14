var gameState= 'start';
var r;
var bg = createSprite(200,200,400,400);
bg.setAnimation("bg2");

//Variable
var pizza,cupcake,taco,burger,fries;
var score ;
var choose;
choose = randomNumber(1,5);
var c = createSprite(265,65,10,10);

//var score

//Narator
var lola = createSprite(355,290,20,20);
lola.setAnimation("lola");
lola.visible=false;

//Non player characters
var hammy = createSprite(200,75,20,20);
hammy.setAnimation("hammy.jpg");
hammy.scale=0.5;
hammy.visible=false;

var owlia = createSprite(200,75,30,30);
owlia.setAnimation("owlia.jpg");
owlia.scale=0.5;
owlia.visible=false;

var bosley = createSprite(200,75,20,20);
bosley.setAnimation("bosley.jpg");
bosley.scale=0.3;
bosley.visible=false;

r=randomNumber(1,3);

 playSound("mixkit-feeling-happy-5.mp3");

function draw() {
 background("bg1");
  if(gameState==='start'){
  fill("purple");
  textSize(19);
  text("Hi I am Lola",150,20);
  fill("blue");
  text("my friends are hungry",120,45);
  fill("pink");
  text("help me choose food for them",99,65);
  lola.visible=true;
  }
  
  text("Score:"+score,295,20);
   
   
  lola.visible=false;
  if(gameState==='start'&&keyDown("space")){
    gameState="play";
  }
 
  if(gameState==='play'){
    
    if(r===1){
      bosley.visible=true;
    }
    if(r===2){
      hammy.visible=true;
    }    
    if(r===3){
      owlia.visible=true;
    }
    
    
    if (choose===1) {
     c.setAnimation("cupcake");
     c.scale=0.3;
    }
    if(choose===2){
     c.setAnimation("burger");
     c.scale=0.3;
    }
    if(choose===3){
     c.setAnimation("fries");
     c.scale=0.3;
    }
    if(choose===4){
     c.setAnimation("pizza");
     c.scale=0.3;
    }
    if(choose===5){
     c.setAnimation("taco");
     c.scale=0.3;
    }
    
    if(mousePressedOver(c)&& choose===c){
      score=score+1;
      playSound("sound://category_tap/vibrant_game_start_with_tone_hum.mp3",true);
    }
    
    
    var rand = randomNumber(1,6);
  if(rand === 1){
    spawnCupcake();
  }
  if(rand === 2){
    spawnBurger();
  }
  if(rand === 3){
    spawnTaco();
  }
  if(rand === 4){
    spawnFries();
  }
  if(rand === 5){
    spawnPizza();
  }
   drawSprites();
  
  }
  
}

function spawnCupcake(){
 if( World.frameCount%120===0 ){
    cupcake = createSprite(395,210,50,50);
    cupcake.velocityX=-1;
    cupcake.setAnimation("cupcake");
    cupcake.scale=0.5;
    cupcake.lifetime=400;
    }
 }
 function spawnBurger(){
 if( World.frameCount%120===0 ){
    burger = createSprite(395,210,50,50);
    burger.velocityX=-1;
    burger.setAnimation("burger");
    burger.scale=0.5;
    burger.lifetime=400;
 }
 }
 
 function spawnTaco(){
 if( World.frameCount%120===0 ){
    taco = createSprite(395,210,50,50);
    taco.velocityX=-1;
    taco.setAnimation("Taco");
    taco.scale=0.5;
    taco.lifetime=400;
 }
 }
 
  function spawnFries(){
 if( World.frameCount%120===0 ){
    fries = createSprite(395,210,50,50);
    fries.velocityX=-1;
    fries.setAnimation("fries");
    fries.scale=0.7;
    fries.lifetime=400;
 }
 }
 
  function spawnPizza(){
 if( World.frameCount%120===0 ){
    pizza = createSprite(395,210,50,50);
    pizza.velocityX=-1;
    pizza.setAnimation("pizza");
    pizza.scale=0.5;
    pizza.lifetime=400;
 }
 }
 
