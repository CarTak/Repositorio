// criar um novo array
const nums = []

//criar um loop que execute 6 vezes
for (let i = 1; i <= 6; i++) {
    const n = parseInt(prompt(`Digite o ${i}° numero`))
    nums.push(n)
}

//separar os pares dos impares
const pares = []
const impares = []

// percorrer o array com os numeros informados
// criar uma variável que guardará os valores de cada posição do array
// o array que iremos percorres

for (let numero of nums) {
    /*
    Separar os valores pares dos impares
    colocando cada valor no seu respectivo array
    */
   if (numero % 2 == 0) {
    pares.push(numero)
   }else {
    impares.push(numero)
   }
}

alert(`Nós temos ${pares.lenght} valores pares: ${pares.join(', ')}`)
alert(`Nós temos ${impares.length} valores impares: ${impares.join(',')}`)