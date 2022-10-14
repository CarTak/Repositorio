import { Component } from '@angular/core';

/**
 * templateURL serve para informmar ao componente
 * qual arquivo HTML ele deve mostrar quando o mesmo
 * ser utilizado
 * 
 * 'style.Urls' serve para informar os caminhos dos 
 *  arquivos CSS que o componente utilizará
 * 
 * 'selector' serve para informar como aquele componente podera
 * ser chamado dentro do projeto Angular dentro de outros arquivos
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeiro-projeto';
}
