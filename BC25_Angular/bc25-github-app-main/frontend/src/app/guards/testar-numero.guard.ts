import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestarNumeroGuard implements CanActivate { // utilizado para proteger a rota no mimento da entrada
  // retornar true -> pode seguir
  // retornar false -> não pode seguir
  
  canActivate(
    route: ActivatedRouteSnapshot, // objeto que permite recuperar os parâmetros passados para a rota
    state: RouterStateSnapshot
        ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // saber se o id informado é um número é um número ou não
    // se for um número -> pode seguir (true)
    // se não for um número -> não pode seguir (false)

    //recuperar o parâmetro que guarda o valor do id
    const idProduto = route.paramMap.get('idProduto')
    // a funçao isNaN() só aceita números , por isso temos que tentar transformar idProduto em número com a função Number()
    if (isNaN(Number(idProduto)))  {// se o numero é um NaN
      // return this.router.navigateByUrl('/produtos')
      return false
    }else {
      return true
    }
  }  
}
