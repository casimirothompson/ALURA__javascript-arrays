//filter(elemento, indice) serve para filtrar se o elemento for verdadeiro e exclui elementos falsos

const alunos =["mauro", "ana", "felipe", "jessica"];
const notas = [7.5, 8, 4.5, 6.5];

const reprovados = alunos.filter((aluno, indice) => {
    return notas[indice] < 7;
});

console.log(reprovados)

// nessa logica, pra elemento x (aluno), acessa array de nota no indice x, verifica se é menor que 7, se for true ele da return, se for false entt exclui
// se vc não for usar o primeiro parametro (como foi nesse exemplo, so usamos o indice que é o 2° parametro...) vc pode substituir "aluno" por "_" e não tem problema