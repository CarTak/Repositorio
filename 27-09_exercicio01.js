/* 
Crie um algortimo que recebe informações de 15 produtos. Cada produto possui nome, marca, uma foto 
(link de uma imagem da internet), preço unitário e a quantidade de produtos em estoque.
 Ao receber essas informações dos produtos, imprima no HTML essas informações de cada produto 
 e o produto entre o preço e a quantidade de produtos em estoque (preço total).*/


 vendas = {
    nome: [],
    marca: [],
    foto: [],
    precoUnit: [],
    qtd: []
 }
 for (let i = 0; i <= 14; i++) {
    let nom = prompt(`Insira o nome do ${i+1}° produto `)
    vendas.nome.push(nom)
    let marc = prompt(`Insira a marca do ${i+1}° produto`)
    vendas.marca.push(marc)
    let fot = prompt(`Insira a foto do ${i+1}° produto`)
    vendas.foto.push(fot)
    let precoUni = prompt(`Insira o preço unitário do ${i+1}° produto`)
    vendas.precoUnit.push(precoUni)
    let qt = prompt(`Insira a quantidade em estoque do ${i+1}° produto`)
    vendas.qtd.push(qt)
 }
 for (let i = 0; i <= 14; i++) {
    document.write(`O nome do produto é ${vendas.nome[i]},`)
    document.write(` marca ${vendas.marca[i]},`)
    document.write(` cuja foto ${vendas.foto[i]},`)
    document.write(` preço unitário ${vendas.precoUnit[i]},`)
    document.write(` quantidade em estoque é ${vendas.qtd[i]} `)
    document.write(`e o valor em estoque é ${vendas.precoUnit[i] * vendas.qtd[i]}<p>`)
 }
