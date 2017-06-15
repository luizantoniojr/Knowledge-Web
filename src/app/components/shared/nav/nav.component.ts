import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AuthService } from "app/services/auth.service";
import { ToastsManager } from "ng2-toastr/ng2-toastr";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  showAuthElements: boolean = false;
  userName: string = 'Perfil';

  constructor(private authService: AuthService, private toastr: ToastsManager, private viewContainerRef: ViewContainerRef, private router: Router) {
    this.toastr.setRootViewContainerRef(viewContainerRef);
  }

  ngOnInit() {
    debugger;
    this.authService.onAuthStateChange(this.onAuthStateChange);
    var user = this.authService.getCurrentUser();
    if (user) {
      this.userName = user.displayName;
    }
  }

  signOut() {
    this.authService.signOut()
      .then(response => {
        this.router.navigateByUrl('SignIn');
      })
      .catch(error => this.toastr.error('Erro ao sair do sistema.'));
  }

//ToDO: não está funcionando, o this dentro do metodo está carregado com outro object.
  private onAuthStateChange(response: any) {
    debugger;
    if(response.email){
      this.userName = response.email;
      this.showAuthElements = true;
    }
  }
}
