import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from "./login.service";
import {LoginDetails} from "./login.model";
import { Router } from '@angular/router';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @Input() loginDetails = new LoginDetails();
  private loginFormGrp : FormGroup;
  constructor(private loginService : LoginService,private $router: Router,
    private authService : AuthService) {
  }
  
  ngOnInit() {
    this.initForm();
  }

  authenticate(){
    this.loginService.isValidUser(this.loginDetails).forEach(response => {
      if(response.code == 200){
        sessionStorage.setItem("LogedInUser",this.loginDetails.username);
        this.authService.setToken(response.result.toString());
      }else{
        alert(response.message);
      }
      
    });
  }

  initForm(){
    this.loginFormGrp = new FormGroup({
       username : new FormControl('',[
         Validators.required, 
         Validators.min(3),
         Validators.max(15)
        ]),
        password : new FormControl('',[
          Validators.required, 
          Validators.min(3),
          Validators.max(15)
        ])
    }); 
  }

}
