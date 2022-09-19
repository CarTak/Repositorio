/**
 * operadores de comparação
 */

// verdadeiro (true) ou falso (false)

// igualdade
const msg = "Eu sou uma mensagem"
const msg2 = "Eu sou outra mensagem"

console.log(msg == msg2) // FAlse

const num=5
const num2=5

console.log(num==num2) //true

let a=78
let b='78'

console.log(a==b) //True

//Identicos
console.log(a===b) //false

//Diferentes

console.log(msg != msg2) // True
console.log( a != b) //False
console.log(a !== b) //True

a = 56
b = 30
let c = 500
let d = 500
console.log(a > b) //true
console.log(c >= d) // true
console.log(3 > 6) //false

console.log(3 < 7.5) //True
console.log(7.5 < 7.5) // false
console.log(8 <= 8) //true