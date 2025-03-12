import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
  <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
    <span>TONO 21</span>
    <app-primary-button label="Cart" (btnClicked)="showButtonClicked()"/>
  </div>`,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  showButtonClicked() {
    console.log('clicked')
  }

}
