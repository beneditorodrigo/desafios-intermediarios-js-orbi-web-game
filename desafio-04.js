//leio quantas crianças serão informadas
var participantes = gets();

var criancas;
var array = [];

//laço para ler todas as crianças
for (var i = 0; i < participantes; i++) {
    criancas = gets().split(' ');
    //meu array recebe criancas na posição [1] porque isso é o que me importa (M ou F)
    array.push(criancas[1]);
}

//chamo a funcao de filtrar os meninos e uso .length para conta-los
const meninos = filtraMeninos(array).length;
//chamo a funcao de filtrar as meninas e uso .length para conta-las
const meninas = filtraMeninas(array).length;

//print com a saida de numero de meninos e meninas
print(`${meninos} carrinhos\n${meninas} bonecas`);

//funcao recebendo array para filtrar os meninos 
function filtraMeninos(arr) {
    return arr.filter(function(item) {
        return item === 'M';
    })
}

//funcao recebendo array para filtrar as meninas
function filtraMeninas(arr) {
    return arr.filter(function(item) {
        return item === 'F';
    })
}