import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProductsListComponent],
  template: `<app-header/>
  <app-products-list/>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Test1';
}
