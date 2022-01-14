import { Component, OnInit } from '@angular/core';
import {
  faCoffee,
  faTaxi,
  faUserTie,
  faSuitcaseRolling,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  faSuitcaseRolling = faSuitcaseRolling;
  faUserTie = faUserTie;
  constructor() {}

  ngOnInit(): void {}
}
