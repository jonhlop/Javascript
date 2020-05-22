import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { ProfesionalComponent } from './profesional/profesional.component';
import { AficionesComponent } from './aficiones/aficiones.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'formulario/personal'},
  { path: 'formulario/personal', component: PersonalComponent },
  { path: 'formulario/profesional', component: ProfesionalComponent },
  { path: 'formulario/aficiones', component: AficionesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
