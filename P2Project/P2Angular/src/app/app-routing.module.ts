import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { CreatePostComponent } from './create-post-page/create-post.component';
import { TradeCardPageComponent } from './trade-card-page/trade-card-page.component';
import { UnlockCardPageComponent } from './unlock-card-page/unlock-card-page.component';
import { ViewInformationPageComponent } from './view-information-page/view-information-page.component';
import { ViewBalancePageComponent } from './view-balance-page/view-balance-page.component';



const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: LoginPageComponent },
  { path: 'Signup', component: SignupPageComponent },
  { path: 'Home/:id', component: HomePageComponent },
  { path: 'Profile/:id', component: ProfilePageComponent },
  { path: 'Game/:id', component: GamePageComponent },
  { path: 'Post/:id', component: CreatePostComponent },
  { path: 'TradeCard/:id', component: TradeCardPageComponent },
  { path: 'UnlockCard/:id', component: UnlockCardPageComponent },
  { path: 'ViewInformation/:id', component: ViewInformationPageComponent },
  { path: 'ViewBalance/:id', component: ViewBalancePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
