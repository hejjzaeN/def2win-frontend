import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMessage: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register (user: any) {
    return this.authService.register(user).subscribe(data => {
      this.router.navigate(['/login', {redirected: true}])
    }, error => {
      this.errorMessage = error=!''?error:'Произошла ошибка. Попробуйте позже.'
    })
  }
}
