import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-lista-emails',
  templateUrl: './lista-emails.component.html',
  styleUrls: ['./lista-emails.component.css'],
})
export class ListaEmailsComponent implements OnInit {
  //siempre que quiera usar necesito injectar el servicio
  arrEmails: string[];
  constructor(private usersService: UsersService) {}

  async ngOnInit() {
    console.log(await this.usersService.getEmails);
  }
}
