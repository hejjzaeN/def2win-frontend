import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Link } from '../sidebar.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  options: FormGroup;
  links: Link[] = [
    {
      value: 'profile',
      name: 'Профиль'
    }, {
      value: 'goals',
      name: 'Цели'
    }, {
      value: 'calendar',
      name: 'Календарь'
    }
  ]

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      vertical: 'true'
    });
  }

  ngOnInit(): void {
  }

}
