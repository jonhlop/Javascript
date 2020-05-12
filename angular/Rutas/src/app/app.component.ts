import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  btnActivo: boolean;

  constructor(private router: Router) {
    this.btnActivo = true;
  }
  onClick(pRuta) {
    this.btnActivo = false;
    setTimeout(() => {
      this.btnActivo = true;
      this.router.navigate([pRuta]);
    }, 2000);
  }
}
