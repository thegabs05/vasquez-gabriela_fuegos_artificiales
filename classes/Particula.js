class Particula {
  constructor() {
    this.tamInicial = random(50, 100);
    this.tam = this.tamInicial;
    this.rad = this.tam / 2;
    this.pos = createVector(windowWidth / 2, windowHeight + this.rad);

    this.vel = createVector(0, random(5, 10));
    this.vel.rotate(random(150, 210));
    this.acel = createVector(random(-0.1, 0.1), 0.1);
    this.tiempoDeVidaInicial = random(100, 200);
    this.tiempoDeVida = this.tiempoDeVidaInicial;
  }
  // Metodo -> method update
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

    // if (this.tiempoDeVida <= 0) {
    //   this.estaMuerta = true;
    //  circle(this.pos.x, this.pos.y, this.tamInicial);
    //}
    //print("ups, me mori!");
  }
  // Metodo -> method display
  display() {
    fill(255);
    //noStroke();
    circle(this.pos.x, this.pos.y, this.tam);
  }
}
