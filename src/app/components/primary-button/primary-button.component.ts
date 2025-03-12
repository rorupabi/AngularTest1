import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
  <button class="bg-blue-500 rounded shadow-md px-4 py-2 w-full text-white hover:bg-blue-700 duration-300" (click)="btnClicked.emit()">
    <span class="text-md">{{ label()}}</span>
  </button>`,
  styleUrl: './primary-button.component.scss'
})
export class PrimaryButtonComponent {

  btnClicked = output();

  label = input<string>()
}
