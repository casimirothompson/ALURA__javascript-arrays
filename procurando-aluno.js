//metodo includes() procura determinado elemento dentro de um array e ver se é true ou false, o parametro é o dado que vc esta procurando
//indexOf(elemento) procura pelo indice de determinado elemento, seu parametro é o nome do elemento que vc quer saber o indice

const alunos = ["João", "Ana", "Juliana", "Caio"];
const medias = ["10", "8", "6.5", "4.5"];

const listaDeAlunosEMedias = [alunos, medias];

/*
function exibeNomeENota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        console.log(`aluno ${aluno} encontrado!`);

        const indice = listaDeAlunosEMedias[0].indexOf(aluno); // esse indice acessa a array alunos da listadealunos.... e procura pelo indice/posição do "aluno"
        const mediaDoAluno = listaDeAlunosEMedias[1][indice]; // essa media aluno acessa a array medias e procura pelo numero do indice informado na expressão anterior...
        console.log(`a media do aluno ${aluno} é ${mediaDoAluno}`);
    }else{
        console.log(`aluno ${aluno} não encontrado ou não cadastrado no sistema.`)
    }
} 
*/

// OUTRA FORMA DE ESCREVER O CODIGO CRIANDO OUTRAS CONST PARA SE TER UMA LEITURA MELHOR.
/*
function exibeNomeENota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        const alunos = listaDeAlunosEMedias[0];
        const medias = listaDeAlunosEMedias[1];

        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];

        console.log(`aluno ${aluno} encontrado no sistema, sua nota no bimestre é ${mediaDoAluno}`);
    }else{
        console.log(`o aluno(a) ${aluno} não foi ou não esta no sistema`);
    }
}
*/

// OUTRA VERSÃO AINDA MELHOR:
/*
function exibeNomeENota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];

        console.log(`aluno ${aluno} encontrado no sistema, sua nota no bimestre é ${mediaDoAluno}`);
    }else{
        console.log(`o aluno(a) ${aluno} não foi ou não esta no sistema`);
    }
}
*/

exibeNomeENota("Caio");
exibeNomeENota("Miro");