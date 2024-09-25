import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { DecimalPipe, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SlicePipe, DecimalPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  products?: Array<any>
   // Injection d'un service en tant que prop
  // private taskService: TaskService = inject(TaskService)
  private productService: ProductsService = inject(ProductsService)
  // Hook OnInit
  ngOnInit() {
    this.productService.fetchProducts().subscribe({
      next: (data: any) => {
        this.products = data.products
        console.log(data);
      },
      error: (error: any) => {
        console.error(error)
      }
    })
  }
}
