import { Component, OnInit } from '@angular/core';
import { User } from "app/models/user";
import { NgForm } from "@angular/forms/src/forms";
import { Competence } from "app/models/competence";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = new User();
  competences: Competence[] = new Array();
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.user.name = form.value.name;
    this.user.slack = form.value.slack;
    console.log(this.user);
  }
}
