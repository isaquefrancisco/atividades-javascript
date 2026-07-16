function criarContador() {
    let valor = 0;
    return function() {
        valor++;
        return valor;
    };
}
