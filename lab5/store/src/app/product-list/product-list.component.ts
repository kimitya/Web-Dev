import { Component, Input } from '@angular/core';
import { categories } from '../categories';
import { Category } from '../categories';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input () selectedCategory!: Category;

  onProductItemRemove(id: number){
    this.selectedCategory.products=this.selectedCategory.products.filter(item => item.id !== id);
  }

  onProductItemLike(id: number){
    const product = this.selectedCategory.products.find(item => item.id === id);

    if (product) {
      //product.likes += 1;
      if (product.liked===false) {
        product.likes += 1;
        product.liked = true;
      } else if (product.likes>0){
        product.likes -=1;
        product.liked = false;
      }
      
    }
  }
}
