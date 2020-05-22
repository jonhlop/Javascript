import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;

  constructor(private usuariosService: UsuariosService) {
    this.formRegister = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      surname: new FormControl('', [
        Validators.required
      ]),
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      mail: new FormControl('', [
        Validators.required
      ]),
      address: new FormControl('', [
        Validators.required
      ]),
      age: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formRegister.value);
    this.usuariosService.register(this.formRegister.value)
      .then(response => {
        console.log(response);
      });
  }

}
