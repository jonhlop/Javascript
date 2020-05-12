import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-relacionados',
  templateUrl: './relacionados.component.html',
  styleUrls: ['./relacionados.component.css'],
})
export class RelacionadosComponent implements OnInit {
  producto: number;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.parent.params.subscribe((params) => {
      this.producto = params.productoID;
    }); //para un componente hijo relacionarlo con un componente padre
   
  }
}
