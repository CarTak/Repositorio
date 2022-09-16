alert('Codigo Funcionando!') //mostra mensagem para o usuario
const nomeUsuario = prompt('Olá, usuário, qual o seu nome?')//5 //Mostra uma mensagem e guarda um valor

let num = Number(prompt('Olá, ' + nomeUsuario + ' , Digite algum número, por favor:) '))
console.log(typeof num) //retorna o tipo do valor que a variavel armazena

//operadores de incremento
//const sucessor = num++ // = num + 1

//alert('O sucessor de '+num+' é '+sucessor)
console.log(num++) //5//operador de pós-incremento
console.log(num) //6
console.log(++num)//7 //operador de pré-incremento

// operadores de decremento
console.log(num--) // 7 // operador de pós-decremento
console.log(num) //6
console.log(--num) //5 // operador de pré-decremento
