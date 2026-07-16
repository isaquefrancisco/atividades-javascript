class No {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

class ListaLigada {
    constructor() {
        this.cabeca = null;
    }

    adicionar(valor) {
        let novoNo = new No(valor);
        if (this.cabeca === null) {
            this.cabeca = novoNo;
        } else {
            let atual = this.cabeca;
            while (atual.proximo !== null) {
                atual = atual.proximo;
            }
            atual.proximo = novoNo;
        }
    }

    paraArray() {
        let resultado = [];
        let atual = this.cabeca;
        while (atual !== null) {
            resultado.push(atual.valor);
            atual = atual.proximo;
        }
        return resultado;
    }
}
