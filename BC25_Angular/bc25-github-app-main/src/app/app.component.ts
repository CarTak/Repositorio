import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GithubUser } from './Interfaces/GithubUser';
import { GithubApiService } from './services/github-api.service';
import { GithubRepo } from './Interfaces/GitHubRepo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  githubForm: FormGroup = this.fb.group({
    username: ['', [ Validators.required ]]
  })

  // O typescript tem por padrão não permitir variáveis vazias
  // o gUser só receberá valores quando houver a requisição http
  // gUser! permite que temporariamente o typescript aceite uma
  //variavel vazio
  gUser! : GithubUser // valor do conteúdo undefined
  repos: GithubRepo[] = []

  constructor(
    private fb: FormBuilder,
    private githubService: GithubApiService,
    private snackBar: MatSnackBar
  ) {}

  procurar() {
    const username = this.githubForm.get('username')?.value // recuperando o nome do usuário que deve ser recuperado
    
    // Ordem da sfunções dentro do Subscribe
    // 1) - Sucesso
    // 2) - Erro
    // 3) - Completo

    this.githubService.procurarUsuario(username).subscribe(
      (user) => {
          this.gUser = user
          // console.log(`O usuário ${user.login} tem ${user.followers} seguidores`)       }
      },
      (erro) => {
          // HttpErrorResponse
          // preciso saber se o meu erro vem dessa classe

          if (erro instanceof HttpErrorResponse) {
            if (erro.status == 404) {
              this.snackBar.open(`Usuário ${username} não encontrado :(`, 'OK') // abrindo snackBar na tela
            }
          }
      }
    ) 

    this.githubService.procurarRepos(username).subscribe(
      (repos) => {
        this.repos = repos
      }
    )
  }
}

