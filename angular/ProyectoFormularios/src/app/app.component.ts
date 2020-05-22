import { Component, HostListener } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './redux.ts/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  completo: number;

  constructor(private ngRedux: NgRedux<IAppState>) {
    this.completo = this.ngRedux.getState().porcentajeCompleto; 
  }

  ngOnInit() {}

  @HostListener('window:unload', [ '$event' ])
  unloadHandler(event) {
    // ...
  }

}
