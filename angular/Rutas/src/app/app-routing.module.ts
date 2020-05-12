import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ContactComponent } from './contact/contact.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { EscritorComponent } from './escritor/escritor.component';
/* 
/product/1234
/product/2
para ahce paginas variables
 */

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'contacta', component: ContactComponent },
  { path: 'producto/:productoID', component: DetalleProductoComponent },
  {
    path: 'escritor/:escritorNombre/libro/:libroId',
    component: EscritorComponent,
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
