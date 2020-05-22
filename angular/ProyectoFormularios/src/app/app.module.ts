import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import {
  NgReduxModule,
  NgRedux,
  DevToolsExtension,
} from '@angular-redux/store';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { ProfesionalComponent } from './profesional/profesional.component';
import { AficionesComponent } from './aficiones/aficiones.component';
import { IAppState, rootReducer, INITIAL_STATE } from './redux.ts/store';

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    ProfesionalComponent,
    AficionesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgReduxModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    const enhnancers = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhnancers);
  }
}
