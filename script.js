let randAussen;
let figur;
let geschwindigkeit = 5;

function setup() {
  let cnv = createCanvas(800, 600);
  cnv.position(10,10);

  randAussen = new Group();

  let seitenWandLinks = createSprite(0, height/2, 10, height);
  seitenWandLinks.shapeColor = color("lightgray");
  seitenWandLinks.immovable = true;
  randAussen.add(seitenWandLinks);
  
	let seitenWandOben = createSprite(width/2, 0, width, 10);
  seitenWandOben.shapeColor = color("lightgray");
  seitenWandOben.immovable = true;
  randAussen.add(seitenWandOben); 
  
  let seitenWandRechts = createSprite(width, height/2, 10, height);
  seitenWandRechts.shapeColor = color("lightgray");
  seitenWandRechts.immovable = true;
  randAussen.add(seitenWandRechts);   
  
  let seitenWandUnten = createSprite(width/2, height, width, 10);
  seitenWandUnten.shapeColor = color("lightgray");
  seitenWandUnten.immovable = true;
  randAussen.add(seitenWandUnten);
  
  figur = createSprite(width/2, height/2, 10, 10);
}

function draw() {
  background(252);

  figur.collide(randAussen,stopp);

  if(keyWentDown('d')) {
      figur.setSpeed(geschwindigkeit,0);
  }
  if(keyWentUp('d')) {
      figur.setSpeed(0,0);
  }
  if(keyWentDown('a')) {
      figur.setSpeed(geschwindigkeit,180);
  }
  if(keyWentUp('a')) {
      figur.setSpeed(0,0);
  }  
  if(keyWentDown('s')) {
      figur.setSpeed(geschwindigkeit,90);
  }
  if(keyWentUp('s')) {
      figur.setSpeed(0,0);
  }
  if(keyWentDown('w')) {
      figur.setSpeed(geschwindigkeit,270);
  }
  if(keyWentUp('w')) {
      figur.setSpeed(0,0);
  }

  drawSprites();
}

function stopp() {
  figur.setSpeed(0,0);
}