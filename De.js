function ED(S, T, i, j) {

    // Caso base
    if (S.length === 0 && T.length === 0) {
        return 0;
    }
    if (S.length === 0 && T.length !== 0) {
        return j;
    }
    if (T.length === 0 && S.length !== 0) {
        return i;
    }

    // Chamadas recursivas
    if (S[i] === T[j]) {
        return ED(S, T, i - 1, j - 1);
    }

    let substituicao = ED(S, T, i - 1, j - 1) + 1; // substituição
    let insercao = ED(S, T, i, j - 1) + 1; // inserção
    let remocao = ED(S, T, i - 1, j) + 1; // remoção

    return Math.min(substituicao, insercao, remocao);
}

// Exemplo de chamada da função
console.log(ED("casa", "carta", 3, 4));