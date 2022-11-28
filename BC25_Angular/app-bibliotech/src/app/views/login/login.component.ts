import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(
    fb: FormBuilder,
    private authService: AuthService,
    private notification: NotificationService,
    private router: Router
    ) { 
    this.formLogin = fb.group({
      email: ['',[Validators.required]],
      senha: ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  
  }

  public signInGoogle(): void {
    this.authService.authenticateByGoogle().subscribe(credencials => {
      this.notification.showMessage("Bem-Vindo(a)!");
      this.router.navigate(["/home"]);
    })
  }

  public singInEmailAndPassword(): void {
    if(this.formLogin.valid){
      const user: User = this.formLogin.value;
      this.authService.authenticateByEmailAndPassword(user).subscribe(credencials => {
      this.notification.showMessage("Bem-Vindo(a)!")
      this.router.navigate(["/home"]);
    });
    } else {
      this.notification.showMessage("Dados inválidos.")
    }
  }

}
