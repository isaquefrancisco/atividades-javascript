function maiorMenor(arr) {
    if (arr.length === 0) return { maior: undefined, menor: undefined };
    let maior = arr[0];
    let menor = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maior) maior = arr[i];
        if (arr[i] < menor) menor = arr[i];
    }
    return { maior, menor };
}
