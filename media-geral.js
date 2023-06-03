const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaPython = [6, 5, 8, 9, 5, 6]
const salaJava = [7, 3.5, 8, 9.5]

function calculaNota(notasDaSala){
    const somaDasSalas = notasDaSala.reduce((acumulador, elemento) => {
        return acumulador + elemento;
    }, 0);

    const media = somaDasSalas / notasDaSala.length;

    return media;
}

console.log(calculaNota(salaJs))
console.log(calculaNota(salaPython))
console.log(calculaNota(salaJava))

/*
a logica é que no reduci(), temos novamente a callback, os parametros da callback é (acumulador, elemento) => {codigo}, 1° do acumulador
o acumulador vai receber valores (os elementos) da array sala.. esse acumulador começa com o valor 0, e o reduce() tem que ter um return
*/