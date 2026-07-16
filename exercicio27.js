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
}

class Quadrado extends Retangulo {
    constructor(lado) {
        super(lado, lado);
    }
}
