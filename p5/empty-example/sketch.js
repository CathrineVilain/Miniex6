var x = 50;
var xspeed;
var y = 50;
var yspeed;
var nums = [20,30,30,60];
let ball1 = [];
let i = 0;

function setup() {
  createCanvas(1400,700);
  background(0);
  for(let i =0; i < 10; i ++){
    ball1 [i] = new Ball(this.x, this.y);
  }
  frameRate(150);
  //yspeed = 0.4;
  //xspeed = 4;
}

function draw(){
  /*ellipse(x,y,150,150);
  fill(0);
  stroke(255);*/
  /*ball1.show();
  ball1.move();
*/

  for (let i = 0; i < ball1.length; i ++) {
   ball1[i].show();
   ball1[i].move();
  }
}

class Ball {
  constructor(){
    this.x= random(50,200);
    this.y= random(50,700);
    this.xspeed = 4;
    this.yspeed = 0.4;
    this.col = floor(random(360));
    this.size = random(50,300);

  }
  show(){
    ellipse(this.x,this.y,this.size,this.size);
    fill(0);
    strokeWeight(2);
    stroke(this.col,this.size,this.size);
  }
  move(){
    this.x = this.x + this.xspeed;
    //y = y + yspeed;

    if (this.x > width || this.x < 0){
    this.xspeed = this.xspeed * -1;
    }

    if (this.xspeed < 0){
    this.y = this.y + this.yspeed;
    }

  }




/*
x = x + xspeed;
//y = y + yspeed;

if (x > width || x < 0){
xspeed = xspeed * -1;
}

if (xspeed < 0){
y = y + yspeed;
} */

  }
