/*
10. Uma Cia de pulverização utiliza avião para pulverizar lavouras. Os custos de
pulverização dependem do tipo de praga e da área a ser contratada conforme a tabela:
Tipo 1 – ervas daninhas R$ 50,00 por acre;
Tipo 2 – gafanhotos R$ 100,00 por acre;
Tipo 3 – broca R$ 150,00 por acre;
Tipo 4 – todos acima R$ 250,00 por acre.
Se a área a ser pulverizada for superior a 1000 acres, o fazendeiro tem um desconto de
5%. Em adição, qualquer fazendeiro cujo custo for maior do que R$ 750,00 tem um
desconto de 10% sobre o valor que ultrapassar os R$ 750,00. Caso ambos os descontos se
aplicam o da área é calculado antes. Fazer um algoritmo que leia: o tipo de pulverização
(1 a 4) e área a ser pulverizada; e imprima o valor a ser pago.
*/
const mensagem = `
Qual o tipo de pulverização você deseja fazer?
    1 - Ervas daninhas
    2 - Gafanhotos
    3 - Broca
    4 - Todas aplicações`
const tipo = parseInt(prompt(mensagem))
const area = parseInt(prompt('Informe o tamanho da área a ser pulverizada (em acres):'))
let preco = 0
let opcao = ''
switch(tipo){
    case 1:{
        opcao='Ervas daninhas'
        if (area > 1000){
            preco = (area * 50)*0.95
            if (preco > 750) {
                preco = preco * 0.9
            }
        }else {
            preco = area * 50
        }
    }
    break;
    case 2:{
        opcao='Gafanhotos'
        if (area > 1000){
            preco = (area * 100)*0.95
            if (preco > 750) {
                preco = preco * 0.9
            }
        } else {
            preco = area * 100 
        }
    }
    break;
    case 3:{
        opcao='Broca'
        if (area > 1000){
            preco = (area * 150)*0.95
            if (preco > 750) {
                preco = preco * 0.9
            }
        }else {
            preco = area * 150
        }
    }
    break;
    case 4:{
        opcao='Todas aplicações'
        if (area > 1000){
            preco = (area * 250)*0.95
            if (preco > 750) {
                preco = preco * 0.9
            }
        } else {
            preco = area * 250
        }
    }
    break;
    default:{
        alert('Opção inválida')
    }
}
document.write(`O valor da pulverização da área de ${area} hectares para ${opcao} é de R$ ${preco},00`)