//Factory simples, uma função com objeto

function criarPessoa(){
    return {
        nome : '',
        preco: ''
    }
}

console.log(criarPessoa);

//sempre que você chama através da factory, cria um novo objeto