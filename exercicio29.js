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

function coroDeAnimais(animais) {
    let resultado = [];
    for (let i = 0; i < animais.length; i++) {
        let animal = animais[i];
        resultado.push(animal.nome + ": " + animal.emitirSom());
    }
    return resultado;
}
