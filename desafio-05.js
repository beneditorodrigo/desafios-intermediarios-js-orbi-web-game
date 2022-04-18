//quantidade de notas e matriculas que serao informadas
let line = gets();

//declaracao de variaveis auxiliares necessarias
let matricula;
let maiorNota = 0;
let nota;

//laço para percorrer quantidade de notas e matriculas
for (var i = 0; i < line; i++) {
    //leio matricula e nota
    entrada = gets();
    //split para separar nota e matricula
    entrada = entrada.split(" ");
    //recebo a ultima nota informada
    nota = parseFloat(entrada[1]);
    //testo de a nota informada é maior que a maior nota anteriormente informada
    if (nota > maiorNota) {
        //se a nota for maior, a matricula recebe a matricula atual
        matricula = entrada[0];
        //e maior nota vira a nota atual, que é maior que as anteriores
        maiorNota = nota;
    }
}

//se a maior nota encontrada for maior que 8.0 e mostro a matricula referente a essa nota
if (maiorNota >= 8) {
    print(matricula)
} else {
    //caso contrario, se nota for menor que 8.0 digo que não houve nota suficiente
    print("Minimum note not reached")
}