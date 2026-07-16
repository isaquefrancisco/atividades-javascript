class ContaBancaria {
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
    }

    consultarSaldo() {
        return this.saldo;
    }
}
