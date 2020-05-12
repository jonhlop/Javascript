import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ContactComponent } from './contact/contact.component';
import { DetalleProductoComponent } from './producto/detalle-producto/detalle-producto.component';
import { EscritorComponent } from './escritor/escritor.component';
import { RelacionadosComponent } from './producto/relacionados/relacionados.component';
import { ReviewsComponent } from './producto/reviews/reviews.component';
import { EspecificacionesComponent } from './producto/especificaciones/especificaciones.component';
import { LoginGuard } from './login.guard';
/* 
/product/1234
/product/2
para ahce paginas variables
 */

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent, canActivate: [LoginGuard] },
  { path: 'contacta', component: ContactComponent },
  { path: 'producto/:productoID', component: DetalleProductoComponent,children:[
    {path: 'relacionados', component:RelacionadosComponent},
    {path: 'reviews', component:ReviewsComponent},
    {path: 'especificaciones', component:EspecificacionesComponent},
    
  ]},
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
