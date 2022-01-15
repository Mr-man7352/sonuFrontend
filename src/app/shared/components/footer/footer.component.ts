import { Component, OnInit } from '@angular/core';
import {
  faMapMarker,
  faPhone,
  faEnvelope,
  faTaxi,
  faCaretRight,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  faMapMarker = faMapMarker;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faTaxi = faTaxi;
  faCaretRight = faCaretRight;
  constructor() {}

  ngOnInit(): void {}
}
