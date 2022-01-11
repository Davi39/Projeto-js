const notas = [7, 8, 9, 1 ];

// Sem callback

let notasBaixas = [];

for ( let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i]); // Push nas notas que entraram no if para o array notasBaixas
    }
}

console.log(notasBaixas);

// Com Callback

const notasBaixas1 = notas.filter(function(nota){
    return nota < 7;
}); // retorna true or false

console.log(notasBaixas1);

