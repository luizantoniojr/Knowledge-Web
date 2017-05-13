import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routing, RoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BoxComponent } from './components/box/box.component';
import { FeedComponent } from './components/feed/feed.component';
import { SignInComponent } from './components/auth/signin/signin.component';
import { AuthService } from "app/services/auth.service";
import { SignUpComponent } from './components/auth/signup/signup.component';
import { ProfileComponent } from "./components/profile/profile.component";
import { Md2Module }  from 'md2';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    BoxComponent,
    FeedComponent,
    SignInComponent,
    SignUpComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    Md2Module
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
