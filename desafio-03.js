//leio a entrada do usuario
let linhas = parseInt(gets());

//faço a iteração de 1 ao numero informado
for (let i = 1; i <= linhas; i++) {
    let X = (i * i); //calculo o quadrado
    let Y = (i * i * i); //calculo o cubo

    print(i, X, Y); //print numero, quadrado, cubo
}