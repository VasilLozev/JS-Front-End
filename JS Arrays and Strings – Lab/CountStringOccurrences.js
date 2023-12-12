function occurrances(text, word){
    let textToString = String(text)
    let array = textToString.split(' ')
    let count = 0
    let wordToString = String(word)
    for(i=0;i<=array.length-1;i++){
        if(array[i].toString() == wordToString){
            count++
        }
    }
    console.log(count)
}

occurrances('softuni is great place for learning new programming languages',
'softuni')