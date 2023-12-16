function backwardForeward(array){
    let arrayNumbers = String(array).split(',')

    for (let i = 0; i < array.length; i++) {
        let number = String(array[i]).split('');
        let anotherArray = []
        for (let j = number.length-1; j >=0 ; j--) {
            anotherArray.push(number[j])
        }
        if(String(number).match(String(anotherArray))){
            console.log('true')
        } else{console.log('false')}        
    }
}
backwardForeward([32,2,232,1010])