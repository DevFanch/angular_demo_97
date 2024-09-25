import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  private routeParam: ActivatedRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    console.info(this.routeParam.snapshot.params.id);
  }
}
