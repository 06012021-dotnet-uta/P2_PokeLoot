using System;
using P2DbContext.Models;
using System.Linq;

namespace BusinessLayer
{
    public class BusinessModel : IBusinessModel
        {

        P2DbClass context = new P2DbClass();
        
        public P2DbContext.Models.PokemonCard rollLootbox(P2DbContext.Models.User user){
            Random random = new Random();
            P2DbContext.Models.PokemonCard card = lootbox(random);
            int shiny = random.Next(101);
            CardCollection coll = context.CardCollections.Where(x => x.UserId == user.UserId && x.PokemonId == card.PokemonId).FirstOrDefault();
            if(coll == null){
                coll.UserId = user.UserId;
                coll.PokemonId = card.PokemonId;
                coll.QuantityNormal = 0;
                coll.QuantityShiny = 0;
                //context.CardCollections.Add(coll);
                
            }
            if(shiny < 99){
                coll.QuantityNormal++;
            }
            else{
                coll.QuantityShiny++;
                card.isShiny = true;    
            }
            //context.SaveChanges();
            return card;            
        }

        private P2DbContext.Models.PokemonCard lootbox(Random random){            
            int rare = genRarity(random);
            var pokeList = context.PokemonCards.Where(x => x.RarityId == rare).ToList();
            int rand = random.Next(pokeList.Count);
            return pokeList[rand];
        }

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
