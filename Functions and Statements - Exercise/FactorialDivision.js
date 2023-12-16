function fractorial(num1,num2){
    let result1 = 1
    let result2 = 1
    for(i=1;i<=num1;i++){
        result1 *= i
    }
    for(i=1;i<=num2;i++){
        result2 *= i
    }
    let finalResult = result1 / result2
    console.log(finalResult.toFixed(2))
}
fractorial(5,2)