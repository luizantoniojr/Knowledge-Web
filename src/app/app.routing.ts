import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
     { path: '', component: HomeComponent },
];

export const RoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);