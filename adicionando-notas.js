//o metodo push() pode adicionar novos elementos para as arrays, mas sempre como um ultimo valor, no ultimo indice.
// o parametro dele é o dado que vc quer adiconar

const notas = [10, 6, 8];
console.log(notas);

let media = (notas[0] + notas[1] + notas[2]) / notas.length;

console.log(media);

notas.push(8);
console.log(notas);

media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media);