class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    area() {
        return this.largura * this.altura;
    }

    perimetro() {
        return 2 * (this.largura + this.altura);
    }

    static saoEquivalentes(r1, r2) {
        return r1.area() === r2.area();
    }
}
