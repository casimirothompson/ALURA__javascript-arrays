// for of é tipo um metodo que passa por TODOS os elementos e executa uma função dentor das {}
// no exemplo, pra cada item (chamado de elemento no codigo) da array notas, ele executa a função das contas.
// o let elemento é igual a um indice da array nota

let notas = [10, 6.5, 8, 7.5, 32, 2, 3,4];

let somaDasNotas = 0;
let subtraçãoDasNotas = 0;
let multiplicacaoDasNotas = 0;
let divisaoDasNotas = 0;

for(let elemento of notas){
    somaDasNotas =+ elemento;
    subtraçãoDasNotas -= elemento;
    multiplicacaoDasNotas *= elemento;
    divisaoDasNotas /= elemento;
}
console.log(somaDasNotas);
console.log(subtraçãoDasNotas);
console.log(multiplicacaoDasNotas);
console.log(divisaoDasNotas);