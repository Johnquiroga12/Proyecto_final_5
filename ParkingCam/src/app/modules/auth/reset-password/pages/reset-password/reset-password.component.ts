import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit{

  public cedula:{
    cedulap: ''
  }

  public password: { 
    password1: '',
    password2
  }

  constructor(){}

  ngOnInit(): void {
    
  }

  
}
