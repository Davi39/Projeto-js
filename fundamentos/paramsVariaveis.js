function soma(){
    let soma = 0;
    for ( i in arguments){ // Array interno de toda função que recebe todos os argumentos
        soma += arguments[i];
    }
    return soma;
}

console.log(soma(1));
console.log(soma(10,11,12));