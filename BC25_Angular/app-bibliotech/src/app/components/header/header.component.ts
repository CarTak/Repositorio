import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(
    private authService: AuthService, 
    private notification: NotificationService, 
    private router: Router
  ) { }

  public logout(): void {
    this.authService.logout().subscribe(response => {
      this.notification.showMessage("Até logo!");
      this.router.navigate(["/login"])
    });
  }

}
