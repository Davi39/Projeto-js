/* 
v e v -> v
v e f -> f
f e f -> f

v ou ? -> v
v ou f -> v
f ou f -> f

v xor v -> f
v xor f -> v
f xor v -> v
f xor f -> f

!v -> f
!f -> v

*/

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    const comprarTv30 = trabalho1 != trabalho2; // simula um ou exclusivo
    const manterSaudavel = !comprarSorvete; //operador unário 

    return { comprarSorvete, comprarTv50, comprarTv30, manterSaudavel};
}

console.log(compras(true, true));