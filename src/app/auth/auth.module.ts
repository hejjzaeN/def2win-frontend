import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { FormComponent } from './register/form/form.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    RegisterComponent,
    LoginComponent
  ]
})
export class AuthModule { }
