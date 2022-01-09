import { Component, OnInit } from '@angular/core';
import {
  faCoffee,
  faTaxi,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  // icons
  faCoffee = faCoffee;
  faTaxi = faTaxi;
  faMobileAlt = faMobileAlt;

  //
  constructor() {}

  ngOnInit(): void {}
  ngAfterContentInit() {
    (() => {
      // let nav = document.getElementById('nav');
      // console.log(nav);

      // if (nav == null) {
      //   return;
      // }

      console.log('Listner added');
    })();
  }
}
