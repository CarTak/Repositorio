import { Injectable } from '@angular/core';

/* providedIn informa onde o serviço será fornecido */
/* 
 A idéia de um serviço no Angular
 é encapsular alguma logica que pode
 ser utilizada em varios locais da sua
 aplicação
*/

interface Cliente {
  nome: string
  sobrenome: string
  telefone: string
  id: number
  email: string
  cpf: string
}

/*  
C -> Create
R -> Read
U -> Update
D -> Delete
*/

@Injectable({
  providedIn: 'root' // 'root' faz referência ao appModule
})
export class ClientesService {

  private clientes: Cliente[] = [
    {
      nome: 'Frederico',
      sobrenome: 'Alves',
      cpf: '11111111111',
      email: 'frealves@gmail.com',
      telefone: '40028922',
      id: 1
    },
    {
      nome: 'José',
      sobrenome: 'Almir',
      cpf: '22222222222',
      email: 'jose.almir@soulcodeacademy.org',
      telefone: '40028922',
      id: 2
    },
    {
      nome: 'Renato',
      sobrenome: 'Pereira',
      cpf: '33333333333',
      email: 'renato.pereira@soulcodeacademy.org',
      telefone: '40028922',
      id: 3
    }
  ] 

  constructor() { }

  listarClientes(): Cliente[] {
    /* Toda a logica para acessar a api e pegar os dados */
    return this.clientes
  }

  listarClientePeloId(id: number): Cliente | undefined{
    /* o metodo find() dos arrays serve para procurar algum valor
        dentro do array
        
        é necessario que se passe como parametro do metodo find() uma fução.
        Essa função sera utilizado dentro do metodo para procurar um valor. A
        função que sera passa DEVE retornar sempre um valor booleano
        
        o find assume que o 'c' é do cliente por causa do this.cliente
        (parameter) c: Cliente
        */
      /*  SELECT * FROM clientes WHERE id = 2 */

    const clienteEncontrado = this.clientes.find((c) => {
      /* c.id (property) Cliente.id: number */
      return c.id == id
    })
    return clienteEncontrado
  }  
  
}
