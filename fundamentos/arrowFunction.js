let dobro = function (a) {
    return 2 * a;
}
console.log(dobro(1));

dobro = (a) => {
    return 2 * a;
}
console.log(dobro(1));

dobro = a => 2 * a; // return iplicíto
console.log(dobro(Math.PI));

let ola = function () {
    return 'Olá';
}
console.log(ola);

ola = () => 'olá';
//ola = _ => 'olá';
console.log(ola);
