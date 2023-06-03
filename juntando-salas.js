// o metodo concat() serve pra concatenar (juntar) 2 array em uma nova atribuição.
// basicamente vc faz array1.concat(array2)

const salaJS = ["Jõao", "Ana", "Caio" ];
const salaPython = ["Lara", "Leo", "Rodrigo"];

const salasUnificadas = salaJS.concat(salaPython);
const salasUnificadas2 = salaPython.concat(salaJS);

console.log(`esta é a sala unificada numero 1: ${salasUnificadas}`);
console.log(`esta é a sala unificada numero 2: ${salasUnificadas2}`);