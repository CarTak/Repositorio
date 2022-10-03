/*
criar uma função responsável por mostrar o alerta na tela
*/

function mostrarAlerta() {
    /* 
    o objeto document é um objeto que faz uma respresentação 
    do HTML do seu site dentro Javascript
    */
   /*
   getElementById serve para recuperar um elemento HTML pelo seu id
   */
    /*
    A propriedade classList retorna uma array com todas as classes CSS que
    um elemento possui
    */
    /*
    classList.add serve para adicionar novas classes dinamicamente
    dentro de um elemento HTML
    */
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.add('mostrar')
}

function fecharAlerta() {
    /*
    cassList.remove() remove uma classe dinamicaente de dentro
    de um elemento HTML
    */
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.remove('mostrar')
    
}
/*
criar uma função responsável por mostrar o alerta na tela
*/

const btnMostrar = document.getElementById('mostrar')
const btnFechar = document.getElementById('fechar')

/*
addEvenListener é um método que te permite
ouvir eventos do HTML pelo Javascript
*/
/*
Se eu precisar passar uma função como parâmetro para outra
eu passo a referência dela, ou seja, a função sem os parênteses
na frente
*/
btnMostrar.addEventListener('click',mostrarAlerta)
btnFechar.addEventListener('click',fecharAlerta)

var counterVal = 0;

function somaValor() {
    contValor(++counterVal);
}

function contValor(val) {
    document.getElementById("contador").innerHTML = val;
}
