function fruit(type, weight, price){
    let money = weight * price / 1000
    let kilograms = weight/1000
    console.log(`I need $${Number(money).toFixed(2)} to buy ${Number(kilograms).toFixed(2)} kilograms ${type}.`)
}