function occurances(string){
    let arr = String(string).toLowerCase().split(' ')
    let word = {}
    let words = []
    let oddWords = []
    
    for (const data of arr) {
        let counter = true
        word = {data, count:0}
        for (const wordCheck of words) {
            if (wordCheck.data == word.data.toString()) {
                wordCheck.count++
                counter = false
            }
        }
        if(counter == true)
         {words.push(word)}
    }
    for (const word of words) {
        if(word.count % 2 == 0){
            oddWords.push(word)
        }
    }
   let array = []
   for (const word of oddWords) {
        array.push(word.data)
   }
   console.log(array.join(' '))
}
occurances('Cake IS SWEET is Soft CAKE sweet Food')