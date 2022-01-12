function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto : 0.1
    }
}

console.log(criarProduto('Note', 1222))
console.log(criarProduto('Ipad', 3432))