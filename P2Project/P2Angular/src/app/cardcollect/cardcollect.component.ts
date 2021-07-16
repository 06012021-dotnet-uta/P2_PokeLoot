import { IcuPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { CardServiceService } from '../card-service.service';
import { ICard } from './ICard';
import { Observable, of, BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-cardcollect',
  templateUrl: './cardcollect.component.html',
  styleUrls: ['./cardcollect.component.css']
})

export class CardCollectComponent implements OnInit {

  userCollection: ICard[];
  private userId = localStorage.getItem('userId')


  constructor(private _cardcollectionService: CardServiceService) { 
    this.userCollection = []

  }

  ngOnInit(): void {
    if(this.userId != null)
    {
      this._cardcollectionService.GetCardsList(this.userId).subscribe(
        result => {
          for(let i = 0; i < result.length; i++)
          {
            
            let PokemonId     = result[i].Key.PokemonId;
            let Amount        = result[i].Key.QuantityNormal;
            let AmountShiny   = result[i].Key.QuantityShiny;
            let RarityId      = result[i].Value.RarityId;
            let Link          = result[i].Value.SpriteLink;
            let LinkShiny     = result[i].Value.SpriteLinkShiny;
            let PokemonName   = result[i].Value.PokemonName;

            if(Amount > 0)
            {
              let Quantity = Amount;
              let SpriteLink = Link;
              let IsShiny = false;
              let card : ICard = {PokemonId, Quantity, RarityId, SpriteLink, PokemonName, IsShiny};
              this.userCollection.push(card);
            }
            if(AmountShiny > 0)
            {
              let Quantity = AmountShiny;
              let SpriteLink = LinkShiny;
              let IsShiny = true;
              let card : ICard = {PokemonId, Quantity, RarityId, SpriteLink, PokemonName, IsShiny};
              this.userCollection.push(card);
            }
            
          }

        }

      );
    }

  }
}
