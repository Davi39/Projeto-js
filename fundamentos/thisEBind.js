const pessoa = {
    saudacao: 'Bom dia ',
    falar (){
        console.log(this.saudacao);
    }
}

pessoa.falar();

const fala = pessoa.falar;
//falar() // conflito!! 

const fala1 = pessoa.falar.bind(pessoa); // binf é o método para amarrar o método
fala1();