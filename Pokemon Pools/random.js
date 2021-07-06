function getPool(){
    let rand = Math.random();
    rand *= 100;
    if(rand < 40){
        return 'Very Common';
    }
    if(rand > 40 && rand < 70){
        return 'Common';
    }
    if(rand > 70 && rand < 90){
        return 'Rare';
    }
    if(rand > 90 && rand < 98){
        return  'Super Rare';
    }
    if(rand > 98){
        return 'Specially Super Rare';
    }
}

function getPokeId(pool){
    let rand = Math.random();
    rand *= pool.length;
    return pool[Math.floor(rand)];
}

function isShiny(){
    let rand = Math.random()
    return(rand < .1);
}