import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css'],
})
export class SemaforoComponent implements OnInit {
  color: string;

  constructor() {
    this.color = 'R'; //R A V
  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.color === 'R') {
        this.color = 'A';
      } else if (this.color === 'A') {
        this.color = 'V';
      } else {
        this.color = 'R';
      }
    }, 2000);
  }
}
