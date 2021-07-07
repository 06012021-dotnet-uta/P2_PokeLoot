
--Populate users--
 insert into Users(FirstName, LastName, UserName, Password, Email, CoinBalance, AccountLevel, TotalCoinsEarned)
 Values('Alain', 'Duplan', 'alain.duplan' ,'Revature',  'alain.duplan@revature.net', 100, 20, 200);
 insert into Users(FirstName, LastName, UserName, Password, Email, CoinBalance, AccountLevel, TotalCoinsEarned)
 Values('Mason', 'Sanborn', 'mason.sanborn', 'Revature', 'mason.sanborn@revature.net', 200, 40, 400);
 insert into Users(FirstName, LastName, UserName, Password, Email, CoinBalance, AccountLevel, TotalCoinsEarned)
 Values('Adrian', 'Gonzalez', 'adrian.gozalez', 'Revature', 'adrian.gonzalez@revature.net', 300, 60, 600);
 insert into Users(UserID, FirstName, LastName, UserName, Password, Email, CoinBalance, AccountLevel, TotalCoinsEarned)
 Values('Christian', 'Romero', 'christian.romero', 'Revature', 'christian.romero@revature.net', 400, 80, 800);


--Populate Rarity Types
 insert into RarityTypes(RarityId, RarityCategory)
 values(1, 'Very Common');
  insert into RarityTypes(RarityId, RarityCategory)
 values(2, 'Common');
  insert into RarityTypes(RarityId, RarityCategory)
 values(3, 'Rare');
  insert into RarityTypes(RarityId, RarityCategory)
 values(4, 'Super Rare');
  insert into RarityTypes(RarityId, RarityCategory)
 values(5, 'Specially Super Rare');




--Populate Cards
SET ANSI_WARNINGS OFF;
 INSERT into PokemonCards(PokemonId, RarityId, SpriteLink, SpriteLinkShiny, PokemonName)
 values(132, 1, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png','Ditto');
  INSERT into PokemonCards(PokemonId, RarityId, SpriteLink, SpriteLinkShiny, PokemonName)
 values(25, 1,'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png','Pikachu');
 INSERT into PokemonCards(PokemonId, RarityId, SpriteLink, SpriteLinkShiny, PokemonName)
 values(448, 4,'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/448.png','Lucario');
  INSERT into PokemonCards(PokemonId, RarityId, SpriteLink, SpriteLinkShiny, PokemonName)
 values(150, 5,'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/150.png','Mewtwo');
 INSERT into PokemonCards(PokemonId, RarityId, SpriteLink, SpriteLinkShiny, PokemonName)
 values(68, 4,'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/68.png','Machamp');
 INSERT into PokemonCards(PokemonId, RarityId, SpriteLink, SpriteLinkShiny, PokemonName)
 values(137, 2,'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/137.png','Porygon');
 INSERT into PokemonCards(PokemonId, RarityId, SpriteLink, SpriteLinkShiny, PokemonName)
 values(94, 3,'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/94.png', 'Gengar');
SET ANSI_WARNINGS ON;



--populate pokemon cards
 insert into CardCollection(userid, PokemonId, QuantityNormal, QuantityShiny)
values(1, 25, 1, 0); 
insert into CardCollection(userid, PokemonId, QuantityNormal, QuantityShiny)
values(2, 68, 1, 0); 
insert into CardCollection(userid, PokemonId, QuantityNormal, QuantityShiny)
values(2, 132, 0, 1); 
insert into CardCollection(userid, PokemonId, QuantityNormal, QuantityShiny)
values(3, 150, 1, 0); 
insert into CardCollection(userid, PokemonId, QuantityNormal, QuantityShiny)
values(3, 94, 0, 1); 
insert into CardCollection(userid, PokemonId, QuantityNormal, QuantityShiny)
values(3, 448, 1, 0); 
insert into CardCollection(userid, PokemonId, QuantityNormal, QuantityShiny)
values(4, 150, 1, 0); 
insert into CardCollection(userid, PokemonId, QuantityNormal, QuantityShiny)
values(4, 448, 0, 2); 
insert into CardCollection(userid, PokemonId, QuantityNormal, QuantityShiny)
values(4, 68, 1, 0); 
insert into CardCollection(userid, PokemonId, QuantityNormal, QuantityShiny)
values(4, 25, 3, 0); 
insert into CardCollection(userid, PokemonId, QuantityNormal, QuantityShiny)
values(4, 137, 1, 1); 



--Populate Posts
 insert into Posts(PokemonID, PostTime, PostDescription, price, StillAvailable)
 values(25, GETDATE(),'Who wants to buy my Pikachu for cheap?', 5, 1);
 insert into Posts(PokemonID, PostTime, PostDescription, price, StillAvailable)
 values(68, GETDATE(),'Machamp?', 100, 1);
 insert into Posts(PokemonID, PostTime, PostDescription, price, StillAvailable)
 values(94, GETDATE(),'Fun Fact: this is Alain''s favorite pokemon', 170, 0);
 insert into Posts(PokemonID, PostTime, PostDescription, price, StillAvailable)
 values(132, GETDATE(),'My prize little Ditto', 200, 1);
 insert into Posts(PokemonID, PostTime, PostDescription, price, StillAvailable)
 values(150, GETDATE(),'MEWTWO MEWTWO MEWTWO', 500, 1);
 insert into Posts(PokemonID, PostTime, PostDescription, price, StillAvailable)
 values(68, GETDATE(),'If your reading this your to late', 200, 0);
 insert into Posts(PokemonID, PostTime, PostDescription, price, StillAvailable)
 values(25, GETDATE(),'Pika?', 50000, 1);
insert into Posts(PokemonID, PostTime, price, StillAvailable)
 values(448, GETDATE(), 500, 1);
insert into Posts(PokemonID, PostTime, PostDescription, StillAvailable)
 values(150, GETDATE(),'OMG SHINY MEWTWO', 1);
 insert into Posts(PostTime, PostDescription, StillAvailable)
 values(GETDATE(),'I''m not selling anything just making a casual post', 1);
 insert into Posts(PostTime, PostDescription, StillAvailable)
 values(GETDATE(),'When are we getting Galar Pokemon?', 1);
 insert into Posts(PokemonID, PostTime, PostDescription, StillAvailable)
 values(68, GETDATE(),'Look at my Machamp!', 1);
 


--Popuplate postType
insert into PostTypes(PostType, PostCategory)
values(1, 'Discussion');
insert into PostTypes(PostType, PostCategory)
values(2, 'Sales');
insert into PostTypes(PostType, PostCategory)
values(3, 'Display');



--Populate display Board
insert into DisplayBoard(PostId, UserId, PostType)
Values(1, 2, 2);
insert into DisplayBoard(PostId, UserId, PostType)
Values(2, 3, 2);
insert into DisplayBoard(PostId, UserId, PostType)
Values(3, 1, 2);
insert into DisplayBoard(PostId, UserId, PostType)
Values(4, 4, 2);
insert into DisplayBoard(PostId, UserId, PostType)
Values(5, 1, 2);
insert into DisplayBoard(PostId, UserId, PostType)
Values(6, 2, 2);
insert into DisplayBoard(PostId, UserId, PostType)
Values(7, 3, 2);
insert into DisplayBoard(PostId, UserId, PostType)
Values(8, 4, 2);
insert into DisplayBoard(PostId, UserId, PostType)
Values(9, 1, 3);
insert into DisplayBoard(PostId, UserId, PostType)
Values(10, 2, 1);
insert into DisplayBoard(PostId, UserId, PostType)
Values(11, 3, 1);
insert into DisplayBoard(PostId, UserId, PostType)
Values(12, 4, 3);




