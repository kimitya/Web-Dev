import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductItem } from '../product-items';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule,ShareButtonsModule, ShareIconsModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: ProductItem;
  @Output() remove = new EventEmitter();
  @Output() like = new EventEmitter();

  removeProduct() {
    this.remove.emit(this.product.id);
  }

  likeProduct() {
    this.like.emit(this.product.id);
  }
}
