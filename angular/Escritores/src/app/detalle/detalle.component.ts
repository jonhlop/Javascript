import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Escritor } from '../models/escritor.model';
import { EscritoresService } from '../escritores.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  escritorId: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private escritoresService: EscritoresService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      this.detalleEscritor= await this.escritoresService.getByID(params.escritorId);
    });
  }
}
