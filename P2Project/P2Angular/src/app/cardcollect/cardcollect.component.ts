import { Component, OnInit } from '@angular/core';
import { CardServiceService } from '../card-service.service';
import { Card } from './card'; 
import { Dictionary } from './IDictionary';
import { User } from './IUser';

@Component({
  selector: 'app-cardcollect',
  templateUrl: './cardcollect.component.html',
  styleUrls: ['./cardcollect.component.css']
})
export class CardCollectComponent implements OnInit {
  title:string ="CardCollectComponent";
  user:User= {
    UserId:900,
    FirstName:'C',
    LastName:'string',
    UserName:'string',
    Password:'string',
    Email:'string',
    CoinBalance:100,
    AccountLevel:100,
    TotalCoinsEarned:100,
};
    userCollection:Dictionary[]=[];
    //Deprecated - userCollection is no longer Card[] type w/ API up and runnning
  // userCollection:Card[]=[{
  //   pokeid:1,
  //   pokename:'Bulbasaur',
  //   rarity:5,
  //   spriteNorm:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
  //   spriteShiny:"spriteshiny",
  //   },
  //   {
  //     pokeid:4,
  //     pokename:'Squirtle',
  //     rarity:5,
  //     spriteNorm:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
  //     spriteShiny:"spriteshiny",
  //   },
  //   {
  //   pokeid:7,
  //   pokename:'Charmander',
  //   rarity:5,
  //   spriteNorm:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
  //   spriteShiny:"spriteshiny"
  //   }
  //   ];


  // AddCardTest(event:Card):void{
  //   this.service.AddsCardsTest().subscribe(x => console.log("card added"));
  // }

  


  constructor(private _cardcollectionService: CardServiceService ) { }

  ngOnInit():void {
    this._cardcollectionService.GetCardsList().subscribe(
      x => {this.userCollection = x},
      y => {

      }
    );
  }

  //Method parse the service return:

  //Method to display user's card collection data:

  //Method to sort collection based on ID

  //Method to sort collection based on Rarity

  //Method to sort collection based on Name





/*Notes: Creating a form
Make sure ti import FOrmsModule in app.module
NameForm:FormGroup = new FormGroup({
  propertyname: new FormControl(default_value, arrayValidators=[Validators.Validators_property,...,Validators.Validators_property]),
  ...
  propertyname: new FormControl(default_value, arrayValidators=[Validators.Validators_property,...,Validators.Validators_property]),

  2) Then create a form in html that is [] bound to your NameForm and also eventbound to (ngSubmit)="SubmitFunction($event)"
  <label for 
  <input type= ; name = ; placeholder = ; formControlName = "property-nameK"; class = "form-control">
})
*/


/*This is our callback funciton for the event, when making form submission
NameFormSubmit(event:MousEvent/submitevent):void{

}
*/ 
}
