// for é tipo um metodo das arrays que executa uma função de looping/repetição.
// ele tem 3 parametros e TEM que ter senão bug o browser ou o pc
// o 1° é o valor inicial do indice1 (looping 1)
// o 2° é a condição de parada do looping
// o 3° é oq acontece de mudança no looping

let notas = [10, 6.5, 8, 7.5, 32, 2, 3,4];

let somaDasNotas = 0;

for(let indice = 0; indice < notas.length; indice++){
    somaDasNotas += notas[indice];
}

let media = somaDasNotas / notas.length;
console.log(`a media é ${media}`);