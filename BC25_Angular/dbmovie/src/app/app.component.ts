import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { dbmovieUser } from './Interfaces/dbMovieUsers';
import { dbMovieApiService } from './Services/dbMovie-api.service';
/* import { GithubRepo } from './Interfaces/GitHubRepo' */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* title = 'dbmovie'; */
  dbMovieForm: FormGroup = this.fb.group({
  username: ['', [ Validators.required ]]
  })

  gUser! : dbmovieUser // valor do conteúdo undefined
  /* repos: GithubRepo[] = [] */

  constructor(
    private fb: FormBuilder,
    private dbMovieService: dbMovieApiService,
    private snackBar : MatSnackBar
  ) {}

  procurar() {
    const username = this.dbMovieForm.get('username')?.value // recuperando o nome do usuário que deve ser recuperado
    
    // Ordem da sfunções dentro do Subscribe
    // 1) - Sucesso
    // 2) - Erro
    // 3) - Completo

    this.dbMovieService.procurarUsuario(username).subscribe(
      (user) => {
          this.gUser = user
          // console.log(`O usuário ${user.login} tem ${user.followers} seguidores`)       }
      },
      (erro) => {
          // HttpErrorResponse
          // preciso saber se o meu erro vem dessa classe

          if (erro instanceof HttpErrorResponse) {
            if (erro.status == 404) {
              this.snackBar.open(`Filme ${username} não encontrado :(`, 'OK') // abrindo snackBar na tela
            }
          }
       } 
    )

   /*  this.githubService.procurarRepos(username).subscribe(
      (repos) => {
        this.repos = repos
      }
    )  */  

  }


}
