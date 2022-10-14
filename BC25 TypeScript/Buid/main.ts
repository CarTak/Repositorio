// tipagem no TypeScript

// tipagem implícita
let username = 'shaolin_matador_de_porco'
username = 'flavioDoPneu'

// tipagem explícita
let pi: number = 3.1415
let logado: boolean = true

// union types
let rg: number | string = 201912293202
rg = '00930948502'

let generico: any = []
generico = {
  a: '',
  b: 8,
  c: true
}
generico = 'Eu sou genérico'
generico = 6.89

const listaDeNomes: string[] = ['João Pedro', 'César', 'Vitor', 'Cláudia', 'Vitória', 'Larissa']
listaDeNomes.push('Roberta')

const notas: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// notas.push('iajoil')

const valores: Array<string | number> = ['lsijfls', 77, '098w094u2', '092380293840', 928094]
const arr: Array<boolean> = [true, false, false, false, true, true, false]
const lista: Array<any> = [1, true, {}, [], 'lsjdnflsd']
const lista2: any[] = [1, true, {}, [], 'lsjdnflsd']
