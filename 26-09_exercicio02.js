/*
2. Escreva um algoritmo que leia um valor inicial A e imprima o seu fatorial
*/
const valor = parseInt(prompt('Insira o valor a ser fatorado'))
let valorFatorado = 1
for (let i = valor; i >= 1; i--){
    valorFatorado = valorFatorado*i
}
document.write(`O valor da fatoração do número ${valor} é ${valorFatorado}`)