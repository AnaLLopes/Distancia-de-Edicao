function ED (S: string, T: string, i: number, j: number){
    let count =+1;
    //caso base
    if(S.length === 0 && T.length === 0){
        return 0;
    }
    if(S.length === 0 && T.length !== 0){
        return j;
    }
    if(T.length === 0 && S.length !== 0){
        return i;
    }
    //chamadas recursivas
    if(S[i] === T[j]){
        return ED(S, T, i-1, j-1);
    }
    
    let substituica = ED(S, T, i-1, j-1) + 1; //substituicso
    let inserçao = ED(S, T, i, j-1) + 1; //insercao
    let remocao = ED(S, T, i-1, j) + 1;//remocao
    console.log(count);
    return Math.min(substituica, inserçao, remocao);
}

ED("casa", "carta", 3, 3);