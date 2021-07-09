import { Component, OnInit } from '@angular/core';
import { CollectCardsService } from '../collect-cards.service';
import { Card } from './card';

@Component({
  selector: 'app-cardcollect',
  templateUrl: './cardcollect.component.html',
  styleUrls: ['./cardcollect.component.css']
})
export class CardcollectComponent implements OnInit {
  title:string="Card Collection";
  userCards?:Card[];
  //DI into constructor
  constructor(service:CollectCardsService) { }

  ngOnInit(): void {

    //if the service runs, then populate userCards
    //this.userCards
  }

}
