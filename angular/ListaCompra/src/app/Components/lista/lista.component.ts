import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  @Input() productos: Producto[];
  

  constructor() {}

  ngOnInit(): void {}
}
