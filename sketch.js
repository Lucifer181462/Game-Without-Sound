var btImg1, btImg2,btImg3,btImg4;
var obstacles, battleShip,rand,backGroundImg,ground;
var obstacles,rand2;
var startImg,obsImg,obs2,obs2Img,obsGroup;
var score,frames;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var obs2Group;
function preload() {
    btImg1 = loadImage("bt1Final.png")
    btImg2 = loadImage("bt2Img copy.png")
    btImg3 = loadImage("bt3Fin.png")
    btImg4 = loadImage("bt4Img copy.png")
    backGroundImg = loadImage("back.png")

    obsImg = loadImage("obs1.png");
    obs2Img = loadImage("obs2.png");
}

function setup() {
    createCanvas(1000,1000)
    rand = Math.round(random(1,4));
    
    ground = createSprite(300,300);
    ground.addImage(backGroundImg);
    ground.velocityY = 3;


    battleShip = createSprite(500,500,10,10);
   obsGroup = new Group();
   obs2Group = new Group();
   //eadges = createEadgeSprite();

    switch(rand){
        case 1:battleShip.addImage(btImg1);
        
        break;
        case 2:battleShip.addImage(btImg2);
        break;
        case 3:battleShip.addImage(btImg3);
        break;
        case 4:battleShip.addImage(btImg4)
        break;
        default:break
    }
    
    battleShip.scale = 0.2;
  score=0;
  frames = 300;
}

function draw() {
    background(0)
    
    drawSprites();
    fill("red")
    textSize(20)
    text("Score:- "+score,900,100);
    battleShip.debug = true;
    if(gameState===PLAY) {
        battleShip.x = mouseX;
    battleShip.y = mouseY;
    
    spawnObstacles();
    spawnObstacles2();
    
    
    scoring();
   
    if(battleShip.isTouching(obsGroup)) {
        battleShip.lifetime = 0;
        obstacles.lifetime = 0;
     //   obs2.lifetime = 0;
        gameState = END;
    }

    


    if(ground.y>600){
        ground.y = 200;
    }
    console.log(gameState);
}
if(score>200) {
    frames=frames-100;
}
    if(gameState === END) {
        textSize(30)
        text("GAME OVER", 400,350);
       
    }
}


function spawnObstacles() {
    if(frameCount%100===0) {
        rand2 = Math.round(random(10,1000));
        obstacles = createSprite(200,-10,50,50);
        obstacles.addImage(obsImg);
        obstacles.velocityY = 4;
        obstacles.x=rand2;
        obstacles.scale = 0.15;
        obstacles.debug = true;
        obsGroup.add(obstacles)
        obstacles.lifetime = 300;
    }
}


function spawnObstacles2() {
    if(frameCount%frames===0) {
        rand3 = Math.round(random(200,800));
        obs2 = createSprite(200,-10,50,50);
        obs2.addImage(obs2Img);
        obs2.velocityY = 9;
        obs2.velocityX = 4;
        obs2.x=rand3;
        obs2.scale = 0.2;
        obs2.debug = true;
        obsGroup.add(obs2);
        obs2.setCollider("rectangle",0,0,obs2.width/2,obs2.height/2);
        obstacles.lifetime = 300;
    }


}

function scoring() {
    if(frameCount%10===0) {
        score=score+3;
    }
}
