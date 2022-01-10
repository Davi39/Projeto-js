function area (largura, altura){
    const area = largura * altura;
    if ( area > 20){
        console.log(`Valor passou : ${area}m2.`);
        //return console.error();;
    }else{
        return area;
    }
}

console.log(area(2, 2));
console.log(area(2));
console.log(area());
console.log(area(2,2,2,5,6,7));
console.log(area(5, 5));