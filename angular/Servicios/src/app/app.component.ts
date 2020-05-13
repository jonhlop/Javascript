import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: User[];

  constructor(private usersService: UsersService) {
    this.users = [];
  }

  async ngOnInit() {
    /* //sin promesa
    //this.users = this.usersService.getAll();//para usar el servicio en el componente que yo quiera

    //con promesa
    this.usersService.getAllPromise().then((usuarios) => {
      console.log(usuarios);
      this.users = usuarios;
    }); //el then es para recibir correctamente el dato */

    //async await
    try {
      this.users = await this.usersService.getAllPromise();
    } catch (err) {
      console.log(err);
    }
  }

  async onClickActive() {
    // con then-catch
    /* this.usersService.getActive()
    .then(usersActive=>{
      this.users = usersActive;
    }) */
    //con async await
    // this.users = await this.usersService.getActive();
    this.users = await this.usersService.getActivosV2();
  }

  async onClickAll() {
    this.users = await this.usersService.getAll();
  }
  async onClickMayores() {
    this.users = await this.usersService.getMayoresEdad();
  }

  onChange($event) {
    this.usersService.getByUsername($event.target.value).then((usuarios) => {
      this.users = usuarios;
    });
  }

  onChangeNombreCompleto($event) {
    this.usersService
      .getByNombreCompleto($event.target.value)
      .then((usuarios) => {
        this.users = usuarios;
      });
  }
  onclickEmails() {
    this.usersService.getEmails().then((emails) => {
      console.log(emails);
    });
  }
}
