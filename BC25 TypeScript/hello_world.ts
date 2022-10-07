// tipagem no TypeScript

//tipagem implicita
// uma utilizado ele assume o tipo que foi utilizado na primeira vez
let username = 'shaoLin_matador_de_porco'
username = 'FlavioDoPneu'

//tipagem explicita
let pi: number = 3.1415
pi = 6.2830

let logado: boolean = true

//union types
// com o | ele aceita mais de um tipo de variável
let rg: number | string | boolean= 201912293202
rg = '201912293202'

//any aceita qualquer tipo
let generico: any = []
generico = {
    a:'',
    b: 8,
    c: true
}
generico = 'Eu sou generico'
generico = 6.89

//se você for utilizar uma tabela tem que colocar [] após o string
const ListaDeNomes: string[] = ['João', 'Pedro','Cesar','Vitor','Claudia'] 
ListaDeNomes.push('Roberto')

const notas: number[] = [1, 2, 3, 4, 5, 6, 7]

//Utilizamos o Array<string | number> quando formos utilizar mais de um tipo de variável na tabela
const valores: Array<string | number> = ['abcd',77 ,'uwejegd985', 98746]
const arr: Array<boolean> = [true, false, false, true, true]
const lista: Array<any> = [123,'Pedro',true,[],{}]
const lista2: any[] = [123,'Pedro',true,[],{}]

