// o metodo .map() serve pra executar uma função que precisa de um return. 
// a diferença dela do forEach é que forEach não da return mas o map sim, e precisa.
// no exemplo ele usa como parametro o elemento da array e executa a função de deixar as letras das strings em maiusculas

const alunos = ["ana JULIA", "CAIO vinicius", "bia silva"];

let nomesPadronizados = alunos.map((aluno) => {
    return aluno.toUpperCase();    
})

console.log(nomesPadronizados);