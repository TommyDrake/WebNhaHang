import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { NgForOf } from '@angular/common';
import { StoreService } from '../../services/store.service';

// @ts-ignore
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(public storeService: StoreService) {}

  addToCart() {
    this.storeService.addToCart(this.product);
  }
}
