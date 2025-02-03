/* VARIABLES */
let screen = 0;
let backgroundScreen0, characterButton, startButton;
let PButton, BButton, MeButton, MuButton, SButton;
let Arrow1, Arrow2;
let characterArray, button, buttonNo, backButton, character;

/* PRELOAD LOADS FILES */
function preload(){
  AEDImg2 = loadImage("assets/AEDImg2.png")
  backgroundScreen0Img = loadImage("assets/backgroundScreen0.png");
  characterButtonImg = loadImage("assets/characterButton.png");
  startButtonImg = loadImage("assets/startButton.png");
  backgroundScreensImg = loadImage("assets/backgroundScreensImage.png");
  leftArrowImg = loadImage("assets/left.png");
  rightArrowImg = loadImage("assets/right.png");

  PImg = loadImage("assets/PImg.png");
  BImg = loadImage("assets/BImg.png");
  MeImg = loadImage("assets/MeImg.png");
  MuImg = loadImage("assets/MuImg.png");
  SImg = loadImage("assets/SImg.png");

  startImg = loadImage("assets/startImg.png");

  plasterImg = loadImage("assets/plaster.png");
  bandageImg = loadImage("assets/bandage.png");
  firstAidKitImg = loadImage("assets/firstAidKit.png");
  glovesImg = loadImage("assets/gloves.png");

  mazeImg = loadImage("assets/maze.png");
  AEDImg = loadImage("assets/AED.png");

  legImg1 = loadImage("assets/legImg1.png");
  legImg2 = loadImage("assets/legImg2.png");
  legImg3 = loadImage("assets/legImg3.png");

  wipesImg = loadImage("assets/wipes.png");
  wipeImg = loadImage("assets/wipe.png");

  armImg1 = loadImage("assets/armImg1.png");
  armImg2 = loadImage("assets/armImg2.png");

  burnImg1 = loadImage("assets/burnImg1.png");
  burnImg2 = loadImage("assets/burnImg2.png");
  burnImg3 = loadImage("assets/burnImg3.png");
  tapImg = loadImage("assets/tapImg.png");
  burnDressingImg = loadImage("assets/burnDressingImg.png")

  CPRImg1= loadImage("assets/CPRImg1.png");
  CPRImg2= loadImage("assets/CPRImg2.png");

  winImg = loadImage("assets/winImg.png");

  song = loadSound("assets/Wannabe.mp3");

  font = loadFont("assets/font.ttf");
  
}

/* SETUP RUNS ONCE */
function setup() {
  textFont(font);
  w = 0;
  CPR_counter = 0;
  breath_counter = 0;
  toggle2 = false;
  d = 0;
  h = 0;
  z = false;
  lives_left = 5;
  t = false;
  toggle = false;
  counter = 0;
  level = 0;
  score = 0;
  tilesDown = 0;
  windowHeight = 400;
  windowWidth = 400;
  rows = 6;
  columns = 10;
  rightDown = false;
  leftDown = false;
  alive = true;
  AEDImg2.resize(200, 200);
  winImg.resize(200, 200);
  win = new Sprite(winImg, -500, -500);

  brickWidth = Math.round(windowWidth/columns - 4);
  brickHeight = Math.round((windowHeight * 1/3)/rows - 10);
  bricks = [];
  tiles_down = 0;
  
  createCanvas(400,400);
  //kb = new p5.Keyboard();

  startButtonImg.resize(100, 50);
  characterButtonImg.resize(100, 50);
  leftArrowImg.resize(100, 50);
  rightArrowImg.resize(100,50);
  PImg.resize(200, 200);
  BImg.resize(200, 200);
  MeImg.resize(200, 200);
  MuImg.resize(200, 200);
  SImg.resize(200, 200);
  startImg.resize(100, 50);
  wipeImg.resize(50, 50);

  plasterImg.resize(25, 25);
  bandageImg.resize(25, 25);
  firstAidKitImg.resize(25, 25);
  glovesImg.resize(25, 25);

  legImg1.resize(150, 150);
  legImg2.resize(150, 150);
  legImg3.resize(150, 150);
  wipesImg.resize(100, 100);
  armImg1.resize(100, 100);
  armImg2.resize(100, 100);

  mazeImg.resize(300, 300);
  AEDImg.resize(50, 50);

  burnDressingImg.resize(150, 150);
  tapImg.resize(150, 150);
  burnImg1.resize(200, 200);
  burnImg2.resize(200, 200);
  burnImg3.resize(200, 200);

  CPRImg1.resize(225, 225);
  CPRImg2.resize(225, 225);
  
  startButton = new Sprite(startButtonImg, 200, 400);
  characterButton = new Sprite(characterButtonImg, 300,200);

  backButton = new Sprite();
  backButton.width = 75;
  backButton.height = 50;
  backButton.textSize = 15;
  backButton.text = "Back";
  backButton.color = "white";
  backButton.rotation = 0;

  PButton = new Sprite();
  PButton.width = 200;
  PButton.height = 75;
  PButton.textSize = 25;
  PButton.text = "Pranavamathi";
  PButton.color = "white"; 

  BButton = new Sprite();
  BButton.width = 200;
  BButton.height = 75;
  BButton.textSize = 25;
  BButton.text = "Becky";
  BButton.color = "white";

  MeButton = new Sprite();
  MeButton.width = 200;
  MeButton.height = 75;
  MeButton.textSize = 25;
  MeButton.text = "Melissa";
  MeButton.color = "white";

  MuButton = new Sprite();
  MuButton.width = 200;
  MuButton.height = 75;
  MuButton.textSize = 25;
  MuButton.text = "Muning";
  MuButton.color = "white";

  SButton = new Sprite();
  SButton.width = 200;
  SButton.height = 75;
  SButton.textSize = 25;
  SButton.text = "Sheela";
  SButton.color = "white";

  Arrow1 = new Sprite(leftArrowImg);
  Arrow1.width = 50;
  Arrow1.height = 50;
  Arrow2 = new Sprite(rightArrowImg);
  Arrow2.width = 50;
  Arrow2.height = 50;

  PCharacter = new Sprite(PImg, 100, 100, 100, 100);
  BCharacter = new Sprite(BImg, 100, 100, 100, 100);
  MeCharacter = new Sprite(MeImg, 100, 100, 100, 100);
  MuCharacter = new Sprite(MuImg, 100, 100, 100, 100);
  SCharacter = new Sprite(SImg, 100, 100, 100, 100);

  playButton1 = new Sprite(startImg);
  playButton2 = new Sprite(startImg);

  playEquip1 = new Sprite(startImg);
  playEquip2 = new Sprite(startImg);
  playEquip3 = new Sprite(startImg);
  playFight1 = new Sprite(startImg);
  playFight2 = new Sprite(startImg);
  playFight3 = new Sprite(startImg);

  characterArray = [PButton, BButton, MeButton, MuButton, SButton];
  characterPicArray = [PCharacter, BCharacter, MeCharacter, MuCharacter, SCharacter];
  buttonNo = 0;
  button = characterArray[buttonNo];
  characterPic = characterPicArray[buttonNo];

  character = PCharacter;

  maze = new Sprite(mazeImg);
  AED = new Sprite(AEDImg);
  leg = new Sprite(legImg1, -200, -200);
  arm = new Sprite(armImg1, -500, -500);
  wipes = new Sprite(wipesImg, -300, -300);
  wipe = new Sprite(wipeImg, -300, -400);
  b = 0;

  burn = new Sprite(burnImg1, -200, -200);
  tap = new Sprite(tapImg, -300, -200);
  burnDressing = new Sprite(burnDressingImg, -300, -300);

  platform1 = new Sprite(-400, -500, 75, 25);
  platform2 = new Sprite(-400, -500, 75, 25);
  platform3 = new Sprite(-400, -500, 75, 25);

  CPR = new Sprite(CPRImg1, -500, -500);
  screen0();

}

/* DRAW LOOP REPEATS */
function draw() {
  if (screen == 0){
    if (characterButton.mouse.presses()){
      screen1();
    }else if (startButton.mouse.presses()){
      screen2();
    }else{
      screen0();
    }
  } else if (screen == 1){
    screen1();
  } else if (screen == 2){
    screen2();
  }else if (screen == 3){
    if (playEquip1.mouse.presses()){
      playScreenAssets();
      screen5();
      
    }else{
      screen3();
      
    }
  }else if (screen == 4){
    if (h == 1){
      plaster.pos = {x: -120, y:-150};
      bandage.pos = {x: -150, y:-150};
    }
    screen4();
  }else if (screen == 5){
    screen5();
  }else if (screen == 6){
    console.log("Character placed");
    screen6();
  }else if (screen == 7){
    screen7();
  }else if (screen == 8){
    screen8();
  }else if (screen == 9){
    screen9();
  }else if (screen == 10){
    screen10();
  }else if (screen == 11){
    screen11();
  }
  

}

/* FUNCTIONS */

function removeAllButtons(){
  startButton.pos = {x: -100, y:-100};
  characterButton.pos = {x: -150, y:-150};
  PButton.pos = {x: -150, y:-150};
  BButton.pos = {x: -150, y:-150};
  MeButton.pos = {x: -150, y:-150};
  MuButton.pos = {x: -150, y:-150};
  SButton.pos = {x: -150, y:-150};
  Arrow1.pos ={x: -150, y:-150};
  Arrow2.pos = {x: -150, y:-150};  
  backButton.pos ={x: -150, y:-150};
  playButton1.pos = {x: -150, y:-150};
  playButton2.pos = {x: -150, y:-150};
  playEquip1.pos = {x: -150, y:-150};
  playEquip2.pos = {x: -150, y:-150};
  playEquip3.pos = {x: -150, y:-150};
  playFight1.pos = {x: -150, y:-150};
  playFight2.pos = {x: -150, y:-150};
  playFight3.pos = {x: -150, y:-150};
  //ball.pos = {x: -150, y:-150};
  maze.pos = {x: -150, y:-150};
  AED.pos = {x: -150, y:-150};
  if (screen == 5|| screen == 6 || screen == 7){
   if (character == PCharacter){
    BCharacter.pos = {x: -150, y:-150};
    MeCharacter.pos = {x: -150, y:-150};
    MuCharacter.pos = {x: -150, y:-150};
    SCharacter.pos = {x: -150, y:-150};
  } else if (character == BCharacter){
    PCharacter.pos = {x: -150, y:-150};
    MeCharacter.pos = {x: -150, y:-150};
    MuCharacter.pos = {x: -150, y:-150};
    SCharacter.pos = {x: -150, y:-150};
    
  } else if (character == MeCharacter){
    PCharacter.pos = {x: -150, y:-150};
    BCharacter.pos = {x: -150, y:-150};
    MuCharacter.pos = {x: -150, y:-150};
    SCharacter.pos = {x: -150, y:-150};
    
  } else if (character == MuCharacter){
    PCharacter.pos = {x: -150, y:-150};
    BCharacter.pos = {x: -150, y:-150};
    MeCharacter.pos = {x: -150, y:-150};
    SCharacter.pos = {x: -150, y:-150};
  } else if (character == SCharacter){
    PCharacter.pos = {x: -150, y:-150};
    BCharacter.pos = {x: -150, y:-150};
    MeCharacter.pos = {x: -150, y:-150};
    MuCharacter.pos = {x: -150, y:-150};
    
  }}
  else{
    PCharacter.pos = {x: -150, y:-150};
    BCharacter.pos = {x: -150, y:-150};
    MeCharacter.pos = {x: -150, y:-150};
    MuCharacter.pos = {x: -150, y:-150};
    SCharacter.pos = {x: -150, y:-150};

    
  }

  leg.pos = {x: -150, y:-150};
  arm.pos = {x: -150, y:-150};
  wipes.pos = {x: -150, y:-150};
  
  

  
  

  
  
}

function screen0(){
  screen = 0;
  image(backgroundScreen0Img, 0, 0, 400, 400)
  removeAllButtons();
  startButton.pos = {x: 155, y: 375};
  characterButton.pos = {x:255, y: 375};
  startButton.rotation = 0;
  characterButton.rotation = 0;
  
  
}

function screen1(){
  screen = 1;
  removeAllButtons();
  image(backgroundScreensImg, 0, 0, 400, 400);
  textSize(30);
  fill(255,255,255);
  textStyle(BOLD);
  text(" SELECT CHARACTER", 50, 50);

  PImg.resize(200, 200);
  BImg.resize(200, 200);
  MeImg.resize(200, 200);
  MuImg.resize(200, 200);
  SImg.resize(200, 200);

  //characterPicArray

  button.rotation = 0;
  Arrow1.rotation = 0;
  Arrow2.rotation = 0;
  characterPic.rotation = 0;
  backButton.rotation = 0;
  
  characterPic.pos = {x: 200, y: 150};
  button.pos = {x: 200, y: 300};
  Arrow1.pos = {x: 50, y: 300};
  Arrow2.pos = {x: 350, y: 300};
  backButton.pos = {x: 50, y: 360};

  if (Arrow2.mouse.presses()){
    button.pos ={x:-255, y: -375};
    characterPic.pos = {x:-255, y: -375};
    console.log("Button 1 moved")
    buttonNo = buttonNo + 1
    if (buttonNo > 4){
      buttonNo = 0;
    }
    button = characterArray[buttonNo];
    characterPic = characterPicArray[buttonNo];
    console.log("Button no = " + buttonNo)
    console.log("Button = " + characterArray[buttonNo+1])
    button.pos = {x: 200, y: 300};  
    characterPic.pos = {x: 200, y: 150};
  } 
  if (Arrow1.mouse.presses()){
    button.pos ={x:-255, y: -375};
    characterPic.pos = {x:-255, y: -375};
    console.log("Button 1 moved")
    buttonNo = buttonNo - 1
    if (buttonNo <= -1){
      buttonNo = 4;
    }
    button = characterArray[buttonNo];
    characterPic = characterPicArray[buttonNo];
    console.log("Button no = " + buttonNo)
    console.log("Button = " + characterArray[buttonNo-1])
    button.pos = {x: 200, y: 300};  
    characterPic.pos = {x: 200, y: 150};
  }
  if (button.mouse.presses()){
    character = button.text;
    console.log("Character is" + character);
    if (character == "Pravanamathi"){
      character = PCharacter;
    } else if (character == "Becky"){
      character = BCharacter;
    } else if (character == "Melissa"){
      character = MeCharacter;
    } else if (character == "Muning"){
      character = MuCharacter;
    } else if (character == "Sheela"){
      character = SCharacter;
    }
  }
  if (backButton.mouse.presses()){
    screen = screen - 1;
  }
  

  
  
  
}

function screen2(){
  screen = 2;
  removeAllButtons();
  image(backgroundScreensImg, 0, 0, 400, 400);
  backButton.pos = {x: 50, y: 360};
  backButton.rotation = 0;
  if (backButton.mouse.presses()){
    screen = screen - 2;
  }
  fill(0); 
  rect(200, 0, 10, 400);

  fill(255,255,255);
  textSize(40);
  //strokeWeight(4); //Will only function if I get time to change font
  textStyle(BOLD);
  text("EQUIP", 30, 75);
  text("FIGHT", 235, 75);

  fill(0);
  textSize(25);
  strokeWeight(2); //Will only function if I get time to change font
  text("Equip your\nfirst aid\nkit to\nfight the\ninjuries!", 30, 130);
  text("FIGHT the\ninjuries\nand bring\nhope to the\ninjured!", 235, 130);

  playButton1.rotation = 0;
  playButton2.rotation = 0;

  playButton1.pos = {x: 80, y:290};
  playButton2.pos = {x: 290, y:290};

  if (playButton1.mouse.presses()){
    screen = 3;
  }else if (playButton2.mouse.presses()){
    screen = 4;
  }

  
  
  
}

function screen3(){
  screen = 3;
  removeAllButtons();
  platform1.pos = {x:-500, y:-500};
  platform2.pos = {x:-500, y:-500};
  platform3.pos = {x:-500, y:-500};
  image(backgroundScreensImg, 0, 0, 400, 400);
  backButton.pos = {x: 50, y: 360};
  backButton.rotation = 0;
  if (backButton.mouse.presses()){
    screen = 2;
  }
  fill(0); 
  rect(133, 0, 5, 400); 
  rect(266, 0, 5, 400);

  fill(255,255,255);
  textSize(35);
  strokeWeight(4); //Will only function if I get time to change font
  text("LEVEL\n  1", 10, 60);
  text("LEVEL\n  2", 150, 60);
  text("LEVEL\n  3", 285, 60);

  textSize(15);
  strokeWeight(2);
  fill(0)
  text(" Collect your\n base items -\n  bandages,\n  plasters,\n    etc.\n COLLECTION\n    STYLE\n    GAME", 2, 135);
  text("Collect your\nburns kit -\n   ATARI\n  BREAKOUT\n    GAME", 145, 135);
  text("Collect the\nfinal item\n The AED -\n   THE\n ULTIMATE \n CHALLENGE", 280, 135);

  playEquip1.rotation = 0;
  playEquip2.rotation = 0;
  playEquip3.rotation = 0;

  playEquip1.pos = {x:60, y:310};
  playEquip2.pos = {x: 200, y:310};
  playEquip3.pos = {x: 330, y:310};

  if (playEquip1.mouse.presses()){
    screen = 5;
  } else if (playEquip2.mouse.presses()){
    screen = 6;
  }else if (playEquip3.mouse.presses()){
    screen = 7;
  }
  
}

function screen4(){
  screen = 4;
  removeAllButtons();
  burn.pos = {x: -300, y: -300};
  tap.pos = {x: -300, y: -300};
  burnDressing.pos = {x: -300, y: -300};
  image(backgroundScreensImg, 0, 0, 400, 400);
  backButton.pos = {x: 50, y: 360};
  backButton.rotation = 0;
  if (backButton.mouse.presses()){
    screen = 2;
  }
  CPR.pos = {x: -800, y: -800};
  fill(0); 
  rect(133, 0, 5, 400); 
  rect(266, 0, 5, 400);
  fill(255,255,255);
  textSize(35);
  strokeWeight(4); //Will only function if I get time to change font
  text("LEVEL\n  1", 10, 60);
  text("LEVEL\n  2", 150, 60);
  text("LEVEL\n  3", 285, 60);

  textSize(20);
  strokeWeight(2);
  fill(0)
  text("  FIGHT\n   THE\n  MINOR\n INJURIES", 2, 135);
  text("  FIGHT\nTHE BURNS", 145, 135);
  text("  DO CPR\n   SAVE\n SOMEONE’S\n   LIFE!", 275, 135);

  playFight1.rotation = 0;
  playFight2.rotation = 0;
  playFight3.rotation = 0;

  playFight1.pos = {x: 60, y:310};
  playFight2.pos = {x: 200, y:310};
  playFight3.pos = {x: 330, y:310};

  if (playFight1.mouse.presses()){
    screen = 8;
  } else if (playFight2.mouse.presses()){
    screen = 9;
  }else if (playFight3.mouse.presses()){
    screen = 10;
  }
  
}

function screen5(){
  screen = 5;
  removeAllButtons();
  image(backgroundScreensImg, 0, 0, 400, 400);
  
  
  if (backButton.mouse.presses()){
    plaster.pos = {x: -150, y:-150};
    bandage.pos = {x: -150, y:-150};
    firstAidKit.pos = {x: -150, y:-150};
    gloves.pos = {x: -150, y:-150};
    plaster.vel.y = 0;
    bandage.vel.y = 0;
    firstAidKit.vel.y = 0;
    gloves.vel.y = 0;

    screen = 3;
  }
  PImg.resize(100, 100);
  BImg.resize(100, 100);
  MeImg.resize(100, 100);
  MuImg.resize(100, 100);
  SImg.resize(100, 100);
  
  character.rotation = 0;
  character.collider = 'k';

  
  if (kb.pressing('left')) {
    console.log("Left key");
    character.vel.x = -3;
  } else if (kb.pressing('right')) {
    console.log("Right key");
    character.vel.x = 3;
  }else{
    character.vel.x = 0;
  }
  textSize(15);
  if (level == 1){
    text("Get 10 points\nto get to\nlevel 2", 275, 40)
  }else if (level == 2){
    text("Get 20 points\nto win!", 275, 40);
  }

  //If fallingObject reaches bottom, move back to random position at top


  if(plaster.y >= height){
    plaster.y = 0;
    plaster.x = random(50, 350);
    plaster.vel.y = random(2,4);
    score = score -1
  }
  if(bandage.y >= height){
    bandage.y = 0;
    bandage.x = random(50, 350);
    bandage.vel.y = random(2,4);
    score = score -1

  }
  if(firstAidKit.y >= height){
    firstAidKit.y = 0;
    firstAidKit.x = random(50, 350);
    firstAidKit.vel.y = random(2, 4);
    score = score -1

  }
  if(gloves.y >= height){
    gloves.y = 0;
    gloves.x = random(50, 350);
    gloves.vel.y = random(2,4);
    score = score -1
  }

  

  //Stop character at edges of screen

  if (character.x < 50){
    character.x = 50
  }else if (character.x > 350){
    character.x = 350
  }

  if (plaster.collides(bandage)){
    plaster.direction = 'down';
    bandage.direction = 'down';
  }
  if (plaster.collides(firstAidKit)){
    plaster.direction = 'down';
    firstAidKit.direction = 'down';
  }
  if (plaster.collides(gloves)){
    plaster.direction = 'down';
    gloves.direction = 'down';
  }
  if (bandage.collides(firstAidKit)){
    bandage.direction = 'down';
    firstAidKit.direction = 'down';
  }
  if (bandage.collides(gloves)){
    bandage.direction = 'down';
    gloves.direction = 'down';
  }
  if (firstAidKit.collides(gloves)){
    firstAidKit.direction = 'down';
    gloves.direction = 'down';
  }


  //If fallingObject collides with character, move back to random position at top

  if (plaster.collides(character)){
    plaster.y = 0;
    plaster.x = random(50, 350);
    plaster.vel.y = random(2,4);
    plaster.direction = 'down';
    score = score + 1
  }
  if (bandage.collides(character)){
    bandage.y = 0;
    bandage.x = random(50, 350);
    bandage.vel.y = random(2,4);
    bandage.direction = 'down';
    score = score + 1
  }
  if (firstAidKit.collides(character)){
    firstAidKit.y = 0;
    firstAidKit.x = random(50, 350);
    firstAidKit.vel.y = random(2,4);
    firstAidKit.direction = 'down';
    score = score + 1

  }
  if (gloves.collides(character)){
    gloves.y = 0;
    gloves.x = random(50, 350);
    gloves.vel.y = random(2,4);
    gloves.direction = 'down';
    score = score + 1

  }

  if (score < 20 ){
    fill(0,0,0)
    textSize(20)
    text("Score: " + score, 40,50);
    text("Level: " + level, 40, 75)
  }


  if (score > 19){
   fill(0);
   textSize(20);
   text("            You win!\nClick back to go back to equip!", 20, 150);
   text("Score: " + score, 150, 200)
   backButton.pos = {x: 50, y: 360};
   backButton.rotation = 0;
   plaster.pos = {x: -150, y:-150};
   bandage.pos = {x: -150, y:-150};
   firstAidKit.pos = {x: -150, y:-150};
   gloves.pos = {x: -150, y:-150};
   plaster.vel.y = 0;
   bandage.vel.y = 0;    
   firstAidKit.vel.y = 0;
   gloves.vel.y = 0;
  }  
  if (score < -4){
   fill(0);
   textSize(20);
   text("            You lose!\n Click back to go back to equip!",10 ,150);
   text("Score: " + score, 150, 200)
   plaster.pos = {x: -150, y:-150};
   bandage.pos = {x: -150, y:-150};
   firstAidKit.pos = {x: -150, y:-150};
   gloves.pos = {x: -150, y:-150};
   plaster.vel.y = 0;
   bandage.vel.y = 0;    
   firstAidKit.vel.y = 0;
   gloves.vel.y = 0;
   backButton.pos = {x: 50, y: 360};
   backButton.rotation = 0;
  }
  if (score >= 10){
   level = 2
   
  } else if (score < 10){
   level = 1
    }
  }  

function playScreenAssets(){
  character.collider = 'k';
  if (score < -4){
    score = 0; 
  }

  plaster = new Sprite(plasterImg,100,0,45);
  plaster.color = color(0, 128, 128);
  plaster.vel.y = 2; 
  plaster.rotationLock = true;

  bandage = new Sprite(bandageImg,200,0,45);
  bandage.color = color(0,128,128);
  bandage.vel.y = 2; 
  bandage.rotationLock = true;

  firstAidKit = new Sprite(firstAidKitImg,300,0,45);
  firstAidKit.color = color(0,128,128);
  firstAidKit.vel.y = 2; 
  firstAidKit.rotationLock = true;

  gloves = new Sprite(glovesImg,350,0,45);
  gloves.color = color(0,128,128);
  gloves.vel.y = 2;
  gloves.rotationLock = true;

  character.pos = {x: 200, y: 350};


  counter = 1;
}

function screen6(){
  if (toggle == false){
    setUpAtari();
  }
  ball.rotation = 0;
  textSize(10);
  
  if (lives_left <= 0){
    alive = false;
  }
  
  ball.bounciness = 1;
  screen = 6;
  removeAllButtons();
  image(backgroundScreensImg, 0, 0, 400, 400);
  
  if (backButton.mouse.presses()){
    ball.pos = {x: -400, y:-400};
    screen = 3;
  }
  fill(0);
  textSize(15);
  text("Tiles down: " + tiles_down + "/60", 230, 275);
  text("Lives left: " + lives_left + "/5", 230, 300);

  if (!alive){
    if (tiles_down < 60){
      backButton.pos = {x: 50, y: 360};
      backButton.rotation = 0;
      textSize(20);
      text("Press the spacebar to revive!", 25, 150);
      ball.vel.x = 0;
      ball.vel.y = 0;
      
    }else{
      
      backButton.pos = {x: 50, y: 360};
      backButton.rotation = 0;
      textSize(20);
      text("   CONGRATULATIONS\n  YOU HAVE COLLECTED\n    THE BURNS KIT\n      MOVE ON!", 100, 150);
    }
    
  }
  

  if (alive){
    drawBricks();
  }

  if (kb.pressing('right')){
    character.vel.x = 5;
  }else if(kb.pressing('left')){
    character.vel.x = -5;
  }else{
    character.vel.x = 0
  }
  //ball.vel.y = -4; 

  if (character.collides(ball)){
    //ball.direction = 'up';
    //ball.vel.y = -4;
    ball.direction = ball.direction + random(-10, 10);
    
  }
  if(ball.x < 0){
    ball.x = 0;
    ball.vel.x = -ball.vel.x;
    ball.direction = ball.direction + random(-10, 10);
    ball.vel.x = 2;
    ball.vel.y = 2;
  }
  
  if (character.x < 0){
    character.x = 0;
    
  }
  if (ball.y <= 0){
    ball.direction = 'down';
    ball.vel.y = 2;
    ball.vel.x = 2;
  }
  
  if(ball.x > 400){
    ball.x = 400;
    ball.vel.x = -ball.vel.x;
    ball.direction = ball.direction + random(-10, 10);
  }
  if (character.x > 400){
    character.x = 400;
  }
  if (ball.y > 400){
    ball.x = character.x - 25;
    ball.y = character.y - 50;
    ball.vel.y = 1;

    lives_left = lives_left - 1;
    //alive = false;
  }
    
  ball.x = ball.x + ball.vel.x;
  ball.y = ball.y + ball.vel.y;

  bricks.forEach((brick, index)=>{
    if (ball.y - ball.width/2 <=
       brick.y + brick.height&&
       ball.x >= brick.x &&
       ball.x <= brick.x + brick.width){
        ball.vel.y = -ball.vel.y;
        bricks.splice(index, 1);
        tiles_down = tiles_down + 1;
        if (bricks.length == 0){
          alive = false;
          
          
        }
        
       }
  })

  
  
  
}

function screen7(){
  screen = 7;
  removeAllButtons();
  image(backgroundScreensImg, 0, 0, 400, 400);

  if (d == 0){
    platform1.pos = {x: 100, y: 100};
    platform2.pos = {x: 100, y: 200};
    platform3.pos = {x: 100, y: 300};
    character.pos = {x: 200, y: 50};
  
    wallLeft = new Sprite(0, 0, 5, 800);
    wallRight = new Sprite(400, 0, 5, 800);
    wallLeft.collider = 's'
    wallLeft.rotation = 0;
    wallRight.collider = 's';
    wallRight.rotation = 0;
    platform1.vel.x = 5;
    platform2.vel.x = 5;
    platform3.vel.x = 5;
    d = 1;
  }

  
  backButton.pos = {x: 50, y: 360};
  backButton.rotation = 0;
  if (backButton.mouse.presses()){
    wallRight.pos = {x: -500, y: -500};
    wallLeft.pos = {x: -500, y: -500};
    screen = 3;
  }

  

  platform1.rotation = 0;
  platform2.rotation = 0;
  platform3.rotation = 0;

  if (platform1.collides(wallRight)){
    platform1.vel.x = -5;
    platform2.vel.x = -5;
    platform3.vel.x = -5;
    platform1.direction = 'left';
    platform2.direction = 'left';
    platform3.direction = 'left';
  }
  if (platform1.collides(wallLeft)){
    platform1.vel.x = 5;
    platform2.vel.x = 5;
    platform3.vel.x = 5;
    platform1.direction = 'right';
    platform2.direction = 'right';
    platform3.direction = 'right';
  }
  

  
  

  if (character.collides(platform1) || character.collides(platform2) || character.collides(platform3)){
    character.pos = {x: 200, y: 50};
  }
  

  AED.pos = {x: 185, y: 365};
  AED.rotation = 0;
  AED.collider = 's';

  character.collider = 'd';
  PImg.resize(25, 25);
  BImg.resize(25, 25);
  MeImg.resize(25, 25);
  MuImg.resize(25, 25);
  SImg.resize(25, 25);
  character.width = 25;
  character.height = 25;
  character.rotation = 0;
  //character.collider = 'd';

  if (kb.pressing('right')){
    character.vel.x = 3
  }else if (kb.pressing('left')){
    character.vel.x = -3
  }else if (kb.pressing('up')){
    character.vel.y = -3
  }else if (kb.pressing('down')){
    character.vel.y = 3
  }else{
    character.vel.x = 0
    character.vel.y = 0
  }

  if (character.collides(AED)){
    text("Level Complete!", 125, 150);
  }



  
  //allSprites.debug = mouse.pressing()  
}

function screen8(){//Plaster, bandage, etc.
  screen = 8;
  removeAllButtons();
  image(backgroundScreensImg, 0, 0, 400, 400);
  backButton.pos = {x: 50, y: 360};
  backButton.rotation = 0;
  wipe.rotation = 0;
  arm.rotation = 0;
  arm.collider = 'k';
  
  if (backButton.mouse.presses()){
    h = 1;
    screen = 4;
    
  }
  leg.pos = {x: 100, y: 100};
  arm.pos = {x: 100, y: 250};
  leg.rotation = 0;
  wipes.pos = {x: 300, y: 100};
  wipes.rotation = 0;
  if (z == false){
    plaster = new Sprite(plasterImg,300, 175,50, 50);
    plasterImg.resize(50, 50);
    plaster.rotation = 0;
    plaster.collider = 'k';
    wipe.collider = 'k';

    bandage = new Sprite(bandageImg, 300, 250, 50, 50);
    bandageImg.resize(50, 50);
    bandage.rotation = 0;
    bandage.collider = 'k';
    z = true;

    
  }
  plaster.pos = {x: 300, y: 175};
  bandage.pos = {x: 300, y: 250};
  if (wipes.mouse.presses()){
    wipe.pos = {x: 200, y:100};
    wipe.rotation = 0;
    wipe.moveTowards(mouse, 0.10);
  }
  if (wipe.collides(leg)){
    leg.image = legImg2;
    wipe.pos = {x: -400, y: - 400};   
    
  }

  if (plaster.mouse.presses() && leg.image == legImg2){
    plaster.pos = {x: 100, y: 100};
    
    leg.image = legImg3;
    plaster.pos = {x: 300, y: 250};
    b = 1;
    
  }

  if (bandage.mouse.presses()){
    bandage.pos = {x: 100, y:300};

    arm.image = armImg2;
  }

  if (leg.image == legImg3 && arm.image == armImg2){
    text("Level complete!", 100, 190);
  }

  

  
  
  
}

function screen9(){//Burn
  screen = 9;
  removeAllButtons();
  image(backgroundScreensImg, 0, 0, 400, 400);
  backButton.pos = {x: 50, y: 360};
  backButton.rotation = 0;
  if (backButton.mouse.presses()){
    burn.pos = {x: -300, y: -300};
    tap.pos = {x: -300, y: -300};
    burnDressing.pos = {x: -300, y: -300};
    screen = 4;
  }
  burn.pos = {x: 125, y: 200};
  tap.pos = {x: 300, y: 100};
  burnDressing.pos = {x: 300, y: 250};
  burn.rotation = 0;
  tap.rotation = 0;
  burnDressing.rotation = 0;

  if (tap.mouse.presses()){
    burn.image = burnImg2;
  }

  if (burnDressing.mouse.presses() && burn.image == burnImg2){
    burn.image = burnImg3;
  }

  if (burn.image == burnImg3){
    fill(255,255,255);
    text("LEVEL COMPLETE!", 125, 35);
  }  
}

function screen10(){//CPR
  screen = 10;
  removeAllButtons();
  image(backgroundScreensImg, 0, 0, 400, 400);
  backButton.pos = {x: 50, y: 360};
  backButton.rotation = 0;
  if (backButton.mouse.presses()){
    song.stop();
    screen = 4;
  }
  setUpScreen10();

  

  CPR.pos = {x: 125, y: 200};
  CPR.rotation = 0;

  if (CPR.mouse.presses()){
    
    toggle2 = !toggle2;
    if (toggle2 == true){
      CPR_counter = CPR_counter + 1;
    }
  }
  if (toggle2 == false){
    CPR.image = CPRImg1;
  } else if (toggle2 == true){
    
    CPR.image = CPRImg2;
  }
  
  AED.width = 200;
  AED.height = 200;
  AED.image = AEDImg2;
  AED.pos = {x: 300, y: 200};
  AED.rotation = 0;
  fill(255, 255, 255);
  text("CPR - " + CPR_counter + "/30", 250, 50);
  text("Click to the\n    beat!", 240, 350);

  if (CPR_counter > 29){
    text("ADMINISTER SHOCK\nCLICK AED", 30, 50)
    if (AED.mouse.presses()){
      screen = 11;
    }
  }
  
  }

function screen11(){//Win screen
  screen = 11;
  removeAllButtons();
  image(backgroundScreensImg, 0, 0, 400, 400);
  CPR.pos = {x: -700, y: -700};
  //song.stop();
  fill(255, 255, 255)
  textSize(20);
  textAlign(CENTER, CENTER);
  text("CONGRATULATIONS!\nYOU SAVED A LIFE!", 200,50)
  fill(0)
  text("This is hope -\nthe ability to add 1000s of days\nto someone’s life\nby spending 5 of yours\nto learn first aid!", 200, 140);

  
  win.pos = {x: 200, y:300};
  win.rotation = 0
  
}

function setUpAtari(){
  
  toggle = true;
  character.pos = {x: 200, y: 350};
  character.collider = 'k';
  PImg.resize(100, 100);
  BImg.resize(100, 100);
  MeImg.resize(100, 100);
  MuImg.resize(100, 100);
  SImg.resize(100, 100);
  character.rotation = 0;


  ball = new Sprite(firstAidKitImg);
  ball.height = 15;
  ball.width = 15;
  ball.x = character.x - 25;
  ball.y = character.y - 50;
  ball.rotationLock = 0;
  ball.vel.y = 1;
  ball.vel.x = 1;
  //ball.vel.x = 6;
  //ball.vel.y = 6;
  generateBricks(); 

  
  
  
}
function generateBricks(){
  for (let i = 0;i < rows;i++){
    for (let j = 0;j < columns; j++){
      let brickData = {
        x: j * (brickWidth + 2) + 10,
        y: i * (brickWidth + 2) + 10,
        width: brickWidth,
        height: brickHeight

      }
      bricks.push(brickData);
    }
    }
  
}
function drawBricks(){
  bricks.forEach(brick => {
    fill('green');
    rect(brick.x, brick.y, brick.width, brick.height);
    noStroke();
  })
  
}
function keyPressed(){
  if (screen == 6){
    
    if (kb.presses(' ') && !alive){
      
      lives_left = 5;
      tiles_down = 0;

      alive = true;
      character.x = windowWidth/2 - 50;
      ball.x = character.x - 25;
      ball.y = character.y - 50;
      ball.vel.x = 2;
      ball.vel.y = 2;
      tiles_down = 0;
      generateBricks();
      drawBricks();
      //bricks.splice(0, bricks.length);
      screen6();
      
      
    }
    
  }
  
}

function setUpScreen10(){
  if (w == 0){
    userStartAudio().then(function() {
      song.loop();
    });
    w = 1;
    
  }
  
}


