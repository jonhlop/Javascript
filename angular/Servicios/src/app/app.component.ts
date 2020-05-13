import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: User[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.getAll();
  }

}
