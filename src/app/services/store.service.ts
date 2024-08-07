import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private authService: AuthService) {}

  products: Product[] = [
    {
      id: 1,
      name: 'Com',
      price: 10000,
      description: 'Ngon',
      inStock: 15,
      imageUrl: '../assets/u-com-3.jpg',
    },

    {
      id: 2,
      name: 'Pho',
      price: 20000,
      description: 'Binh Thuong',
      inStock: 10,
      imageUrl:
        '../assets/cach-nau-pho-bo-nam-dinh-chuan-vi-thom-ngon-nhu-hang-quan-202201250313281452.jpg',
    },

    {
      id: 3,
      name: 'Bun Rieu',
      price: 15000,
      description: 'Vua',
      inStock: 5,
      imageUrl: '../assets/thumb.jpeg',
    },

    {
      id: 4,
      name: 'Bun Bo',
      price: 25000,
      description: 'Rat Ngon',
      inStock: 20,
      imageUrl: '../assets/bun-kho-chay-recipe-main-photo.jpg',
    },

    {
      id: 5,
      name: 'Bun Kho',
      price: 30000,
      description: 'Kha Ngon',
      inStock: 18,
      imageUrl: '../assets/maxresdefault.jpg',
    },
  ];

  cart: any[] = [];

  addToCart(product: any) {
    if (this.authService.currentUser) {
      let productInCart = this.cart.find((p: any) => p.id === product.id);
      let productInStock = this.products.find((p: any) => p.id === product.id);
      if (productInStock!.inStock == 0) {
        return;
      }
      if (productInCart) {
        productInCart.quantity++;
        productInStock!.inStock--;
        console.log(this.cart);
      } else {
        this.cart.push({ ...product, quantity: 1 });
        productInStock!.inStock--;
        console.log(this.cart);
      }
    } else {
      alert('Please login to add to cart');
    }
  }

  removeFromCart(product: any) {
    if (this.authService.currentUser) {
      let productInCart = this.cart.find((p: any) => p.id === product.id);
      let productInStock = this.products.find((p: any) => p.id === product.id);
      if (productInCart) {
        productInCart.quantity--;
        productInStock!.inStock++;
        if (productInCart.quantity === 0) {
          this.cart = this.cart.filter((p: any) => p.id !== product.id);
        }
        console.log(this.cart);
      }
    } else {
      alert('Please login to remove from cart');
    }
  }

  getTotalPrice() {
    return this.cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    );
  }

  getCartProducts() {
    return this.cart;
  }
}
