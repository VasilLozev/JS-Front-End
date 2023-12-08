function area(num){
    let res = 0
    let number = Number(num)
    if(number === num){
        res = Math.pow(num,2) * Math.PI
        console.log(res.toFixed(2))
    } else {console.log(`We can not calculate the circle area, because we receive a ${typeof(num)}`)}
}

area(5)