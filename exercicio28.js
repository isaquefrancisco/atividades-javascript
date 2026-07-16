class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    emitirSom() {
        return "Som genérico";
    }
}

class Cachorro extends Animal {
    emitirSom() {
        return "Au Au";
    }
}

class Gato extends Animal {
    emitirSom() {
        return "Miau";
    }
}
