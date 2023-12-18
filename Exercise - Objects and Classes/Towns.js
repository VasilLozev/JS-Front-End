function parsing(arr){
    for (const data of arr) {
        let input = data.split(" | ")
        let town = input[0]
        let latitude = Number(input[1]).toFixed(2)
        let longitude = Number(input[2]).toFixed(2)
        let townData = {town,latitude,longitude}
        console.log(townData)
    }
}

parsing(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])