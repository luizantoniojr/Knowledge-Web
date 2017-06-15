import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { User } from "app/models/user";
import { NgForm } from "@angular/forms/src/forms";
import { Competence } from "app/models/competence";
import { ProfileService } from "app/services/profile.service";
import { ToastsManager } from "ng2-toastr/ng2-toastr";
import { AuthService } from "app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService, AuthService]
})
export class ProfileComponent implements OnInit {
  user: User = new User();
  constructor(private profileService: ProfileService, private toastr: ToastsManager, private viewContainerRef: ViewContainerRef, private authService: AuthService, private router: Router) {
    this.toastr.setRootViewContainerRef(viewContainerRef);
  }
  ngOnInit() { }

  getUser() {
    var id = 'yxCf4H5lK5gnbbQAKGQPXslvDIe2';
    this.profileService.getById(id)
      .subscribe(result => this.user = result,
      error => this.showErrorMessage(error));
  }
  onSubmit(form: NgForm) {
    this.user.id = this.authService.getCurrentUser().uid;
    this.user.name = form.value.name;
    this.user.slack = form.value.slack;
    this.profileService.create(this.user)
      .subscribe(m => {
        this.toastr.success('', 'Sucesso')
        this.router.navigateByUrl('');
      },
      error => this.showErrorMessage(error));
  }
  selectedCompetence(event: any) {
    this.user.competences = new Array();
    for (var item of event.value) {
      var newCompetence = new Competence();
      newCompetence.name = item.value;
      this.user.competences.push(newCompetence);
    }
  }
  private showErrorMessage(error: any) {
    this.toastr.error('Ocorreu um erro ao realizar a operação.', 'Oops!');
  }
}
