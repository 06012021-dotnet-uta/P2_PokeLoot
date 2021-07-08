using System;
using System.Collections.Generic;

#nullable disable

namespace P2DbContext.Models
{
    public partial class PokemonCard
    {
        public PokemonCard()
        {
            CardCollections = new HashSet<CardCollection>();
            Posts = new HashSet<Post>();
        }

        public int PokemonId { get; set; }
        public int RarityId { get; set; }
        public string SpriteLink { get; set; }
        public string SpriteLinkShiny { get; set; }
        public string PokemonName { get; set; }

        public bool isShiny {get; set;} = false;

        public virtual RarityType Rarity { get; set; }
        public virtual ICollection<CardCollection> CardCollections { get; set; }
        public virtual ICollection<Post> Posts { get; set; }
    }
}
