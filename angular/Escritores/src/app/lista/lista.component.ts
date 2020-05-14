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
    this.arrEscritores = [];
  }

  async ngOnInit() {
    this.recuperarTodosEscritores();
  }

  onChangePais($event) {
    if($event.target.value==='todos'){
      this.recuperarTodosEscritores();
    }else{
      this.escritoresService.getByPais($event.target.value).then((escritores) => {
      console.log(escritores);
      this.arrEscritores = escritores;
    });
    }
    
  }
  async recuperarTodosEscritores() {
    this.arrEscritores = await this.escritoresService.getAll();
  }
}
