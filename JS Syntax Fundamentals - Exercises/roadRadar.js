function radar(speed, area){
    let limit = 0
    if (area === "motorway"){
        limit = 130
    }else if (area === "interstate"){
        limit = 90
    }else if (area === "city"){
        limit = 50
    }else if (area === "residential"){
        limit = 20
    }

    if(speed <= limit){
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    }
    else {
        let status
        if(speed-limit <=20){
            status = "speeding"
        } else if(speed-limit>20 && speed-limit <= 40){
            status = "excessive speeding"
        }
        else{
            status= "reckless driving"
        }
        console.log(`The speed is ${speed-limit} km/h faster than the allowed speed of ${limit} - ${status}`)
    }
}