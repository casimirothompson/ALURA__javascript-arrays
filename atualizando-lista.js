//o metodo .splice() remove elementos/itens de uma array e pode adionar outra tbm se quiser
// 1° parametro é o indice onde se deve começar a executar a função
// 2° parametro é a quantidade de elementos que devem ser removidos a partir do indice
// 3° parametro (opcional)é o que voce quer adicionar como elemento apos a retirada dos anteriores

const alunos = ["Jõao", "Ana", "Caio", "Lara", "Marjorie", "Leo"]
console.log(alunos); // lista normal completinha

alunos.splice(1, 2); //splice remove elemento de arrays, o 1° parametro indica o indice inicial, o 2° indica a quantidade de elementos que deseja tirar
console.log(alunos);

alunos.splice(1, 2, "Rodrigo"); // tambem da pra tirar elemento e adicionar outro no lugar dessa maneira
console.log(alunos);