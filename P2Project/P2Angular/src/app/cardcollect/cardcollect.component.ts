import { Component, Input, OnInit } from '@angular/core';
import { Card } from './card'; 

@Component({
  selector: 'app-cardcollect',
  templateUrl: './cardcollect.component.html',
  styleUrls: ['./cardcollect.component.css']
})
export class CardCollectComponent implements OnInit {
  title:string ="CardCollectComponent";
  userCollection:Card[]=[];//Card Collections are aesthetically styled arrays of Card data structure

  //@Input() public newcard:Card;

  // AddCardTest(event:Card):void{
  //   this.service.AddsCardsTest().subscribe(x => console.log("card added"));
  //private service:CollectCardsService
  // }

  constructor() { }

  ngOnInit(): void {
    //this.userCollection = this.service.GetCardTest();
    
  }

}
