function substraction(numbers){
    let count = 0
    for(i=0;i<numbers.length;i++){
        if(numbers[i] % 2 === 0){
            count += numbers[i]
        } else(count -= numbers[i])
    }
    console.log(count)
}
substraction([2,4,6,8,10])