import { Component } from '@angular/core';
import { cibWhatsapp } from '@coreui/icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  icons = {cibWhatsapp};

  constructor() { }

}
