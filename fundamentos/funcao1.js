function imprimeSoma(a, b){
    console.log(a + b);
}

imprimeSoma(2, 3);
imprimeSoma(4); // Como o segundo valor é undefeined ; Soma = NaN
imprimeSoma(1,2,2,2,2,2,); // Soma os dois primeiros
imprimeSoma(); //NaN

function soma(a , b = 0){
    return a + b;
}

console.log(soma(2));
console.log(soma(2, 5));

//Armazenando função em variável

const soma1 = function(c, d){
    console.log(c + d);
}
//"Main"
soma1(2,3)

// Função arrow
const soma2 = (e, f) => { // a palavra function pode ser substituida por =>
    return e + f;
}

console.log(soma2(4,5));

// retorno implicíto
const subtracao = (a , b) => a - b;
console.log(subtracao(2, 3));