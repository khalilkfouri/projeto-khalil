
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bgimg,appleimg,cestaimg,copinhoimg,vidrinhoimg,paperimg;
var apple,copo,cesta,vidro,paper
var groundObject;	
var world;

function preload() {
	bgimg = loadImage("./assets/trash cans.png");
	appleimg = loadImage("../assets/apple.png");
	vidrinhoimg = loadImage("../assets/vidrinho.png");
	cestaimg = loadImage("../assets/pista.png");
	paperimg = loadImage("./assets/paper.png");
	copinhoimg = loadImage("./assets/copinho.png")
  }
  


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	
	apple = createSprite(800,350)
	apple.addImage("maça",appleimg)

	copo = createSprite(500,200)
	copo.addImage("copao",copinhoimg)

	paper = createSprite(300,200)
	paper.addImage("papel",paperimg)

	cesta = createSprite()
	cesta.addImage("baskas",cestaimg)

	vidro = createSprite(100,200)
	vidro.addImage("cerveja",vidrinhoimg	)


	
	Engine.run(engine);
  
}


function draw() {
background(bgimg);
textSize(10)
text("Aperte (p) para lançar o papel",20,20)
text("Aperte (c) para lançar o copo",20,30)
text("Aperte (a) para lançar a maça",20,40)
text("Aperte (v) para a garafa de vidro",20,50)


keyPressed()
drawSprites()
}  
  
 
  
  
 


function keyPressed() {
  	if (keyDown("p")) {

    	Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});

    
  	}
	  if (keyDown("v")) {

    	Matter.Body.applyForce(vidro.body,vidro.body.position,{x:130,y:-145});

		
  	}
	  if (keyDown("c")) {

    	Matter.Body.applyForce(copo.body,copo.body.position,{x:130,y:-145});

    
  	}
	  if (keyDown("a")) {

    	Matter.Body.applyForce(apple.body,apple.body.position,{x:130,y:-145});

    

  	}

}







