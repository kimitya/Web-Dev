import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { products } from '../products';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,ShareButtonsModule, ShareIconsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [...products]
}
