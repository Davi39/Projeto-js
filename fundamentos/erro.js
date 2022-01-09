function tratarErroElancar(erro){
    throw new Error('Vai se fuder')
}

function imprimir(obj) {
    try {
    console.log(obj.name.toUpperCase())
    }catch (e){
        tratarErroElancar(e)
    } //finally {
        //console.log('AAAAAAAAAAA')
    //}
}
const obj = { name : 'Roberto'};
imprimir(obj);

//const obj = { nome : 'Roberto'};
//imprimir(obj);