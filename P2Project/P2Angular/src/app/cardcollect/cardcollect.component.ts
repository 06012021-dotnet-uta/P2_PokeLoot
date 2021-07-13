import { Component, Input, OnInit } from '@angular/core';
import { Card } from './card'; 

@Component({
  selector: 'app-cardcollect',
  templateUrl: './cardcollect.component.html',
  styleUrls: ['./cardcollect.component.css']
})
export class CardCollectComponent implements OnInit {
  title:string ="CardCollectComponent";
  user:string="this.user";
  userCollection:Card[]=[{
    pokeid:1,
    pokename:'Bulbasaur',
    rarity:5,
    quanNorm:3,
    spriteNorm:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    quanShiny:0,
    spriteShiny:"spriteshiny",
    },
    {
      pokeid:4,
      pokename:'Squirtle',
      rarity:5,
      quanNorm:3,
      spriteNorm:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
      quanShiny:0,
      spriteShiny:"spriteshiny",
    },
    {
    pokeid:7,
    pokename:'Charmander',
    rarity:5,
    quanNorm:3,
    spriteNorm:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    quanShiny:0,
    spriteShiny:"spriteshiny"
    }
    ];
    //Card Collections are aesthetically styled arrays of Card data structure

  //@Input() public newcard:Card;

  // AddCardTest(event:Card):void{
  //   this.service.AddsCardsTest().subscribe(x => console.log("card added"));
  //private service:CollectCardsService
  // }

  

  constructor(/*private _cardcollectionService: CardService*/ ) { }

  ngOnInit(): void {
    //this._cardcollectionService.GetCardTest();
    
    
  }

}
