let cx;
let cy;
let c2x;
let c2y;
let radius;

function setup() {
  createCanvas(650, 650);
  colorMode(HSL);
  cx = width/2;
  cy = height/2;
  c2x = width/2;
  c2y = height/2;
  radius=width/5;
}

function draw() {
  cx=winMouseX;
  cy=winMouseY;
  if(sqrt((winMouseX-c2x)*(winMouseX-c2x)+(winMouseY-c2y)*(winMouseY-c2y))>radius)
  {
    c2x=c2x+(cx-c2x)/32;
    c2y=c2y+(cy-c2y)/32;
  }
  
  background(256);
  let steps = 128;
  
  for( i=0;i<steps;i++)
  {
    let alpha=2*PI*i/steps;
    line(cx, cy, c2x+radius*cos(alpha), c2y+radius*sin(alpha));
  }
  
}
