export interface IPost{
    PostId: number,
    PokemonId?: number,
    PostTime: Date,
    PostDescription: string,
    Price?: number,
    StillAvailable: boolean,
    IsShiny?: boolean

}