// o metodo .map() serve pra executar uma função que precisa de um return. 
// a diferença dela do forEach é que forEach não da return mas o map sim, e precisa.
// no exemplo verifica se é true ou false, se for true executa uma função, se for false executa outra;

const notas = [10, 9.5, 8, 7, 6]

const notasAtualizadas = notas.map( (nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1
});

console.log(notasAtualizadas);