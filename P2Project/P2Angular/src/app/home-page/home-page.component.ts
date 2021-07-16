import { Component, OnInit } from '@angular/core';
import { DisplayServiceService } from '../display-service.service';
import { IPost } from '../Models/IPost';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  displayBoard: IPost[];
  
  constructor(private _displayService : DisplayServiceService) {
    this.displayBoard = [];
   }

  
   //we should edit the api to also recieve the original username of poster
  ngOnInit(): void {
    this._displayService.DisplayBoard().subscribe(
      result => {
        for(let i = 0; i < result.length; i++){
          let PostId = result[i].postId;
          let PokemonId = result[i].pokemonId;
          let PostTime = result[i].postTime;
          let PostDescription = result[i].postDescription;
          let Price = result[i].price;
          let StillAvailable = result[i].stillAvailable;
          let IsShiny = result[i].isShiny;

          let Post: IPost = {PostId, PokemonId, PostTime, PostDescription, Price, StillAvailable, IsShiny}
          this.displayBoard.push(Post);
        }
      }
    )
  }

}
