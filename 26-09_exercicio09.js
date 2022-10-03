/*
9. Leia a velocidade máxima permitida em uma avenida e a velocidade com que o motorista
estava dirigindo nela e calcule a multa que uma pessoa vai receber, sabendo que são
pagos: 
    a) 50 reais se o motorista estiver ultrapassar em até 10km/h a velocidade permitida
    (ex.: velocidade máxima: 50km/h; motorista a 60km/h ou a 56km/h); 
    b) 100 reais, se o motorista ultrapassar de 11 a 30 km/h a velocidade permitida. 
    c) 200 reais, se estiver  acima de 31km/h da velocidade permitida.
*/

let velocidadeMaxima = parseInt(prompt('Informe qual a velocidade maxima permitida'))
let velocidade = parseInt(prompt('Informe qual a velocidade detectada'))
if (velocidade >= (velocidadeMaxima + 10)){
    if (velocidade >= (velocidadeMaxima + 31)){
        document.write(`A multa foi de R$ 200,00 e a velocidade ultrapassou o limite em ${velocidade - velocidadeMaxima} km/h`)
    }else {
        if (velocidade <= (velocidadeMaxima + 11)) {
            document.write(`A multa foi de R$ 50,00 e a velocidade ultrapassou o limite em ${velocidade - velocidadeMaxima} km/h`)   
        }else {
            document.write(`A multa foi de R$ 100,00 e a velocidade ultrapassou o limite em ${velocidade - velocidadeMaxima} km/h`)
        }
    }

} else {
    document.write(`Este motorista não cometeu nenhuma infração`)
}