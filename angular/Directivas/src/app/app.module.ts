import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { ListaEpisodiosComponent } from './lista-episodios/lista-episodios.component';

@NgModule({
  declarations: [
    AppComponent,
    SemaforoComponent,
    ListaEpisodiosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
