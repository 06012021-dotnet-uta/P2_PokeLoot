import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { User } from './IUser';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  title:string='Profile';
  
  KantoBadges:[]=[];
  JohtoBadges:boolean[]=[false,false,false,false,false,false,false,false];
  HoennBadges=[0,0,0,0,0,0,0,0];
  currentProfile!:User;

  constructor(private _service:AccountService) { }

  ngOnInit(): void {
    this._service.GetUserProfile().subscribe(
      x => {this.currentProfile = x; console.log("succesfully retrieved object")},
      y => {console.log(`there was an error ${y}`)}
    );

    this.ViewBadges(this.currentProfile,this.JohtoBadges);
  }

  //method to check currentProfile badge requirements
  ViewBadges(currentProfile:User, JohtoBadges:boolean[]){
    currentProfile.TotalCoinsEarned > 100 ? JohtoBadges[1] = true : false;
    currentProfile.TotalCoinsEarned > 1000 ? JohtoBadges[2] = true : false;
    currentProfile.TotalCoinsEarned > 10000 ? JohtoBadges[3] = true : false;
    //account age
    //most coins
    //current balance > N?
    currentProfile.AccountLevel > 1 ? JohtoBadges[6] = true : false;
    currentProfile.AccountLevel > 50 ? JohtoBadges[7] = true : false;
    currentProfile.AccountLevel > 100 ? JohtoBadges[8] = true : false;
  }
  
  //method to create event 

}
