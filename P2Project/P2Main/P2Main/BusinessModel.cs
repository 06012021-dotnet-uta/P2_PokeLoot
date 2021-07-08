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
            P2DbContext.Models.PokemonCard card = getRandomCard(random); //generates the random card
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

        /// <summary>
        /// Randomly generate a pokemonCard object by first randomly selection the rarity pool and then randomly selecting a pokemon in said said rarity category
        /// </summary>
        /// <param name="random">a random object</param>
        /// <returns>Randomly generated pokemonCard object</returns>
        private P2DbContext.Models.PokemonCard getRandomCard(Random random){            
            int rareId = genRarity(random); //generate random rarity based on preset distribution
            var pokeList = context.PokemonCards.Where(x => x.RarityId == rareId).ToList();
            int rand = random.Next(pokeList.Count);
            return pokeList[rand];
        }

        /// <summary>
        /// Randomly generats a number to represent the rarity pool to pull a pokemon card from.
        /// </summary>
        /// <param name="random">A random object</param>
        /// <returns>Integer representation of the rarity ID.</returns>
        private int genRarity(Random random){
            int rand = random.Next(101);            
            if(rand <= 40){
                return 1;
            }
            else if(rand > 40 && rand < 70){
                return 2;
            }
            else if(rand >= 70 && rand < 90){
                return 3;
            }
            else if(rand >= 90 && rand < 98){
                return 4;
            }
            else {
                return 5;
            }                
            
        }

    }
}
