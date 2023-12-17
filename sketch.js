function setup() {
    createCanvas(500, 500);
    angle = PI / 4;
    angleMode(DEGREES);
    noLoop();
  }
  
  function draw() {
    background(255);
    translate(width / 2, height);
    branch(100);
  }
  
  function branch(len) {
    strokeWeight(len / 10); 
    stroke(70, 40, 20);
  
    push();
    if (len > 8) {
      line(0, 0, 0, -len);
      translate(0, -len);
  
      rotate(random(30, 50));
      branch(len * random(0.5, 0.8));
      
      rotate(random(-30, -50));
      branch(len * random(0.5, 0.8));
      
      rotate(-30);
      branch(len * random(0.5, 0.8));
    } else {
      noStroke();
      let r = 80 + random(-20, 20);
      let g = 120 + random(-20, 20);
      let b = 40 + random(-20, 20);
      fill(r, g, b);
      beginShape()
      for(var i = 45; i < 135; i++) {
        var rad = 15;
        var x = rad * cos(i);
        var y = rad * sin(i);
        vertex(x,y)
      }
      
      for(var i = 135; i > 40; i--) {
        var rad = 15;
        var x = rad * cos(i);
        var y = rad * sin(-i) + 20;
        vertex(x,y)
      }
      endShape(CLOSE)
    }
    pop();
  }