const mensagem = `
Informe o seu sexo:
Digite H para sexo masculino
Digite F para sexo feminino
`
const sexo = prompt(mensagem)
const altura = parseFloat(prompt('Qual é a sua altura?'))

if (sexo=='H'){
    const pesoIdeal=(72.7*altura)-58
    alert(`O peso ideal é ${pesoIdeal.toFixed(2)} kilos`)
} {
    const pesoIdeal=(62.1*altura)-44.7
    alert(`O peso ideal é ${pesoIdeal.toFixed(2)} kilos`)

}