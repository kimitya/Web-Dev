import { Component, Input } from '@angular/core';
import { Category, categories } from '../categories';
import { ProductListComponent } from '../product-list/product-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  @Input() category !: Category;
  show : boolean = false;

  share(){
    this.show=!this.show;
  }

}
