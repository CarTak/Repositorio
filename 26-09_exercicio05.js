/* 
5. Crie um código que receba 3 valores do comprimento de um triângulo e depois  
mostre um alert informando se o triângulo é equilátero, isóceles ou escaleno.
*/
const lado1=parseInt(prompt('Insira o comprimento do primeiro lado do triângulo'))
const lado2=parseInt(prompt('Insira o comprimento do segundo lado do triângulo'))
const lado3=parseInt(prompt('Insira o comprimento do terceiro lado do triângulo'))

if (lado1 == lado2){
    if (lado2 == lado3){
        alert('Este triângulo é equilátero')
    }else {
        alert('Este triângulo é isóceles')
    }
}else {
    if (lado2 == lado3){
        alert('Este triângulo é isóceles')   
    }else {
        if (lado1 == lado3) {
            alert('Este triângulo é isóceles')  
        }else {
            alert('Este triângulo é escaleno')
        }
    }
}