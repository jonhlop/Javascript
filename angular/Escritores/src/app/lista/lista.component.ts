import { Component, OnInit } from '@angular/core';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  arrEscritores: Escritor[];
  constructor(private escritoresService: EscritoresService) {
    this.arrEscritores=[];
  }

  async ngOnInit() {
  this.arrEscritores = await this.escritoresService.getAll();
  }
}
