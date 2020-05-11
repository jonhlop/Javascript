import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  estilosParrafo: any;
  principal: boolean;

  constructor() {
    this.estilosParrafo = {
      'background-color': 'indigo',
      fontSize: '12px',
      color: 'white',
    };
    this.principal = true;
  }

  cambiarColor() {
    this.estilosParrafo.backgroundColor = 'tomato';
  }
  cambiaClase() {
    //this.principal = this.principal ? false : true;
    this.principal = !this.principal;
  }
}
