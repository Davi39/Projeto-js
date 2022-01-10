//1° estratégia para gerar valor padrão 
function soma(a, b){
    a = a || 1;
    b = b || 1;
    return a + b;
}

console.log(soma(), soma(4), soma(5));

//2°, 3° e 4° estratégias
function soma1(a, b, c){
    a = a!= undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? c : 1;
    return a + b + c;
}

console.log(soma1(), soma1(2, 2, 3 ), soma1(0,0,0));


//Versão mais nova!! use essa!
function soma2( a = 1, b = 1, c = 1){
    return a + b + c;
}

console.log(soma2(), soma2(1, 2, 3 ), soma2(0,0,0));
