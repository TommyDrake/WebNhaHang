import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.scss',
})
export class DetailProductComponent {
  detailProduct!: Product | undefined | null;

  constructor(
    private activatedRoute: ActivatedRoute,
    protected storeService: StoreService,
  ) {
    const { id } = this.activatedRoute.snapshot.params;
    console.log(parseInt(id));
    this.detailProduct = this.storeService.products.find(
      (element) => element.id == parseInt(id),
    ) as Product;
    console.log(this.detailProduct);
  }
}
