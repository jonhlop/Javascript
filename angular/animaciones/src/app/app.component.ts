import { Component } from '@angular/core';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('cambiaColor', [
      state(
        'verde',
        style({
          'background-color': 'green',
        })
      ),
      state(
        'amarillo',
        style({
          'background-color': 'yellow',
        })
      ),
      state(
        'rojo',
        style({
          'background-color': 'red',
        })
      ),
    ]),
  ],
})
export class AppComponent {
  color: string;
  constructor() {
    this.color = 'verde';
  }
  ngOnInit() {
    setInterval(() => {
      if (this.color === 'rojo') {
        this.color = 'amarillo';
      } else if (this.color === 'amarillo') {
        this.color = 'verde';
      } else if (this.color === 'verde') {
        this.color = 'rojo';
      }
    },1000);
  }
}
