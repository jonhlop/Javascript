import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css'],
})
export class DetalleProductoComponent implements OnInit {
  producto: number;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    //para subscribirse a los cambios de las partes variables de las url
    this.activatedRoute.params.subscribe((params) => {
      console.log(params.productoID);
      this.producto = params.productoID;
    });
  }
}
