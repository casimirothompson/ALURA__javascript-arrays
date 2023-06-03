// aqui temos as matrizes, é uma forma acessar uma variavel que tem/é 2 arrays e ai vc precisa acessar os itens da 1° ou segunda array
//
//
//
//

const alunos = ["Jõao", "Juliana", "Ana", "Rodrigo"];
console.log(alunos) // acessando array alunos

const medias = ["1", "4", "6", "9"];
console.log(medias) // acessando array de medias

const listaDeAlunosEMedias = [alunos, medias];
console.log(listaDeAlunosEMedias); // acessando array de lista de alunos e medias

console.log(`lista de alunos: ${listaDeAlunosEMedias[0]}`) // acessando array de alunos
console.log(`lista de medias: ${listaDeAlunosEMedias[1]}`) // acessando array de medias
console.log(`lista de alunos e medias: ${listaDeAlunosEMedias[0][0]}`); // acessando o indice 0 da array de alunos
console.log(`aluna: ${listaDeAlunosEMedias[0][1]}`); // acessando o indice 1 da array de alunos
console.log(`a nota da aluna ${listaDeAlunosEMedias[0][2]} é ${listaDeAlunosEMedias[1][2]}`); // acessando o inice 2 da array de medias