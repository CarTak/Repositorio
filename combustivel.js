const mensagem = `
Informe o tipo de combustivel:
Digite A para alcool
Digite G para gasolina
`
const tipoCombustivel = prompt(mensagem)


const qtdCombustivel = prompt('Com quantos litros vai abastecer?')

if (tipoCombustivel == 'A' && qtdCombustivel <= 25) {
    const precoFinal = (qtdCombustivel * 1.9)*0.98
    alert(`O preço final do pagamento é ${precoFinal.toFixed(2)} reais`)
} else  if (tipoCombustivel=='A') {
            const precoFinal = (qtdCombustivel * 1.9)*0.96
            alert(`O preço final do pagamento é ${precoFinal.toFixed(2)} reais`)
    }else if (tipoCombustivel == 'G' && qtdCombustivel <= 25){
             const precoFinal = (qtdCombustivel * 2,7)*0.97
             alert(`O preço final do pagamento é ${precoFinal.toFixed(2)} reais`)
         } {
             const precoFinal = (qtdCombustivel * 2.7)*0.95
             alert(`O preço final do pagamento é ${precoFinal.toFixed(2)} reais`)

         }



