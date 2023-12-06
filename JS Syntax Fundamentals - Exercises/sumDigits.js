function sumDigits(num){
    let sum = 0
    let numAsString = String(num)

    for(i=0;i<numAsString.length;i++){
      let currentNum = Number(numAsString[i])
        sum+=currentNum
    }
    console.log(sum)
}