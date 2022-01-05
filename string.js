const escola = "Arroz";

console.log(escola.charAt(3));

console.log('Doce de '.concat(escola).concat("!")); //concatenação usando o .concat, pode ser o "+" tbm
console.log(escola.replace('z', 's')); // substituindo utilizando o replace

console.log('Ana,Maria,Pedro'.split(',')); // separa em arrays 

//template string

const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';
const template = `
    Olá 
    ${nome}
    !`

console.log(concatenacao, template);

//matemática

console.log(`1 + 1 = ${1 + 1}`); // Dentro das crases e dentro do ${}, ele interpreta

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}`);