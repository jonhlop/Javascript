import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrivialComponent } from './trivial/trivial.component';
import { ResultadoComponent } from './resultado/resultado.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/trivial' },
  { path: 'trivial', component: TrivialComponent },
  { path: 'resultado', component: ResultadoComponent },
  { path: '**', redirectTo: '/trivial' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
