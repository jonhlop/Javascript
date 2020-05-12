import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-escritor',
  templateUrl: './escritor.component.html',
  styleUrls: ['./escritor.component.css'],
})
export class EscritorComponent implements OnInit {
  nombreEscritor: string;
  libroId: number;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.nombreEscritor = params.escritorNombre;
      this.libroId = params.libroId;
    });
  }
}
