class Particula {
  constructor() {
    this.tamInicial = random(25, 50);
    this.tam = this.tamInicial;
    this.rad = this.tam / 2;
    this.pos = createVector(windowWidth / 2, windowHeight + this.rad);

    this.vel = createVector(0, random(5, 11));
    this.vel.rotate(random(150, 210));
    this.acel = createVector(random(-0.01, 0.01), 0.1);

    this.tiempoDeVidaInicial = Math.ceil(random(50, 150));
    this.tiempoDeVida = this.tiempoDeVidaInicial;
    this.estaMuerta = false;

    this.explotar = false;
  }

  update() {
    this.vel.add(this.acel);
    this.pos.add(this.vel);

    this.tiempoDeVida -= 1;

    this.tam = map(
      this.tiempoDeVida,
      0,
      this.tiempoDeVidaInicial,
      this.tamInicial,
      0
    );

    if (this.tiempoDeVida <= 0) {
      this.estaMuerta = true;
      circle(this.pos.x, this.pos.y, this.tamInicial);
    }

    if (this.explotar >= 35) {
      this.explotar = true;
      circle(this.pos.x, this.pos.y, this.tamInicial);
    }
  }

  display() {
    fill(255);
    noStroke();
    circle(this.pos.x, this.pos.y, this.tam);
  }
}
