function reduzir(fn, lista, inicial) {
    let acumulador = inicial;
    for (let i = 0; i < lista.length; i++) {
        acumulador = fn(acumulador, lista[i]);
    }
    return acumulador;
}
