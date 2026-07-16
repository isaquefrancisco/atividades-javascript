class Motor {
    ligar() {
        return "Motor ligado";
    }
}

class Carro {
    constructor() {
        this.motor = new Motor();
    }

    ligar() {
        return this.motor.ligar();
    }
}
