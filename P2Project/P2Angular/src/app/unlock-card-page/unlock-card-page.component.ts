import { Component, OnInit } from '@angular/core';
import { CurrentUser } from '../Models/current-user';

@Component({
  selector: 'app-unlock-card-page',
  templateUrl: './unlock-card-page.component.html',
  styleUrls: ['./unlock-card-page.component.css']
})
export class UnlockCardPageComponent implements OnInit {

  lootboxRolled:boolean = false;
  currentUser:CurrentUser = {UserId: 1};
  constructor() { }

  ngOnInit(): void {
  }

  rollLootbox() :void{
    
  }
}
