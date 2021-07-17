export interface IPost{
    PostId: number,
    PokemonId?: number,
    PostTime: Date,
    PostDescription: string,
    Price?: number,
    StillAvailable: boolean,
    IsShiny?: boolean,
    Link?: string,
    UserId : number,
    UserName: string,
    SpriteLink: string,
    PostType: string,
}