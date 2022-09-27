/**
 * Arrays ou Vetores é um tipo especial 
 * armazenar diversos valores em apenas um local
 */

//Criando um Array
let arr = new Array()
let arr3 = [] //igual ao anterior e é a mais usada
let arr2 = new Array(5)
/**
 * Cada valor de um array é separado por virgula
 * 
 * Dentro de um array eu posso ter varios tipos de dados
 * 
 * Posições de uma array
 * -> Cada posição é reprentada por um número
 * -> A primeira posição de um Array é a posição 0
 * 
 * Sempre que você tentar uma posição que não existe
 * ele te informará o valor undefined
 */
let arr4 = [10, 15, 9.8, 'Eu sou um texto dentro de um array','Olá, mundo', true, false, false]
console.log(arr4[6])
arr4[6] = 'Outro texto'
console.log(arr4[6])
console.log(arr4[8])
arr4[8]='Agora a posiçao 8 existe dentro de arr'
console.log(arr4[8])

const Lista= ['João', 'Maria', 'Paulo', 'Pedro', 'Vitória', 'Augusto', 'Fabio', 'Larissa']
console.log(Lista)
Lista.push('Roberta') // adiciona um valor no final do array
console.log(Lista)
Lista.unshift('Gustavo') // Adiciona um valor no inicio do array
console.log(Lista)
Lista.pop() //remove o último valor do array
console.log(Lista)
Lista.shift() //remove o primeiro valor de um array
console.log(Lista)
console.log(Lista.concat('Júlio'))//cria um novo array adicionando o valor passado como parãmetro
console.log(Lista)
console.log(Lista.join('-> ')) //João -> Maria -> Paulo ->
