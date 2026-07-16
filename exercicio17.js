function removerDuplicados(arr) {
    return [...new Set(arr)];
}

const resultado = removerDuplicados([1, 2, 2, 3, 3, 4]);
console.log(resultado);
