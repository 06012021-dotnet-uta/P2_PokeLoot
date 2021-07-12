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
  { path: '', redirectTo: 'app-root', pathMatch: 'full' },
  { path: 'Signup', component: SignupPageComponent },
  { path: 'Home', component: HomePageComponent },
  { path: 'Profile', component: ProfilePageComponent },
  { path: 'Game', component: GamePageComponent },
  { path: 'Post', component: CreatePostComponent },
  { path: 'TradeCard', component: TradeCardPageComponent },
  { path: 'UnlockCard', component: UnlockCardPageComponent },
  { path: 'ViewInformation', component: ViewInformationPageComponent },
  { path: 'ViewBalance', component: ViewBalancePageComponent },
  { path: '**', component: HomePageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
