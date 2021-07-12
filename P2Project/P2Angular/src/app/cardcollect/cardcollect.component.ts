import { Component, Input, OnInit } from '@angular/core';
import { CollectCardsService } from '../collect-cards.service';
import { Card } from './card'; 

@Component({
  selector: 'app-cardcollect',
  templateUrl: './cardcollect.component.html',
  styleUrls: ['./cardcollect.component.css']
})
export class CardcollectComponent implements OnInit {

  userCollection:Card[]=[];//Card Collections are aesthetically styled arrays of Card data structure

  //@Input() public newcard:Card;

  // AddCardTest(event:Card):void{
  //   this.service.AddsCardsTest().subscribe(x => console.log("card added"));
  // }

  constructor(private service:CollectCardsService) { }

  ngOnInit(): void {
    this.userCollection = this.service.GetCardTest();
    
  }

}
