using System;
using System.Collections;
using System.Collections.Generic;
using P2DbContext.Models;
using System.Linq;

namespace BusinessLayer
{
    public class BusinessModel : IBusinessModel
        {

        P2DbClass context = new P2DbClass();
        /// <summary>
        /// Generate a lootbox for the player will add a randomly generated card into the users collection and will update the datebase based on if the card generated is shiny or not.
        /// </summary>
        /// <param name="currentUser">Current user who is recieving a lootbox</param>
        /// <returns>Dictionary object where key is the generated card and the value is a boolean stating whether or not the card is shiny</returns>
        public Dictionary<PokemonCard, bool> rollLootbox(P2DbContext.Models.User currentUser){
            Random random = new Random();
            bool isShiny = false;
            Dictionary<PokemonCard, bool> result = new Dictionary<PokemonCard, bool>();
            
            P2DbContext.Models.PokemonCard card;
            int rareId; //generate random rarity based on preset distribution
            int rand = random.Next(101);            
            if(rand <= 40){
                rareId = 1;
            }
            else if(rand > 40 && rand < 70){
                rareId = 2;
            }
            else if(rand >= 70 && rand < 90){
                rareId = 3;
            }
            else if(rand >= 90 && rand < 98){
                rareId = 4;
            }
            else {
                rareId = 5;
            }

            var pokeList = context.PokemonCards.Where(x => x.RarityId == rareId).ToList();  //generates the random card
            rand = random.Next(pokeList.Count);
            card = pokeList[rand];

            int shiny = random.Next(101);
            CardCollection collection = context.CardCollections.Where(x => x.UserId == currentUser.UserId && x.PokemonId == card.PokemonId).FirstOrDefault();
            if(collection == null){ //if collection is null(doesn't exist), populate the empty collection with new data and add it to the database
                collection.UserId = currentUser.UserId;
                collection.PokemonId = card.PokemonId;
                collection.QuantityNormal = 0;
                collection.QuantityShiny = 0;
                //context.CardCollections.Add(coll);                
            }
            if(shiny < 99){ //Updates collection to reflect a new normal card
                collection.QuantityNormal++;
                context.CardCollections.Attach(collection);
                context.Entry(collection).Property(x => x.QuantityNormal).IsModified = true;
            }
            else{ //Updates collection to reflect a new shiny card
                context.CardCollections.Attach(collection);
                context.Entry(collection).Property(x => x.QuantityShiny).IsModified = true;
                collection.QuantityShiny++;
                isShiny = true;     
            }
            //context.SaveChanges();
            result.Add(card, isShiny);
            return result;            
        }

        public Dictionary<string, bool> buyFromPost(Post post, User currentUser){   
            String output = "";
            Dictionary<string, bool> result = new Dictionary<string, bool>();         
            if(currentUser.CoinBalance < post.Price){ // checks if user has a sufficent balance
                output = "You don\'t have suffeiencent funds for this purchase";
                result.Add(output, false);
                return result;
            }
            if(!post.StillAvailable){ // checks if posts is available
                output = "Post is no longer avaialable!";
                result.Add(output, false);
                return result;
            }

            int sellerID = (int)context.DisplayBoards.Where(x => x.PostId == post.PostId).Select(x => x.UserId).FirstOrDefault();
            User seller = context.Users.Where(x => x.UserId == sellerID).FirstOrDefault();

            currentUser.CoinBalance-= (int)post.Price; //decrement  current user coin balance
            context.Users.Attach(currentUser);
            context.Entry(currentUser).Property(x => x.CoinBalance).IsModified = true;

            seller.CoinBalance+= (int)post.Price; //increment seller coin balance
            context.Users.Attach(seller);
            context.Entry(seller).Property(x => x.CoinBalance).IsModified = true;

            post.StillAvailable = false; //makes post unavailable
            context.Posts.Attach(post);
            context.Entry(post).Property(x => x.StillAvailable).IsModified = true;

            CardCollection userCollection = context.CardCollections.Where(x => x.UserId == currentUser.UserId && x.PokemonId == post.PokemonId).FirstOrDefault();
            CardCollection sellerCollection = context.CardCollections.Where(x => x.UserId == seller.UserId && x.PokemonId == post.PokemonId).FirstOrDefault();

            if(false/*post.IsShiny*/){// <--- have to update scafolding to avoid errors
                sellerCollection.QuantityShiny--;
                context.CardCollections.Attach(sellerCollection);
                context.Entry(sellerCollection).Property(x => x.QuantityShiny).IsModified = true;
                if(userCollection == null){ //if collection is null(doesn't exist), populate the empty collection with new data and add it to the database
                    userCollection.UserId = currentUser.UserId;
                    userCollection.PokemonId = (int)post.PokemonId;
                    userCollection.QuantityNormal = 0;
                    userCollection.QuantityShiny = 0;
                    //context.CardCollections.Add(userCollection);  
                }
                userCollection.QuantityShiny++;
                context.CardCollections.Attach(userCollection);
                context.Entry(userCollection).Property(x => x.QuantityShiny).IsModified = true;
                output = $"You brought a shiny ${context.PokemonCards.Where(x => x.PokemonId == post.PokemonId).Select(x => x.PokemonName).FirstOrDefault()} from ${seller.UserName} for ${post.Price} coins!";
            }
            else{
                sellerCollection.QuantityNormal--;
                context.CardCollections.Attach(sellerCollection);
                context.Entry(sellerCollection).Property(x => x.QuantityNormal).IsModified = true;
                if(userCollection == null){ //if collection is null(doesn't exist), populate the empty collection with new data and add it to the database
                    userCollection.UserId = currentUser.UserId;
                    userCollection.PokemonId = (int)post.PokemonId;
                    userCollection.QuantityNormal = 0;
                    userCollection.QuantityShiny = 0;
                    //context.CardCollections.Add(userCollection);  
                }
                userCollection.QuantityNormal++;
                context.CardCollections.Attach(userCollection);
                context.Entry(userCollection).Property(x => x.QuantityNormal).IsModified = true;
                output = $"You brought a ${context.PokemonCards.Where(x => x.PokemonId == post.PokemonId).Select(x => x.PokemonName).FirstOrDefault()} from ${seller.UserName} for ${post.Price} coins!";

            }
            try{
                //context.SaveChanges();
            }
            catch(Exception e){
                output = $"An exception occured: ${e}";
                result.Add(output, false);
                return result;
            }

           result.Add(output, true);
                return result;

        }
        
       

    }//class BusinessModel
}// namespace BusinessLayer
