
    let static = {
        redCars:21,
        blueCars:45,
        greenCars:12,
        raceCars:5,
        blackCars:40,
        rareCars:2
    };
    (function main() {
        for(let i in static){
            if(static[i]%2 != 0){
                console.log(static[i]);
            }
            else if(i[0] === 'r'){
                console.log(static[i]);
            }
            else{
                continue;
            }
        }
    }());