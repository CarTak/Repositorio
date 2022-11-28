import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CadastrarComponent } from './views/cadastrar/cadastrar.component';
import { HomeComponent } from './views/home/home.component';
import { LivrosComponent } from './views/livros/livros.component';
import { LoginComponent } from './views/login/login.component';
import { PainelComponent } from './views/painel/painel.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent,
  },
  {
    path: 'painel',
    canActivate: [AuthGuard],
    component: PainelComponent,
  },
  {
    path: 'livros',
    canActivate: [AuthGuard],
    component: LivrosComponent
  },
  {
    path:'cadastrar',
    component: CadastrarComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
