function City( {name, area, population, country, postCode} ){
    
    let city = {name, area, population, country, postCode}
    for (const key in city) {
        if (Object.hasOwnProperty.call(city, key)) {
            const element = city[key];
            console.log(`${key} -> ${element}`)
        }
    }
}
City({

    name: "Sofia",
    
    area: 492,
    
    population: 1238438,country: "Bulgaria", postCode: "1000" })