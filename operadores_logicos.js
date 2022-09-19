/**
 * Operadores Lógicos
 */

// E

// V -> Verdadediro
// F -> Falso

/**
 * V V -> V
 * F V -> F
 * V F -> F
 * F F -> F
 */

// média precisa ser maior ou igual 7 e preciso ter, no minimo 80% de presença
const media = (3, 5 + 6 + 10) / 3
const presenca = 0.7

console.log(media >= 7 && presenca >= 0.8) // False

//operador Ou

/**
 * V V -> V
 * F V -> V
 * V F -> V
 * F F -> F
 * >
*/
console.log(4 > 7 || 3 < 2) // True
console.log(5 > 3.5 || 7 > 8) // true

const estado = 'CE'

console.log(estado == 'SP' || estado == 'MG') //false

const idade = 15

console.log(idade >= 16 || idade < 60)

// Operador Não

/**
 * NOT V -> F
 * NOT F -> V
 */

const resultado = 5 < 3 //false

console.log(!true) //True
console.log(!false) //False

const logado = false

if (!logado) {
    console.log('você não pode acessar o meu site, sai daqui')
}
