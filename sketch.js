//First list out all the variable or items that wil be in your game.
//Jedi and Allies 
var lukeSkywalker;
var LSImage;

var obiWanKenobi;
var OWKImage;

var leiaOrgana;
var LOImage;

var masterYoda;
var MYImage;

var reySkywalker;
var RSImage;

var quiGonJinn;
var QGJImage;

var ahsokaTano;
var ATImage;

//Sith 
var kyloRen;
var KRImage;

var darthSidious;
var DSImage;

var knightsOfRen;
var KORImage;

var darthMaul;
var DMImage;

var savageOpress;
var SOImage;

var darthVader;
var DVImage;

//Extra
var kyberCrystal;
var KCImage;

var deathStar;
var deathStarImage1;
var deathStarImage2;
var deathStarImage3;

//Other Variables
var gameState = "start";

var score = 0;

var startButton;
var startButtonImage;


//Now, load all the images.
function preload()
{
  //Jedi and Allies
  LSImage = loadImage("images/lukeSkywalker.png");
  OWKImage = loadImage("images/obiWanKenobi.png");
  LOImage = loadImage("images/leiaOrgana.png");
  MYImage = loadImage("images/masterYoda.png");
  RSImage = loadImage("images/reySkywalker.png");
  QGJImage = loadImage("images/quiGonJinn.png");
  ATImage = loadImage("images/ahsokaTano.png");

  //Sith
  KRImage = loadImage("images/kyloRen.png");
  DSImage = loadImage("images/darthSidious.png");
  KOR1Image = loadImage("images/knightOfRen1.png");
  KOR2Image = loadImage("images/knightOfRen2.png");
  DMImage = loadImage("images/darthMaul.png");
  SOImage = loadImage("images/savageOpress.png");
  DVImage = loadImage("images/darthVader.png");

  //Extra
  KC1Image = loadImage("images/kyberCrystalBlue.png");
  KC2Image = loadImage("images/kyberCrystalGreen.png");
  KC3Image = loadImage("images/kyberCrystalOrange.png");
  KC4Image = loadImage("images/kyberCrystalPurple.png");
  KC5Image = loadImage("images/kyberCrystalRed.png");
  
  deathStarImage1 = loadImage("images/deathStarHall.jpeg");
  deathStarImage2 = loadImage("images/deathStarLandingPad.png");
  deathStarImage3 = loadImage("images/deathStarRoom.jpeg");

  startButtonImage = loadImage("images/startButton.png");

}



function setup() 
{
  //Create the sprites and assign images

  createCanvas(1300,800);

  //Jedi and Allies
  lukeSkywalker = createSprite(70,625,5,5);
  lukeSkywalker.addImage(LSImage);
  lukeSkywalker.scale = 0.6;

  obiWanKenobi = createSprite(200,627,5,5);
  obiWanKenobi.addImage(OWKImage);
  obiWanKenobi.scale = 0.9;

  leiaOrgana = createSprite(420,640,5,5);
  leiaOrgana.addImage(LOImage);
  leiaOrgana.scale = 0.6;

  masterYoda = createSprite(550,675,5,5);
  masterYoda.addImage(MYImage);
  masterYoda.scale = 0.5;

  reySkywalker = createSprite(670,640,5,5);
  reySkywalker.addImage(RSImage);
  reySkywalker.scale = 0.14;

  quiGonJinn = createSprite(780,600,5,5);
  quiGonJinn.addImage(QGJImage);
  quiGonJinn.scale = 1.1;

  ahsokaTano = createSprite(920,640,5,5);
  ahsokaTano.addImage(ATImage);
  ahsokaTano.scale = 0.14;

  //Sith
  kyloRen = createSprite(90,160,5,5);
  kyloRen.addImage(KRImage);
  kyloRen.scale = 0.8

  darthSidious = createSprite(230,150,5,5);
  darthSidious.addImage(DSImage);
  darthSidious.scale = 0.16

  knightsOfRen = createSprite(390,160,5,5);
  knightsOfRen.addImage(KOR1Image);
  knightsOfRen.scale = 0.33

  knightsOfRen2 = createSprite(560,160,5,5);
  knightsOfRen.addImage(KOR2Image);
  knightsOfRen.scale = 0.45;

  darthMaul = createSprite(800,170,5,5);
  darthMaul.addImage(DMImage);
  darthMaul.scale = 0.55;

  savageOpress = createSprite(890,160,5,5);
  savageOpress.addImage(SOImage);
  savageOpress.scale = 0.45;

  darthVader = createSprite(1000,160,5,5);
  darthVader.addImage(DVImage);
  darthVader.scale = 0.25;

  //Extra
  kyberCrystal1 = createSprite(300,400,5,5);
  kyberCrystal1.addImage(KC1Image);
  kyberCrystal1.scale = 0.1;

  kyberCrystal2 = createSprite(320,400,5,5);
  kyberCrystal2.addImage(KC2Image);
  kyberCrystal2.scale = 0.12;

  kyberCrystal3 = createSprite(340,400,5,5);
  kyberCrystal3.addImage(KC3Image);
  kyberCrystal3.scale = 0.12;

  kyberCrystal4 = createSprite(360,400,5,5);
  kyberCrystal4.addImage(KC4Image);
  kyberCrystal4.scale = 0.12;

  kyberCrystal5 = createSprite(380,400,5,5);
  kyberCrystal5.addImage(KC5Image);
  kyberCrystal5.scale = 0.12;

  startButton = createSprite(670,330,50,50);
  startButton.addImage(startButtonImage);
  startButton.scale = 0.3;


}
  function draw() 
  {
    background(deathStarImage3); 
  
        if(gameState === "start")
        {
          background(deathStarImage3);
          lukeSkywalker.visible = false;
          obiWanKenobi.visible = false;
          leiaOrgana.visible = false;
          masterYoda.visible = false;
          reySkywalker.visible = false;
          quiGonJinn.visible = false;
          ahsokaTano.visible = false;
          kyloRen.visible = false;
          darthSidious.visible = false;
          knightsOfRen.visible = false;
          knightsOfRen2.visible = false;
          darthMaul.visible = false;
          savageOpress.visible = false;
          darthVader.visible = false;
          kyberCrystal1.visible = false;
          kyberCrystal2.visible = false;
          kyberCrystal3.visible = false;
          kyberCrystal4.visible = false;
          kyberCrystal5.visible = false;

          fill("white");
          textSize(15)
          text("Greetings! Luke Skywalker needs your help. While trying to corrupt the Sith government, he has gotten himself trapped on the Imperial Death Star.", 130, 100);
          text("Without him, the Force is unbalanced and the natural ways of the universe and shifting. You must learn to be a Jedi in order to save the New Galactic Republic.", 90, 130);
          text("Call on your Allies! Ignite your lightsaber! Only with supplies, stealth and sacrifice shall you bring the balance back to the Force!", 180, 160);
        }

      if(mousePressedOver(startButton))
      {
        startStage2();
      }
      

      

      drawSprites();
  }



  function startStage2()
  {
    clear()
    background(deathStarImage1);
    startButton.hide();
    fill("white");
    textSize(50);
    text("BEGIN!", 650, 100);
   

    leiaOrgana.visible = true;

    
  }
