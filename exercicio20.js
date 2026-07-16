function contarPalavras(frase) {
    let palavras = frase.split(" ");
    let mapa = new Map();
    for (let i = 0; i < palavras.length; i++) {
        let palavra = palavras[i];
        if (palavra === "") continue;
        if (mapa.has(palavra)) {
            mapa.set(palavra, mapa.get(palavra) + 1);
        } else {
            mapa.set(palavra, 1);
        }
    }
    return mapa;
}
