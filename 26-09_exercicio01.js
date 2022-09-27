/*
1. Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
mostrar :
    a. A menor altura do grupo;
    b. A maior altura do grupo;
*/
let altura = []
for (let i = 1; i <= 15; i++) {
    let n = parseFloat(prompt(`Insira a altura da ${i}° pessoa`))
    altura.push(n)
}
let maiorAltura = altura[1]
let menorAltura = altura[1]

for (let variavel of altura) {
    if (variavel > maiorAltura){
        maiorAltura = variavel
    }
    if (variavel < menorAltura){
        menorAltura = variavel
    }
}
document.write(`<p>Das 15 pessoas a mais alta é ${maiorAltura} e a mais baixa é ${menorAltura}</p>`)    
console.log(lista.join(', ' ))