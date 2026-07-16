function contarOcorrencias(str) {
    let contagem = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (contagem[char]) {
            contagem[char]++;
        } else {
            contagem[char] = 1;
        }
    }
    return contagem;
}
