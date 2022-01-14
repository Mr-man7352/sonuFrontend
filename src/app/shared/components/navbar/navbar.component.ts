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
      let nav = document.getElementById('navBar');
      console.log(nav);

      if (nav == null) {
        return;
      }

      // window.addEventListener('scroll', () => {
      //   if (window.scrollY > 20.5) {
      //     nav.classList.remove('normalState');
      //     nav.classList.add('makeNaveBarResist');
      //     document.body.style.paddingTop = '70';
      //   } else {
      //     nav.classList.add('normalState');
      //     nav.classList.remove('makeNaveBarResist');

      //     document.body.style.paddingTop = '0';
      //   }
      // });

      console.log('Listner added');
    })();
  }
}
