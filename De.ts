function ED (S: string, T: string, i: number, j: number){
    //caso base
    if(S.length === 0 && T.length === 0){
        return 0;
    }
    if(S.length === 0 && T.length !== 0){
        return T;
    }
    if(T.length === 0 && S.length !== 0){
        return S;
    }
    //chamadas recursivas
    if(S[i] === T[j]){
        return ED(S, T, i-1, j-1);
    }
    ED(S, T, i-1, j-1) //substituicso
    let substituica  
    ED(S, T, i, j-1) //insercao
    ED(S, T, i-1, j) //remocao
}
