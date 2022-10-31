import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  /**
   * aqui estamos criando o objeto dadosUsuario
   */
  dadosUsuario = {
    nome: '',
    sobrenome: '',
    email: '',
    senha: ''
  }

  enviarForm() {
    alert('Formulátio Enviado!')
  }

}
