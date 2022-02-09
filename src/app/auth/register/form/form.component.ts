import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  password2FormControl = new FormControl('', [Validators.required]); // to do custom validator
  firstnameFormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  surnameFormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  dobFormControl = new FormControl('', [Validators.required]);

  // formControl = new FormArray([
  //   new FormControl('', [Validators.required, Validators.email]),
  //   new FormControl('', [Validators.required, Validators.minLength(8)]),
  //   new FormControl('', [Validators.required]), // to do custom validator
  //   new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   new FormControl('', [Validators.required])
  // ]);

  matcher = new MyErrorStateMatcher();

  hide = true;

  @Output()
  register: EventEmitter<any> = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };

  validated () {
    return !this.emailFormControl.errors && !this.passwordFormControl.errors && !this.password2FormControl.errors && !this.firstnameFormControl.errors && !this.surnameFormControl.errors && !this.dobFormControl.errors
  }

  registerUser () {
    const user = {
      email: this.emailFormControl.value,
      password: this.passwordFormControl.value,
      firstname: this.firstnameFormControl.value,
      surname: this.surnameFormControl.value,
      dob: this.dobFormControl.value
    }
    this.register.emit(user)
  }
}
