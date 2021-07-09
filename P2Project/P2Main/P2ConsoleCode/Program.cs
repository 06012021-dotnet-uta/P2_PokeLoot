using System;
using System.Net.Http;
using System.Net;
using System.Collections.Generic;
using System.Linq;
using P2DbContext.Models;
using System.Threading.Tasks;
using Newtonsoft.Json;
using BusinessLayer;

namespace P2ConsoleTesting
{
    class Program
    {
        public static HttpClient ApiClient { get; set; } = new HttpClient();


        static void Main(string[] args)
        {
            

            P2DbClass context = new P2DbClass();


            //for(int i = 700; i <= 809; i++)
            //{
            //    var testExists = context.PokemonCards.Where(x => x.PokemonId == i).FirstOrDefault();

            //    if(testExists == null)
            //    {
            //        PopulateDbPokemon(i);
            //    }
            //    else
            //    {
            //        Console.WriteLine($"Pokemon id {i} Already Exists in DB");
            //    }
            //}


            Console.WriteLine("End Program!");




            void PopulateDbPokemon(int searchid)
            {
                string url = "https://pokeapi.co/api/v2/pokemon/" + searchid;
                var json = new WebClient().DownloadString(url);

                dynamic stuff = JsonConvert.DeserializeObject(json);

                //Console.WriteLine(stuff);

                string pokeName = stuff.name;
                int pokeId = stuff.id;
                string pokeImg = stuff.sprites.front_default;
                string pokeShinyImg = stuff.sprites.front_shiny;
                int pokeRarity;

                int sum = 0;

                int baseStat = stuff.stats[0].base_stat;
                sum += baseStat;
                baseStat = stuff.stats[1].base_stat;
                sum += baseStat;
                baseStat = stuff.stats[2].base_stat;
                sum += baseStat;
                baseStat = stuff.stats[3].base_stat;
                sum += baseStat;
                baseStat = stuff.stats[4].base_stat;
                sum += baseStat;
                baseStat = stuff.stats[5].base_stat;
                sum += baseStat;


                if (sum > 625)
                {
                    pokeRarity = 5;
                }
                else if(sum > 575)
                {
                    pokeRarity = 4;
                }
                else if (sum > 500)
                {
                    pokeRarity = 3;
                }
                else if (sum > 400)
                {
                    pokeRarity = 2;
                }
                else
                {
                    pokeRarity = 1;
                }


                Console.WriteLine();
                Console.WriteLine("Name:   " + pokeName);
                Console.WriteLine("Id:     " + pokeId);
                Console.WriteLine("Img:    " + pokeImg);
                Console.WriteLine("S-Img:  " + pokeShinyImg);
                Console.WriteLine("Rarity: " + pokeRarity);
                Console.WriteLine();



                PokemonCard newCard = new PokemonCard();

                newCard.PokemonId = pokeId;
                newCard.PokemonName = pokeName;
                newCard.SpriteLink = pokeImg;
                newCard.SpriteLinkShiny = pokeShinyImg;
                newCard.RarityId = pokeRarity;


                context.PokemonCards.Add(newCard);
                context.SaveChanges();

            }
            

            /*void testRNG(){
                BusinessModel busy = new BusinessModel();
                P2DbContext.Models.PokemonCard poke = new PokemonCard();
                for(int i = 0; i < 5; i++){
                poke = busy.lootbox();

                Console.WriteLine();
                Console.WriteLine("Name:   " + poke.PokemonName);
                Console.WriteLine("Id:     " + poke.PokemonId);
                Console.WriteLine("Img:    " + poke.SpriteLink);
                Console.WriteLine("S-Img:  " + poke.SpriteLinkShiny);
                Console.WriteLine("Rarity: " + poke.RarityId);
                Console.WriteLine();
                }


            }

            testRNG(); */

        }


        
    }
}
