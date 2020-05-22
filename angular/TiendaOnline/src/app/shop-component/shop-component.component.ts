import { Component, OnInit } from '@angular/core';
import { ShopServiceService } from '../shop-service.service';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-shop-component',
  templateUrl: './shop-component.component.html',
  styleUrls: ['./shop-component.component.css'],
})
export class ShopComponentComponent implements OnInit {
  title = 'TiendaOnline';
  productos: Producto[];
  categorias: string[];
  constructor(private shopService: ShopServiceService) {}

  async ngOnInit() {
    this.productos = await this.shopService.getProductos();

    const arrtmp = this.productos.map((producto) => producto.categoria);
    this.categorias = Array.from(new Set(arrtmp)).sort();
    /*  this.shopService
      .getProductos()
      .then((response) => {
        console.log(response);
        this.productos = response;
      })
      .catch((err) => console.log(err)); */
  }

  async onChange($event) {
    this.productos = await this.shopService.getbyCategoria($event.target.value);
  }
  async onClick(pProducto) {
    if (!localStorage.getItem('tokenCarrito')) {
      const response = await this.shopService.createCart();
      localStorage.setItem('tokenCarrito', response['token_cart']);
    }

    const response = await this.shopService.addProductCart(pProducto.id);
    console.log(response);
    
  }
}
