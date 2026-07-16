function aplicar(fn, lista) {
    let novaLista = [];
    for (let i = 0; i < lista.length; i++) {
        novaLista.push(fn(lista[i]));
    }
    return novaLista;
}
