//declarando variaveis que irao contar os itens
let valoresPares = 0;
let valoresImpares = 0;
let valoresPositivos = 0;
let valoresNegativos = 0;

//for para iterar as 5 vezes
for (var i = 0; i < 5; i++) {
    //leio o valor do usuario a cada iteracao
    const valorInformadoPeloUsuario = parseInt(gets());

    //testo se o resto da divisao por 2 é igual a zero
    //se for então é par, caso contrário é impar
    if (valorInformadoPeloUsuario % 2 === 0) {
        valoresPares++;
    } else {
        valoresImpares++;
    }

    //só deixo entrar nesse laço se for diferente de 0
    //se for 0 nem é positivo e nem negativo, então não entra no laço
    if (valorInformadoPeloUsuario != 0) {
        if (valorInformadoPeloUsuario > 0) {
            valoresPositivos++;
        } else {
            valoresNegativos++;
        }
    }
}

console.log(`${valoresPares} par(es)`);
console.log(`${valoresImpares} impar(es)`);
console.log(`${valoresPositivos} positivo(s)`);
console.log(`${valoresNegativos} negativo(s)`);