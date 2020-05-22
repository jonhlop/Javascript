import { Component, OnInit } from '@angular/core';
import { ShopServiceService } from '../shop-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private productsService: ShopServiceService) { }

  ngOnInit(): void {
    this.productsService.getProductosCarrito()
    .then(response=>{
      console.log(response)
    })
  }

}
