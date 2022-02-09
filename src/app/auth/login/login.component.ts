import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../register/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser (user: any) {
    return this.authService.login(user).subscribe(data => {
      this.router.navigate(['/goals', {token: '123'}]) // add DTO with token available
    }, error => {
      console.log(error)
      this.errorMessage = error=!''?error:'Произошла ошибка. Попробуйте позже.'
    })
  }
}
