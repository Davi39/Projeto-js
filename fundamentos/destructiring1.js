const pessoa = {
    nome : 'Ana',
    idade : 5,
    endereco : {
        logradouro : 'Rua ABC',
        numero : 1000,
    }
}

console.log(pessoa);

const { nome, idade} = pessoa; // destructing

console.log(nome, idade);

const { nome : n, idade : i} = pessoa ; // tirando a variável do objeto e renomeando

console.log(n,i);