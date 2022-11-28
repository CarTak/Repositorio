import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { cepUsers } from '../Interfaces/cepUsers';
import { cepRepo } from '../Interfaces/cepRepo';

@Injectable({
  providedIn: 'root'
})
export class CepApiServiceService {

private readonly baseURL: string ='https://viacep.com.br/ws/01001000/json/'

private readonly googleURL: string ='https://maps.googleapis.com/maps/api/staticmap?'

  constructor(
    private http: HttpClient
  ) { }
  procurarUsuario(cep: string) {
    return  this.http.get<cepUsers>(`${this.baseURL}${cep}`)
  }
  procurarRepos(cep: string){
    return this.http.get<cepRepo[]>(`${this.googleURL}${cep}`)
  }
}
