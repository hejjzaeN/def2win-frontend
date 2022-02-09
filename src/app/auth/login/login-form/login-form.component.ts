import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../register/form/form.component';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);

  hide = true;

  matcher = new MyErrorStateMatcher();

  @Output()
  login: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  validated () {
    return !this.emailFormControl.errors && !this.passwordFormControl.errors
  }

  loginUser () {
    let user = {
      email: this.emailFormControl.value,
      password: this.passwordFormControl.value
    }
    this.login.emit(user)
  }
}
