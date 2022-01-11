const soma = function (x, y) {
    return x + y;
}

const imprimirResultado = function (a, b, c = soma){
    console.log(c(a, b));
}

imprimirResultado(3, 4); // Assume o valor padrão, que é a soma 

imprimirResultado(3, 4, function (x, y) {
    return (x - y);
})

imprimirResultado(5, 7, (x, y) => x * y);