const db = [];
const types = ["light", "jeep", "heavy", "moto", "minibus"];
const radiuses = ["R15", "R18", "R22,5", "R30"];
const widthDimensions = ["165", "185", "205", "215", "275", "285"];
const heightDimensions = ["40", "45", "50", "60", "65", "70"];
const brands = ["continental", "michelin", "goodyear", "bridgestone", "nokian", "hankook", "кама", "росава"];
const seasons = ["summer", "winter", "universal"];

for(var i = 0; i < 1000; i++){
    db.push(new Tire());
}

function Tire(){
    return {
        type: getRandomValue(types),
        radius: getRandomValue(radiuses),
        width: getRandomValue(widthDimensions),
        height: getRandomValue(heightDimensions),
        brand: getRandomValue(brands),
        season: getRandomValue(seasons),
        price: Math.floor(Math.random(1000, 10000)*10000)
    }
}

function getRandomValue(array){
    return array[Math.floor(Math.random()*array.length)]
}
console.log(db)