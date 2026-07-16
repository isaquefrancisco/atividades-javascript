class Fila {
    constructor() {
        this.itens = [];
    }

    enfileirar(item) {
        this.itens.push(item);
    }

    desenfileirar() {
        return this.itens.shift();
    }

    frente() {
        return this.itens[0];
    }

    tamanho() {
        return this.itens.length;
    }
}
