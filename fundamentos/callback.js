const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`); // indice começa no zero, por isso o + 1
}

fabricantes.forEach(imprimir ) // para cada elemento do array, ele chama a função 

fabricantes.forEach(function(fabricante){
    console.log(fabricante);
})

fabricantes.forEach(fabricante => console.log(fabricante));

