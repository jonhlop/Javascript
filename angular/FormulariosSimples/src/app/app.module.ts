import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { TemplateComponent } from './template/template.component';
import { ModelComponent } from './model/model.component';

@NgModule({
  declarations: [AppComponent, FormularioComponent, ListaTareasComponent, TemplateComponent, ModelComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {
  
}
