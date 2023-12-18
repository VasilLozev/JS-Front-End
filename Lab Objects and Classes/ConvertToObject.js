function JsonConvert(string){
    let person =  JSON.parse(string)

    for (const key in person) {
        if (Object.hasOwnProperty.call(person, key)) {
            const element = person[key];
            console.log(`${key}: ${element}`)
            
        }
    }
}

JsonConvert('{"name": "George", "age": 40, "town": "Sofia"}')