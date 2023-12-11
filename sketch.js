let sis = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  p = new Particula();
  sis.push(p);
}

function draw() {
  background(0, 25);
  for (let i = 0; i < sis.length; i++) {
    if (sis[i].estaMuerta) {
      sis.splice(i, 1);
    } else {
      sis[i].update();
      sis[i].display();
      print("funciona");
    }
  }

  //for (let i = 0; i<ps.length; i++);
}
