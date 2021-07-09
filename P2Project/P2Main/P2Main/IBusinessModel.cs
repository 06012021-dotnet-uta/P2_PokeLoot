using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using P2DbContext.Models;

namespace BusinessLayer
{
    interface IBusinessModel
    {
        public Dictionary<PokemonCard, bool> rollLootbox(P2DbContext.Models.User currentUser);

        public Dictionary<string, bool> buyFromPost(Post post, User currentUser);
    }
}
