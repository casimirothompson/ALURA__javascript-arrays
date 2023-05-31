const alunos = ["Jõao", "Ana", "Caio", "Lara", "Marjorie", "Leo"]
console.log(alunos); // lista normal completinha

alunos.splice(1, 2); //splice remove elemento de arrays, o 1° parametro indica o indice inicial, o 2° indica a quantidade de elementos que deseja tirar
console.log(alunos);

alunos.splice(1, 2, "Rodrigo"); // tambem da pra tirar elemento e adicionar outro no lugar dessa maneira
console.log(alunos);