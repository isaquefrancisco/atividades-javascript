function ehPalindromo(str) {
    let limpa = str.toLowerCase();
    let invertida = limpa.split("").reverse().join("");
    return limpa === invertida;
}
