import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  precio: number;
  currentDate: date;
  constructor() {
    this.precio = 1499.99;
    this.currentDate = new Date();
  }
}
