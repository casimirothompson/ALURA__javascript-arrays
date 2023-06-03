//callbacks podem ser usadas de varias formas, são as "chamada de volta", e tem alguns metodos de arrays que são obrigatorias o uso delas como no exemplo;
// o primeiro forEach usa callback, uma função normal com 2 parametros, onde o primeiro é o elemento da array, e o segundo é o indice.
// no segundo foreach tbm, porem é uma arrow function, porem executando a mesma função.
// no terceiro exemplo é diferente, criamos uma função fora do parametro do foreach, essa função tem seus parametros, e no foreach so executamos a função
//sem faze uso do () no final (senao da problema)

const nomes = ["evaldo", "mari", "Camis"];

///////////////////////////////////

nomes.forEach(function(nome, indice){
    indice++
    console.log(`codigo1, nome da rodada ${indice} é: ${nome}`);
});

///////////////////////////////////

nomes.forEach((nome, indice) => {
    indice++
    console.log(`codigo2, nome da rodada ${indice} é : ${nome}`);
})

///////////////////////////////////

function imprimeNome(nome, indice){
    indice++
    console.log(`codigo v3, nome da rodada ${indice} é: ${nome}`)
}

nomes.forEach(imprimeNome)