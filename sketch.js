var car,wall;
var speed,weight;

function setup(){
  creatCanvas(1600,400);
  speed=random(22,25);
  weight=random(400,1500);

  car=creatSprit()
    car=creatSprite(50,200,50,50);
    car.velocityX=speed;

    wall=creatSprite(1500,200,60,hight/2);
    wall.shapeColoer(80,80,80);

}

function draw(){
background(255,255,255);
if(wall.x-car.x<(car.with+wall.width)/2)
{
  car.velocity=0;
  var deformation=0.5 * weight*speed*speed/22509;
  if(deformation>180)
{
  car.shapeColor(0,255,0);
}  
if(deformation<180 && deformation>100 ){
  carshapeColor=color(230,230,0);
}

if(deformation<100)
{

car.shapeColoer=color(0,255,0);
}
}

drawSprites();
}