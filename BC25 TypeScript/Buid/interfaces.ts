/* let pessoa = {
    nome: 'Pietro',
    idade: 22,
    altura: 1.8,
    cpf:'111.111.111-11',
    solteiro: false,
    habilidades: ['Java','Angular','Typescript','Node.js','Spring Boot'],
    endereco: {
        rua: 'Rua Feliz',
        numero: 567,
        estado: 'CE',
        complemento: 'Sem Complemento',
        CEP: "123000-000"
    }
}

let pessoa2 = {
    nome: 'Pietro',
    idade: 22,
    altura: 1.8,
    cpf:'111.111.111-11',
    solteiro: false,
    habilidades: ['Java','Angular','Typescript','Node.js','Spring Boot'],
    endereco: {
        rua: 'Rua Feliz',
        numero: 567,
        estado: 'CE',
        complemento: 'Sem Complemento',
        CEP: "123000-000"
    }
    rg: '193817938719'
}
*/

interface Endereco {
    rua: string
    numero: number
    estado: string
    complemento: string
    cep: string
}

interface Pessoa {
    nome: string
    idade: number
    altura: number
    cpf: string
    solteiro: boolean
    habilidades: String[]
    endereco: Endereco
    rg: string
    cumprimentar(): void // retorna um valor vazio
}

const p: Pessoa = {
    altura: 1.9,
    nome: 'Faustão',
    idade: 12,
    cpf: '222.222.222-22',
    rg: '654665412-35',
    solteiro: true,
    habilidades: ['HTML'],
    endereco: {
        rua: 'Rua Bacana',
        cep: '123000-000',
        complemento: 'Apartamento',
        estado: 'PE',
        numero: 789
    },
    cumprimentar() {
        console.log('Saudações, meu nome é ' + this.nome)
    },
}

const p2: Pessoa = {
    nome: 'Paula',
    altura: 1.7,
    cpf: '222.222.222-22',
    endereco: {
        estado: 'CE',
        rua: 'Rua no ceará',
        complemento: 'Complemento nao sei',
        numero: 607,
        cep: '444000-000'
    },
    rg: '0980938219038',
    solteiro: false,
    cumprimentar() {
        console.log('Olá para todos! prazer em conhecê-los')
    },
    habilidades: ['CSS', 'Angular'],
    idade: 24
}