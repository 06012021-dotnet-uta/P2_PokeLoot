/*
Fetching basic card data
Fetching "description card data"
Creating tier list based on Base stats
*/


//----------------------------FETCHING BASIC CARD DATA AND INSERTING------------------------------------------------------------
/*Business need: retrieving any pokemon's info based on some integer that is given to the function (assums the function is given an array)
1) Create simple fetch request for a single pokemon - DONE
2) Create simple fetech request and print out a multiple values for one pokemon -DONE
3) Scale script to work when given an array of integers 
4) Scale script to work when given an array of integers and return multiple fields
5) Inject the data into front end html
*/ 

//STEP 1 AND 2
var arr = [];
    
function fetchpokesprite(){
    fetch('https://pokeapi.co/api/v2/pokemon/1')//fetch req
    .then(res => {
        if(res.ok) return res.json()})                    //takes the promise & converts to JSON. return allows next .then to use the object. Added validation
    .then(res => console.log(res.sprites.front_default, res.sprites.front_shiny))            //can access a specific object                                       
    .catch( error => {
        console.log(error)
    })
}
fetchpokesprite();
//front_default
//front_shiny


//STEP 3 - going up till 809 because pokeapi might have errors for sword & shield? bulbapedia shows that 809 is last pokemon before sword & shield

//We can try Promise.all - maybe for 1 fetch from api & 1 from our own API, if needed in the future?

function promisetest(){
    fetch('pokeapi')
    fetch('p2api')
    Promise.all([])//promise.all takes in an array of promises
    .then(values =>  {return Promise.all(values.map ( r => r.json()))}) //this is mapping values from each promise into an array, making an array of arrays
    .then()//if we use values from previous, the current then will have an array of arrays (deconstruct array)
}

//create & populate array
const arrayId = new Array(808);
for(let i = 0; i <arrayId.length;i++ ){         
    arrayId[i] = i+1;
}
const spriteArray = new Array(808);

//populate array
/*
function fetchloop(){

        function fetchpokeloop(...arrayId){
            fetch(`https://pokeapi.co/api/v2/pokemon/${arrayId[i]}`) 
            .then(res => {
                if(res.ok) return res.json()})                    
            .then(res => spriteArray[i])            
            .catch( error => {
                console.log(error)
            })
        }
    }
}
fetchloop();
*/


/*for(let i=1;i<=809; i++) {                  
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)   
      .then(response => {      if(response.ok) return response.json();
        throw new Error(response.statusText);
      })
      .then(function handleData(data) {
          return fetch('example.api')   // should be returned 1 time
          .then(response => {
              if(response.ok) return response.json();
              throw new Error(response.statusText);
            })
      })
      .catch(function handleError(error) {
          console.log("Error" +error);            
      }); 
  };
  */



  //function to populate images
  var counter = 0;
  var userCollection = [123,235,489];
  var userCollectionShiny = [100,200,300]
  document.getElementById('view-collection').addEventListener('click', changeNormals);
  document.getElementById('view-collection-shiny').addEventListener('click', changeShinies);


  function changeImgs() {
    for(counter = 0; counter < userCollection.length; counter++){   //takes counter & increments 
      document.getElementById('picture'+`${counter}`).src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+`${userCollection[counter]}`+".png";
      document.getElementById('picture'+`${counter}`).alt = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+`${userCollection[counter]}`+".png";
    }
  }
     //logic to distinguish between shiny & normal?
     function changeShiny() {
        for(counter = 0; counter < userCollection.length; counter++){   //takes counter & increments 
        document.getElementById('picture'+`${counter}`+'shiny').src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"+`${userCollectionShiny[counter]}`+".png";
        document.getElementById('picture'+`${counter}`+'shiny').alt = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"+`${userCollectionShiny[counter]}`+".png";
        }
        }

//these functions are going to be the CONTAINER functions for the functions that change content 
function changeNormals(){
    changeImgs();
}
function changeShinies(){
    changeShiny();
}












/*Return from break notes: 
1. Create capability to inject fetch data into html
2. Configure capability to alter image sources based on values from an array (usercollection array?) - DONE
*/
var counter=0;
var userSprites = [];

for(let i = 0; i < userCollection.length;i++ ){         
    userSprites[i] = userCollection[i];
}

//console.log(userSprites)

for(counter = 0; counter <= userCollection.length; counter++) {                  
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)   
      .then(res => { if(res.ok) return res.json()})
      .then(res => console.log(res.sprites.front_default, res.sprites.front_shiny)) //don't print to console but save
      .then(function handleData(data) {
          return fetch('example.api')   // should be returned 1 time
          .then(response => {
              if(response.ok) return response.json();
            })
      })
  };

  //maybe learn how to do this in angular?



//----------------------------FETCHING EXTRA CARD DATA------------------------------------------------------------
/*Description data consists of:
Base Stats
Type
Height
Weight
*/

//After reviewing the API data, it seems that height & weight are in Metric system & should have a decimal point after the before the last digit 
function fetchpokedesc(){
    fetch('https://pokeapi.co/api/v2/pokemon/445')//fetch req
    .then(res => {
        if(res.ok) return res.json()})                    //takes the promise & converts to JSON. return allows next .then to use the object. Added validation
    .then(res => console.log(res.stats, res.types, res.height.toFixed(1), typeof(res.height.toFixed(1)), 
    parseFloat(res.height.toFixed(1)), typeof(parseFloat(res.height.toFixed(1)))))
    //.toFixed(decimal places) converts the data to a string, but for some reason the parseFloat method doesn't convert the string to a float - only to an int
    }
fetchpokedesc();


//----------------------------------CREATING A TIER LIST BASED ON STATS--------------------------------------------------------------
/*Pokemon rarity tiers based on base stats: 5 tiers
SSR: Specially Super Rare (650+ BS or 'legendaries')
SR: Super Rare            (501-650)
R: Rare                   (401-500)
C: Common                 (325-400)
VC: Very Common           (150-325 BS)

Because the PokeAPI doesn't support Sword and Shield, the functional ranges of pokemon base stats is [150,800].

Source: https://www.reddit.com/r/MandJTV/comments/fvza5t/every_single_pokemon_base_stat_tier_list_finnaly/
*/