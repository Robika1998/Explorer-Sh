import { ProductService } from './../../product.service';
import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { Product } from '../../types/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products: Product[] = [];

  filteredProduct: Product[] = [];
  productService = inject(ProductService);
  ngOnInit() {
    this.productService.getProducts().subscribe((result) => {
      console.log(result);
      this.products = result as any[];
      this.filteredProduct = this.products;
    });
  }

  onViewProduct(event: any) {
    console.log('onViewProduct', event);
  }

  onSearch(search: string) {
    console.log('home', search);
    if (search) {
      this.filteredProduct = this.products.filter((x) =>
        x.name.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      this.filteredProduct = this.products;
    }
  }
}
