//algumas funções acabam criando outra, ou copiando a original e criando uma nova pra vc poder mexer sem alterar a original e isso é normal.
// porem quando vc quer somente copiar uma array sem usar metodo, não da pra simplesmente fazer isso atribuindo a array original a uma nova array (novasNotas...)
// por isso usamos o (...array), em uma nova variavel, pois assim ele pega os dados da array original e copia para a nova variavel.
// detalhe, nessa nova variavel (linha-15) da pra alem de usar o [...array] colocar outros dados direto ao inves de usar o push() (coloquei so pra ver que funciona tbm usar o push...)

const notas = [1,2,3,4,5]
notas.push(6,7)

const novasNotas = notas;
novasNotas.push(8,9)

const novasNovasNotas = [...notas,10,11]
novasNovasNotas.push(12,13,14)

console.log(notas, novasNotas, novasNovasNotas)