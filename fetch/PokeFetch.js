/*Business need: retrieving any pokemon's info based on some integer that is given to the function (assums the function is given an array)
1) Create simple fetch request for one pokemon - DONE
2) Create simple fetech request and print out a single value for one pokemon -DONE
3) Scale script to work when given an array of integers 
4) Scale script to work when given an array of integers and return multiple fields
*/ 

//Step 1 & 2
var arr = [];
    
function fetchpoke(){
    fetch('https://pokeapi.co/api/v2/pokemon/1')//fetch req
    .then(res => {
        if(res.ok) return res.json()})                    //takes the promise & converts to JSON. return allows next .then to use the object. Added validation
    .then(res => console.log(res.sprites.front_default, res.sprites.front_shiny))            //can access a specific object                                       
    .catch( error => {
        console.log(error)
    })
}
fetchpoke();
//front_default
//front_shiny


//We can try Promise.all - maybe for 1 fetch from api & 1 from our own API, if needed in the future?

function promisetest(){
    fetch('pokeapi')
    fetch('p2api')
    Promise.all([])//promise.all takes in an array of promises
    .then(values =>  {return Promise.all(values.map ( r => r.json()))}) //this is mapping values from each promise into an array, making an array of arrays
    .then()//if we use values from previous, the current then will have an array of arrays (deconstruct array)
}




//Step 3 - going up till 809 because pokeapi might have errors for sword & shield? bulbapedia shows that 809 is last pokemon before sword & shield

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
  document.getElementById('view-collection').addEventListener('click', changeImg);
  function changeImg() {
    counter++;//maybe put an array here?
    document.getElementById('picture').src = 'pic-' + counter + '.jpg';
    document.getElementById('picture').alt = 'pic-' + counter + '.jpg';
}

/*Return from break notes: 
1. Create capability to inject fetch data into html
2. Configure capability to alter image sources based on values from an array (usercollection array?)
3. Fix loop to fetch pokemon from user array?
*/