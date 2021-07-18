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


            

            bool updaterq(int id){
                Post newPost = new Post();

                newPost.PokemonId = id;
                newPost.IsShiny = false;
                newPost.Price = 20;
                newPost.PostDescription = "I have way too many cards to blow, buy this for cheap";
                DateTime now = DateTime.Now;
                newPost.PostTime = now;
                newPost.StillAvailable = true;
                try
                {
                    context.Posts.Add(newPost);
                    context.SaveChanges();
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    return false;
                }
                int next = context.Posts.Select(x => x.PostId).Max();

                //check post details to determine post type.
                int postType = 0;
                if (newPost.PokemonId == null && newPost.Price == null)
                {
                    postType = 1; //discussion
                }
                else if (newPost.Price == null)
                {
                    postType = 3; //display
                }
                else
                {
                    postType = 2; //sale
                }

                //reflect the new post on display board
                DisplayBoard displayBoard = new DisplayBoard();
                displayBoard.UserId = 2;
                displayBoard.PostType = postType;
                Console.WriteLine(context.Posts.ToList());

                displayBoard.PostId = next;//returns the newest instance of a post(the one we just added) and grabs their id.
                context.DisplayBoards.Add(displayBoard);

                try
                {
                    context.SaveChanges();
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    return false;
                }
                return true;
            }
            //updaterq(8);
            //updaterq(35);
            //updaterq(47);
            void secondUpdate(int id){
                Post post = context.Posts.Where(x => x.PostId == id).FirstOrDefault();
                post.PostDescription = "I got 4 arms like Ben 10";
                context.Posts.Attach(post);
                context.Entry(post).Property(x => x.PostDescription).IsModified = true;
                context.SaveChanges();
            };
            //secondUpdate(15);
            //secondUpdate(14);
            //secondUpdate(13);

            void giveRaises()
            {
                var users = context.Users.ToList();
                foreach (User user in users)
                {
                    user.CoinBalance += 500;
                    user.AccountLevel -= 5;
                    user.TotalCoinsEarned += 500;

                    context.Users.Attach(user);
                    context.Entry(user).Property(x => x.CoinBalance).IsModified = true;
                    context.Entry(user).Property(x => x.AccountLevel).IsModified = true;
                    context.Entry(user).Property(x => x.TotalCoinsEarned).IsModified = true;
                    context.SaveChanges();

                }
            }

            //giveRaises();

            /* void PopulateDbPokemon(int searchid)
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

            } */


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
