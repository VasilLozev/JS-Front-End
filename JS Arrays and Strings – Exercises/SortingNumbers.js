function sorting(array){
        let arrayToArray = String(array).split(',')
       
         arrayToArray.sort((a,b) => {
            return  a-b})
            let newArray = []
        while(arrayToArray.length != 0){
            
                 newArray.push(arrayToArray.shift())
                 newArray.push(arrayToArray.pop())
        }
      
    return newArray
}

console.log(sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))