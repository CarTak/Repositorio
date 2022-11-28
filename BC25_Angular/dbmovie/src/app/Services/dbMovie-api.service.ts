import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { dbmovieUser } from '../Interfaces/dbMovieUsers';
/* import { dbMovieRepo } from '../Interfaces/GitHubRepo'; */


@Injectable({
  providedIn: 'root'
})
export class dbMovieApiService {

  private readonly baseURL: string ='https://api.themoviedb.org/3/movie/'
  
  constructor(
    private http: HttpClient // objeto responsável por fazer as requiseções http no Angular
  ) { }

  /***
   * Método HTTP
   * Leitura de dados -> GET
   * Criação de dados -> POST
   * Atualização  de dados -> PUT
   * Deleção de dados -> DELETE
   */

  procurarUsuario(username: string) {
    // https://api.github.com/users/nomeDeUsuario
    /***
     * o objeto http, responsável por fazer as requisições, possui o método get(), que serve
     * para fazer requisições HTTP utilizando o verbo GET. Basta apenas passar a URL de acesso
     * como parâmetro
     * 
     * o get retorna um observable para ser utilizado no app.components.ts
     */
    return  this.http.get<dbmovieUser>(`${this.baseURL}${username}?api_key=d0d17cbea03e1e751061b001e857b4fb&language=pt-BR`)
  }
  

  /* procurarRepos(username: string){
    //http://api.github.com/machaelJackson/repos
    return this.http.get<GithubRepo[]>(`${this.baseURL}${username}/repos`)
  } */

}
