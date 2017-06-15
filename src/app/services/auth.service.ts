import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from "@angular/router";

@Injectable()
export class AuthService {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
  token: string;

  signUpUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        firebase.auth().currentUser.getToken().then((token: string) => this.token = token)
        this.router.navigateByUrl('');
      })
      .catch(error => console.log(error));
  }

  signInUser(email: string, password: string) {
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

  signOut(){
    return firebase.auth().signOut();
  }

  onAuthStateChange(method:any){
    return firebase.auth().onAuthStateChanged(method);
  }
}
