import { Component, OnInit } from '@angular/core';
import { faCoffee, faTaxi } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  faCoffee = faCoffee;
  faTaxi = faTaxi;
  constructor() {}

  ngOnInit(): void {}
  ngAfterContentInit() {
    (() => {
      let nav = document.getElementById('nav');
      console.log(nav);

      if (nav == null) {
        return;
      }

      window.addEventListener('scroll', () => {
        if (window.scrollY > 1.5 && window.innerWidth > 992) {
          nav.classList.add('nav-sticky');
          document.body.style.paddingTop = '70';
        } else if (window.innerWidth < 992) {
          nav.classList.add('nav-sticky');
        } else {
          nav.classList.remove('nav-sticky');
        }
      });
      console.log('Listner added');
    })();
  }
}
