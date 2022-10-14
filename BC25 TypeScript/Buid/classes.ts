class Cachorro {
    /*
    * atributos ou propriedades
    */
  /*  nome: string 
    raca: string
    cor: string
    idade: number
    peso: number
    altura: number
    morde: boolean 
    vacinado: boolean 
    pedigree: boolean */
    /**
     * método construtor
     * 
     * serve para criar um novo objeto da classe, possamos receber valores
     * para que a  classe utilize-os
     * 
     * se o programador não criar o método constructor, a própria Linguagem irá
     * gerar um método construtor padrão
     * 
     * no Javascript/Typescript, se pode ter apenas um único método constructor
     */

    constructor(
        public nome: string, 
        public raca: string, 
        public cor: string, 
        public idade: number, 
        public peso: number, 
        public altura: number, 
        public morde: boolean, 
        public vacinado: boolean, 
        public pedigree: boolean
        ) {
        /**
         * this faz referencia a própria classe dentro dela mesma
         */
       /* this.nome = nome
        this.raca = raca
        this.cor = cor
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.morde = morde
        this.vacinado = vacinado
        this.pedigree = pedigree */
    }

    somar(a: number, b: number): number {
        return a + b
    }
}

/**
 * Objeto é uma instância de uma classe
 */
 // precisa ser atribuido a um objeto (c) para poder acessar
let c = new Cachorro('Mr poze','Pitbull','Branco', 3, 50, 0.7, true, true, true, true)
let c2 = new Cachorro('Justin Bieber')
console.log(c.nome) //Luki
console.log(c2.nome) //Luki

