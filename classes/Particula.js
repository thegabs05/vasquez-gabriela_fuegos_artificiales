class Particula {
  constructor() {
    this.tamInicial = random(25, 50);
    this.tam = this.tamInicial;
    this.rad = this.tam / 2;
    this.pos = createVector(windowWidth / 2, windowHeight + this.rad);

    this.vel = createVector(0, random(7, 10));
    this.vel.rotate(random(150, 210));
    this.acel = createVector(random(-0.01, 0.01), 0.1);

    this.tiempoDeVidaInicial = Math.ceil(random(220, 250));
    this.tiempoDeVida = this.tiempoDeVidaInicial;
    this.estaMuriendo = false;
    this.estaMuerta = false;
    this.estaExplotando = false;
    this.tiempoDeExplosion = 70;
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

    this.tiempoDeVida -= 1;
    if (this.tiempoDeVida < 0) {
      this.estaMuriendo = true;
      this.estaExplotando = true;
    }

    if (this.estaMuriendo) {
      this.diamExplosion = map(this.estaExplotando, 10, 0, 1, 50);
      fill(90, 145, 255, 40);
      circle(this.pos.x, this.pos.y, this.diamExplosion + 25);
      fill(255, 60);
      circle(this.pos.x, this.pos.y, this.diamExplosion + 50);
      fill(255, 80);
      circle(this.pos.x, this.pos.y, this.diamExplosion + 75);
      //print("funcionaa");
    }

    if (this.estaExplotando) {
      this.tiempoDeExplosion -= 1;
      if (this.tiempoDeExplosion <= 0) {
        this.estaMuerta = true;
      }
    }
  }

  display() {
    fill(90, 145, 255);
    noStroke();
    circle(this.pos.x, this.pos.y, this.tam);
  }
}
