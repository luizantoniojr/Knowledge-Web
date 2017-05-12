import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/services/auth.service";
import { NgForm } from "@angular/forms/src/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    var emailLogado = this.authService.signupUser(email, password);
  }
}
