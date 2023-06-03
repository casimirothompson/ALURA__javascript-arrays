// new Set(array) é basicamente um jeito de não causar repetições, pegar somente um valor e excluir qualquer repetição. a baixo temos 2 modos de fazer
// como parametro do new Set() vc pode colocar uma array mesmo [elementos...] ou o nome da variavel array;

const nomes = ["maria", "joao", "miro", "pedro", "maria", "pedro", "ana", "clara", "joao"]
/*
const meuSet = new Set(nomes);
console.log(meuSet);

const nomesAtualizados = [...meuSet];
console.log(nomesAtualizados)
*/

////////////////////////////////////////////

const nomesAtualizados = [...new Set(nomes)];
console.log(nomesAtualizados);