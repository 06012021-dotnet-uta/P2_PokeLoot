import { Component, OnInit } from '@angular/core';
import { Card } from '../cardcollect/card';
import { PokemonCards } from '../Models/pokemon-cards';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  newCard:PokemonCards  = {
    PokemonId: 150,
    PokemonName: 'mewtwo',
    RarityID: 5,
    IsShiny: false,
    SpriteLink:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
    SpriteLinkShiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/150.png',
    MainSprite: '',
  };
  
  constructor() { }
  
  //method to update array in usercollection
  
  ngOnInit(): void {
    if (this.newCard.IsShiny == true) {
      this.newCard.MainSprite = this.newCard.SpriteLink;
    } else {
      this.newCard.MainSprite = this.newCard.SpriteLinkShiny;
    }
    
  }

  
}
