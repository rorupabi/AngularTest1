import { CartService } from './../../../services/cart.service';
import { Component, input, inject } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
  <div class="bg-white shadow-md border rounded-xl p-6 flex flex-col gap-6 relative h-[350px]">
  <div class="mx-auto">
    <img [src]="product().image" class="w-full h-[150px] object-contain mx-auto" alt="">
  </div>
  <div class="flex flex-col justify-between flex-grow">
    <span class="text-md font-bold">{{ product().title }}</span>
    <span class="text-sm">{{ '$' + product().price }}</span>
    <app-primary-button label="Add to Cart" class="mt-3" (btnClicked)="cartService.addToCart(product())"/>
    <span class="absolute top-2 right-3 text-sm font-bold"
    [class]="product().stock ? 'text-green-500' : 'text-red-500'">
      @if (product().stock) {
        {{product().stock}} left
      } @else {
        Out of stock
      }
    </span>
  </div>
</div>

  `,
  styles: ``
})
export class ProductCardComponent {

  cartService = inject(CartService)
  product = input.required<Product>()
}
