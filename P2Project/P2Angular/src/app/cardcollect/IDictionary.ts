import { Key } from "./IKey";
import { Value } from "./IValue";

export interface Dictionary{
    Key:object{
        PokemonId:number,
        UserId:number,
        QuantityNormal:number,
        QuantityShiny:number,
    },
    Value:object{
        RarityId:number,
        SpriteLink:string,
        SpriteLinkShiny:string,
        PokemonName:string
    }
}