using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using P2DbContext.Models;

namespace BusinessLayer
{
    public interface IBusinessModel
    {
        public Dictionary<PokemonCard, bool> rollLootbox(P2DbContext.Models.User currentUser);

        public Dictionary<string, bool> buyFromPost(Post post, User currentUser);
        
        public List<Post> getDisplayBoard();

        public Dictionary<CardCollection, PokemonCard> getUserCollection(User currentUser);

        public bool newPost(Post newPost, User currentUser);

        public User login(string username, string password);

        public bool signUp(User newUser);

        public bool incrementUserBalance(User currentUser, int coinsToAdd);

        public PokemonCard getPokemonById(int id);
    }
}
