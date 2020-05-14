import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosService } from '../libros.service';
import { Libro } from '../models/libros.model';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css'],
})
export class ListaLibrosComponent implements OnInit {
  arrLibros: Libro[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private librosService: LibrosService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.parent.params.subscribe(async (params) => {
      this.arrLibros = await this.librosService.getByEscritorId(
        parseInt(params.escritorId)
      );
    });
  }
}
