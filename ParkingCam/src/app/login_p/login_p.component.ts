import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login_p',
  templateUrl: './login_p.component.html',
  styleUrls: ['./login_p.component.css']
})

export class Login_pComponent implements OnInit {

  user:any;
  password:any;
  constructor() { }

  ngOnInit() {
  }

}