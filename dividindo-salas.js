const alunos = ["Jão", "Ana", "Lara", "Guilherme", "Fabiana", "Carlos", "Bia", "Isabela", "Renan", "Daisy", "Juliana", "Caio", "Marjorie", "Aline", "Andre", "Paulo", "Vivian", "vinicius", "renata", "camilo",]


const sala1 = alunos.slice(0, 10); // inicia no indice 0 e vai ate o 9, quando chega no 10 ele não conta.
const sala2 = alunos.slice(10); // se não houver o segundo parametro, não tem fim, vai ate o fim da lista.
console.log(sala1);
console.log(sala2);

const sala3 = alunos.slice(0, alunos.length / 2) // começa no indice 0 e vai ate a metade da quatidade total de elementos (no caso, total é 20, metade é 10, vai ate o indice 9 [pois não conta o indice 10...])
console.log(sala3);