import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;
  constructor(private loginService: LoginService) {
    this.formRegister = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {

    console.log(this.formRegister.value);
    this.loginService.peticionPost(this.formRegister.value)
  }
}
