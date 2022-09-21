const altura = parseFloat(prompt('Qual é a sua altura?'))
const peso = parseFloat(prompt('Qual é a sua peso?'))
const imc = peso / (altura**2)
if (imc<=18.5){
    alert(`O seu IMC é ${imc.toFixed(2)} e você está abaixo do peso`)
}else if(imc>=18.5 && imc<=25){
    alert(`O seu IMC é ${imc.toFixed(2)} e você está com o peso ideal`)
}else if(imc>=25 && imc<=30){
    alert(`O seu IMC é ${imc.toFixed(2)} e você está acima do peso`)
}{
    alert(`O seu IMC é ${imc.toFixed(2)} e você está obeso`)
}
