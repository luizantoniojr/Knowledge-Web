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
    var newCompetence = new Competence();
    newCompetence.name = 'Angular 2';
    this.competences.push(newCompetence);

     var newCompetence2 = new Competence();
    newCompetence2.name = 'Vue 2';
    this.competences.push(newCompetence2);
  }

  onSubmit(form: NgForm) {
    this.user.name = form.value.name;
    this.user.slack = form.value.slack;
    console.log(this.user);
  }
  selectedCompetence(event: any) {
    var newCompetence = new Competence();
    newCompetence.name = event.value[event.value.length - 1].name;
    this.user.competences.push(newCompetence);
  }
}
