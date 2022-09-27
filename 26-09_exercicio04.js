/*
4. Escreva um programa que leia uma letra e mostre se ela é vogal ou consoante
 */
const consoante = ['b','c','d','f','g','h','i','j','k','l','m','n','p','q','r','s','t','v','x','z','y','w']
const vogais = ['a','e','i','u','o']
const letra = prompt('Digite uma letra')
for (let teste of consoante) {
    if (teste == letra){
        alert(`A letra ${letra} é uma consoante`)
    }
}
for (let teste of vogais) {
    if (teste == letra){
        alert(`A letra ${letra} é uma vogal`)
    }
}
