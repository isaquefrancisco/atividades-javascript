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

const ret = new Retangulo(10, 5);
console.log(ret.area());
console.log(ret.perimetro());
