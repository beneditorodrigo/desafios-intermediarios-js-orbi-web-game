//leio o numero do usuario
let n = parseInt(gets());

// EXPLICANDO ESSE TRECHO
//eu testo de o número é impar, se for eu retiro -1 pra ele se tornar o par anterior
//com isso, eu evito ficar testando dentro do for de exibição
//assim mostro so os pares até o número informado, sem precisar testar toda vez no for

if (n % 2 != 0) {
    n = n - 1;
}

//note que o contador "i" é incrementado de 2 em 2 (sempre indo para o próximo par).
for (let i = 2; i <= n; i += 2) {
    console.log(i);
}