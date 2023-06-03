//o metodo pop() tira o ultimo elemento do array, no exemplo abaixo tirou os 2 ultimos elementos/itens.

const notas = [10, 6, 8, 5.5, 10];
console.log(notas);
notas.pop();
notas.pop();
console.log(notas);

////////////////////////

const media = (notas[0] + notas[1] + notas[2]) / notas.length;
console.log(media);