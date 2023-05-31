const notas = [10, 6, 8];
console.log(notas);

let media = (notas[0] + notas[1] + notas[2]) / notas.length;

console.log(media);

notas.push(8);
console.log(notas);

media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media);