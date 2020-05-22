import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IAppState, rootReducer, INITIAL_STATE} from './store';
import { CabeceraComponent } from './cabecera/cabecera.component';


@NgModule({
  declarations: [AppComponent, CabeceraComponent],
  imports: [BrowserModule, AppRoutingModule, NgReduxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>) {
    this.ngRedux.configureStore(rootReducer,INITIAL_STATE)
  }
}
