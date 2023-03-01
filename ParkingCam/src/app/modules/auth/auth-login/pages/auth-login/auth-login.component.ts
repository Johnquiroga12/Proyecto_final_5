import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)

  })
  constructor() { }

  ngOnInit(): void {

  }

  onLogin(form) {

    console.log(form)
  }


}
