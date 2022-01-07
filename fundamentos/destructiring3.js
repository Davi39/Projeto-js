function rand({ min = 0 , max = 1000 }){ // valores padrões, caso o usuário não informe
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = { max : 50, min : 40};
console.log(rand(obj));