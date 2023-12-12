function Elements(numbers){
    let count = 0
    let array = []
    numbers.forEach(element => {
        array.push(element)
    });
    count = array[0] + array[array.length-1]
    console.log(count)
}
Elements([11, 58, 69])
