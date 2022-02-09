import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login-prescription',
  templateUrl: './login-prescription.component.html',
  styleUrls: ['./login-prescription.component.css']
})
export class LoginPrescriptionComponent implements OnInit {

  redirected: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.redirected = this.route.snapshot.params.redirected ? true : false
  }

}
