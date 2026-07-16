function filtrar(pred, lista) {
    let novaLista = [];
    for (let i = 0; i < lista.length; i++) {
        if (pred(lista[i])) {
            novaLista.push(lista[i]);
        }
    }
    return novaLista;
}
