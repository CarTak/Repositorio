/* 
Funções são blocos fundamentais em Javascript. Uma função é um procedimento de Javascript
- um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você
defini-la em algum lugar no escopo do qual você quiser chamá-la.
*/

/*
Parâmetros
São valores que passamos para as funções, para que elas utilizem esses valores dentro delas
*/

// passar um valor como parâmetro para mostrá-lo dentro do alert
function cumprimentar(mensagem, repetir = 1) {
    for (let i = 1; i <= repetir; i++) {
        alert(mensagem.toUpperCase())
    }    
}

cumprimentar('Oá, Mundo',3)
cumprimentar('Eu gosto muito do Javascript')
cumprimentar('Javascript sola o C#')

function soma(num, num2) {
    /*
    Return serve para enviar o resultado da execução daquela função
    */
    return num + num2
}

let resultado = soma(4, 7)
console.log(`O valor da variavel resultado é ${resultado}`)
soma(7.5, 7)
soma(2, 5)
soma(8, 3)

function maiorValor(a, b){
    if (a > b) {
        return a
    }else {
        return b
    }
}

console.log(maiorValor(5, 10))

const num1 = parseInt(prompt('Informe o primeiro número'))
const num2 = parseInt(prompt('Informe o segundo número'))

alert(`O maior número entre esses é ${maiorValor(num1,num2)}`)


/*
criem uma função que gera o resultado de uma equação do segundo grau
ax² + bx + c = 0
delta = b² - 4ac
b = -b +- raiz de delta/ 2a
*/

function equacaoSegundoGrau(a, b, c) {
    const delta = b ** 2 - 4 * a * c
    /* 
    Math é um objeto do Javascript que possui métodos para fazer calculos matemáticos
    */
    const raizDelta = Math.sqrt(delta) // pose ser também delta ** 0.5
    const x1 = (-b + raizDelta)/(2*a)
    const x2 = (-b - raizDelta)/(2*a)

    return [x1, x2] 
}

console.log(equacaoSegundoGrau(1, -1, -12)) // (4, -3)