import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from "@angular/router";

@Injectable()
export class AuthService {
  constructor(private route: ActivatedRoute, private router: Router) { }
  token: string;

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        firebase.auth().currentUser.getToken().then((token: string) => this.token = token)
        this.router.navigateByUrl('');
      })
      .catch(error => console.log(error));
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase.auth().currentUser.getToken().then((token: string) => this.token = token)
        this.router.navigateByUrl('');
      })
      .catch(error => console.log(error));
  }

  getToken() {
    firebase.auth().currentUser.getToken().then((token: string) => this.token = token);
    return this.token;
  }

  getCurrentUser() {
    return firebase.auth().currentUser;
  }
}
