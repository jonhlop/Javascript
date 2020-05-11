import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { ListaEpisodiosComponent } from './lista-episodios/lista-episodios.component';
import { SeleccionSwitchComponent } from './seleccion-switch/seleccion-switch.component';
import { SubrayadaoDirective } from './subrayadao.directive';

@NgModule({
  declarations: [
    AppComponent,
    SemaforoComponent,
    ListaEpisodiosComponent,
    SeleccionSwitchComponent,
    SubrayadaoDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
