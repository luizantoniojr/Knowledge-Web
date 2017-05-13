import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from "app/components/auth/signin/signin.component";
import { SignUpComponent } from "app/components/auth/signup/signup.component";
import { ProfileComponent } from "app/components/profile/profile.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'SignIn', component: SignInComponent },
    { path: 'SignUp', component: SignUpComponent },
    { path: 'Profile', component: ProfileComponent },
];

export const RoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);