import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDw-2uh_s7MolNzNqEttGCNh8RaYkBeDnc",
      authDomain: "knowledge-33ee3.firebaseapp.com"
    });
  }
}
