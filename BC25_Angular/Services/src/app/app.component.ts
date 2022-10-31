import { Component } from '@angular/core';
import { ClientesService } from './services/clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Services';

  /* o public cService: ClientesService está
     fazendo injeção de dependência dentro do componente
     feito sempre pelo construtor()
  */
  constructor(
    public cService: ClientesService
  ) {}
  // ciclo de vida executado quendo o seu componente
  // é renderizado na tela
  ngOnInit(): void{
    const clientes = this.cService.listarClientes()
    console.log(clientes)
  }
}
