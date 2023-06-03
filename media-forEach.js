// o forEach é um metodo que usa uma callback em seu parametro. ele executa uma função que tem parametros
// o primeiro parametro da callback é o elemento, o segundo é o indice
// no exemplo abaixo o o parametro "nota" são os itens da array notas
// o indice é o indice da array notas tbm.

let notas = [10, 6.5, 8, 2, 3,4];

let somaDasNotas = 0.

notas.forEach(function (nota, indice){
    // console.log(nota);
    somaDasNotas += nota;
    console.log(`o indice agora é ${indice}`)
})

let mediaDasNotas = somaDasNotas / notas.length;
console.log(`nota total é ${somaDasNotas} e a media é ${mediaDasNotas.toFixed(1)}`)