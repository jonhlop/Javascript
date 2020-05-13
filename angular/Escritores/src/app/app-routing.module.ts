import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/lista' },
  { path: 'lista', component: ListaComponent },
  { path: 'escritor/:escritorId', component: DetalleComponent },
  { path: '**', redirectTo: '/lista' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
