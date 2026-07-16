function intersecao(a, b) {
    let resultado = [];
    for (let i = 0; i < a.length; i++) {
        if (b.includes(a[i]) && !resultado.includes(a[i])) {
            resultado.push(a[i]);
        }
    }
    return resultado;
}
