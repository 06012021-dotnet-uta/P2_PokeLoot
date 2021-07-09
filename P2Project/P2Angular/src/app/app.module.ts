import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { TradeCardPageComponent } from './trade-card-page/trade-card-page.component';
import { UnlockCardPageComponent } from './unlock-card-page/unlock-card-page.component';
import { ViewInformationPageComponent } from './view-information-page/view-information-page.component';
import { ViewBalancePageComponent } from './view-balance-page/view-balance-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    ProfilePageComponent,
    GamePageComponent,
    CreatePostComponent,
    TradeCardPageComponent,
    UnlockCardPageComponent,
    ViewInformationPageComponent,
    ViewBalancePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
