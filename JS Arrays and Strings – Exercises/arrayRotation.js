function rotations(array, count){
    let newArray = []
    let arrayToArray = String(array).split(',')
    for(i=0;i<arrayToArray.length;i++){
        newArray.push(arrayToArray[(count+i)%arrayToArray.length])
    }
    console.log(newArray.join(' '))
}
rotations([51, 47, 32, 61, 21], 2)