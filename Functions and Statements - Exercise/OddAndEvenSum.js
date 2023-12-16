function number(num){
    let array = String(num).split('')
    let oddSum = 0
    let evenSum = 0
    for(i=0;i<array.length;i++){
        if(array[i] % 2 == 0){
            evenSum+=Number(array[i])
        } else{oddSum+=Number(array[i])}
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
number(1000435)