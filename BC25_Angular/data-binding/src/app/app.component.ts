import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * String Interpolation: utilizar valores que propriedade
   * possuem para mostra-los
   */
  /**
   * Property Binding: utilizar valores de propriedade
   * e atribui-los a atributo HTML
   */
  /**
   * Event Dinding: utilizado para ouvir eventos do DOM dentro
   * do Angular
   */
  /**
   * Two Way Data Binding:A associação bidirecional oferece aos componentes em seu 
   * aplicativo uma maneira de compartilhar dados. Use a associação bidirecional para ouvir eventos e atualizar
   * valores simultaneamente entre componentes pai e filho
   */
  title = 'Angular é muito bom';
  n1: number = 0
  n2: number = 0

  tipoInput: string  = "password"

  somar(x: number, y: number) {
    return x + y
  }
  
  mudarTipoDoInput(): void {
    if (this.tipoInput == 'password') {
      this.tipoInput = 'text'
    } else {
      this.tipoInput = 'password'
    }
  }
}
