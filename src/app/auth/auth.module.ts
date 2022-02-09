import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { FormComponent } from './register/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrescriptionComponent } from './register/prescription/prescription.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LoginPrescriptionComponent } from './login/login-prescription/login-prescription.component';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    LoginComponent,
    FormComponent,
    PrescriptionComponent,
    LoginFormComponent,
    LoginPrescriptionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    RegisterComponent,
    LoginComponent
  ]
})
export class AuthModule { }
