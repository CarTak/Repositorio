/*
7. Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em
P.G. contendo 10 valores.
*/
const valorInicial = parseInt(prompt('Inisira o primeiro valor da PG'))
const razao = parseInt(prompt('Insira a razão dessa PG'))

function PG(V1,razao){
    return valorInicial++ * razao
}

const V1 = valorInicial - 1

for (let i=1; 1<10; i++){
    V1 = valorInicial++
    const valor = PG(v1,razao)
    document.write(`<p> o ${i}° elemento da pg é ${valor} </p>`)
}