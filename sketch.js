let ps = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  p = new Particula();
  ps.push(p);
}

function draw() {
  background(0, 70);
  for (let i = 0; i < ps.length; i++) {
    ps[i].update();
    ps[i].display();
    print("funciona");
  }
  //for (let i = 0; i<ps.length; i++);
}
