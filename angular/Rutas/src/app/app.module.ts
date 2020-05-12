import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ContactComponent } from './contact/contact.component';
import { DetalleProductoComponent } from './producto/detalle-producto/detalle-producto.component';
import { EscritorComponent } from './escritor/escritor.component';
import { ReviewsComponent } from './producto/reviews/reviews.component';
import { RelacionadosComponent } from './producto/relacionados/relacionados.component';
import { EspecificacionesComponent } from './producto/especificaciones/especificaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    ContactComponent,
    DetalleProductoComponent,
    EscritorComponent,
    ReviewsComponent,
    RelacionadosComponent,
    EspecificacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
