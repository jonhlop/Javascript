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

  detalleEscritor: Escritor;

  constructor(
    private activatedRoute: ActivatedRoute,//recuperamos laparte variable de la ruta
    private escritoresService: EscritoresService
  ) {}

  ngOnInit(): void {
    //me subscribo a el para los cambios que se podruzcan 
    this.activatedRoute.params.subscribe(async params => {
      this.detalleEscritor = await this.escritoresService.getById(parseInt(params.escritorId));
    });
  }

}
