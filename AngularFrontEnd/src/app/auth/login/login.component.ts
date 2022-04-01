import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName = "";
  password = "";
  constructor(private route : Router) {

  }

  ngOnInit(): void {
  }

  login() {
    //this.route.navigateByUrl("/layout");
    const name = this.userName;
    const password = this.password;
    if (name == "manju" && password == "1234") {
      this.route.navigateByUrl("/layout");
    }
    else {
      alert("Authentication Failed!")
    }
  }

}
