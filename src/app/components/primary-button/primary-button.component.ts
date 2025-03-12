import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
  <button (click)="btnClicked.emit()">
    Cart
  </button>`,
  styleUrl: './primary-button.component.scss'
})
export class PrimaryButtonComponent {

  handleBtnClick() {
    this.btnClicked.emit();
  }

  btnClicked = output();

  label = input('')
}
