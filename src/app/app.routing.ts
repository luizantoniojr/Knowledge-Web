import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 import { HomeComponent } from './components/home/home.component';
 import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
     { path: '', component: HomeComponent },
     { path: 'Login', component: LoginComponent },
];

export const RoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);