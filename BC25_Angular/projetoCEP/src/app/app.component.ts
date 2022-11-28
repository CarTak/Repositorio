import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { cepUsers } from './Interfaces/cepUsers';
import {CepApiServiceService } from './services/cep-api.service.service';
import { cepRepo } from './Interfaces/cepRepo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cepForm: FormGroup = this.fb.group({
    username: ['',[Validators.required]]
  })
  gUser! : cepUsers
  repos: cepRepo[] = []

  constructor(
    private fb: FormBuilder,
    private cepService: CepApiServiceService,
    private snackBar: MatSnackBar
  ) {}

  procurar() {
    const cep = this.cepForm.get('cep')?.value 

    this.cepService.procurarUsuario(cep).subscribe(
      (user) => {
          this.gUser = user
      },
      (erro) => {
          if (erro instanceof HttpErrorResponse) {
            if (erro.status == 404) {
              this.snackBar.open(`CEP ${cep} não encontrado :(`, 'OK')
            }
          }
      }
    ) 

    this.cepService.procurarRepos(cep).subscribe(
      (repos) => {
        this.repos = repos
      }
    )
  }
}

