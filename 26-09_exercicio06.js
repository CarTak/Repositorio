/*
6. Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma 
seqüência em P.A. contendo 10 valores.
*/
const an= parseInt(prompt('Insira qual é o último valor de sua PA'))
const penAn= parseInt(prompt('Insira qual é o penúltimo valor de sua PA'))
const razao = an - penAn
const PA = new Array(10)
const a1= parseInt(prompt('Insira qual é primeiro número de sua PA'))
for (let i = 1; i <= 10; i++) {
    const paValor = a1 + (i)*razao
    PA.push(paValor)
}
let cont = 1
for (let valores of PA) {
    document.write(`${cont}° elemento é ${valores}`)
    cont++
} 